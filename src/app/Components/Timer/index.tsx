'use client';

import { dayService, events, specialActivities } from "@/app/constants/constants"
import React from "react"
import Countdown from "react-countdown"

const Timer = () => {
    const [date, setDate] = React.useState(Number)
    const [eventName, setEventName] = React.useState('')
    const [eventTime, setEventTime] = React.useState('')
    const [eventDay, setEventDay] = React.useState('')

    const verifyDates = (date1: Date, date2: Date): boolean => (
        date1.getDay() === date2.getDay() &&
        date1.getDate() === date2.getDate() && 
        date1.getMonth() === date2.getMonth() && 
        date1.getFullYear() === date2.getFullYear()
    )
    
    const getTime = (date: Date, hour: number): number => {
        const tmp = new Date(date.getTime());
        return tmp.setHours(hour, 0, 0);
    }
    
    const nextFirst = (current: Date): number => {
        const month = current.getMonth();
        const year = current.getFullYear();
        let tmp = new Date(current.getTime());
        tmp.setFullYear(year, month + 1, 0);
    
        while (tmp.getDate() !== 1) {
            tmp.setDate(tmp.getDate() + 1);
        }
    
        return getTime(tmp, 8);
    }
    
    const nextLast = (current: Date): number => {
        const month = current.getMonth();
        const year = current.getFullYear();
        let tmp = new Date(current.getTime());
        tmp.setFullYear(year, month + 1, 0);
    
        let time = 0;
    
        while (!time) {
            time = tmp.getDay() === 5 ? getTime(tmp, 22) : 0;
            tmp.setDate(tmp.getDate() - 1);
        }
    
        return time;
    }
    
    const formatAMPM = (hour: number): string => {
        let minute = '00';
        let ampm = hour >= 12 ? 'PM' : 'AM';
        hour = hour % 12 || 12;  // Using logical OR to handle the case when hour is 0
        const strTime = hour + ':' + minute + ' ' + ampm;
        return strTime;
    }

    const onCountdownComplete = () => {
        let current = new Date();
        let date = 0;
        let artifacts: Array<string> = [];
    
        const first = nextFirst(current);
        const last = nextLast(current);
    
        while (!date) {
            const day = current.getDay();
            const eventHour = events[day];
    
            if (current.getDate() === 1 && current.getTime() < first) {
                artifacts = [
                    specialActivities.first,
                    dayService[day][0],
                    formatAMPM(8)
                ];
                date = first;
            } else if (eventHour && current.getTime() < 
            new Date(current.getTime()).setHours(eventHour, 0, 0)) {
                artifacts = [
                    dayService[day][1].toUpperCase(),
                    dayService[day][0],
                    formatAMPM(eventHour)
                ];
                date = getTime(current, eventHour);
            } else if (verifyDates(current, new Date(last)) && current.getTime() < last) {
                artifacts = [
                    specialActivities.last,
                    dayService[day][0],
                    formatAMPM(22)
                ];
                date = last;
            }
            current.setDate(current.getDate() + 1);
        }
        setDate(date)
        setEventDay(artifacts[1])
        setEventName(artifacts[0])
        setEventTime(artifacts[2])
    };

    return (
        <div className="container-fluid fact bg-dark my-0 py-5">
            <div className="container">
                <div className="row g-4 justify-content-center">
                    <div className="col-md-6 col-lg-6 text-center wow fadeIn" data-wow-delay="0.1s">
                        <i className="fa fa-calendar fa-2x text-white mb-3"></i>
                        <h2 className="mb-2 text-white" >
                            <Countdown 
                                date={date}
                                precision={3}
                                onComplete={onCountdownComplete} 
                                // onStop={onCountdownComplete}
                                // onStart={onCountdownComplete}
                                key={date}
                            />
                        </h2>
                        <p className="text-white mb-0">Time to next event</p>
                    </div>
                    <div className="col-md-6 col-lg-6 text-center wow fadeIn" data-wow-delay="0.1s">
                        <i className="fa fa-calendar fa-2x text-white mb-3"></i>
                        <h2 className="text-white mb-2" >{eventName}</h2>
                        <p className="text-white mb-0">{eventDay} {eventTime}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Timer 