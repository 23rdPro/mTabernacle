import { dayService, specialActivities } from "@/app/constants"
import React from "react"
import Countdown from "react-countdown"

const Timer = () => {
    const [date, setDate] = React.useState(Number)
    const [eventName, setEventName] = React.useState('')
    const [eventTime, setEventTime] = React.useState('')
    const [eventDay, setEventDay] = React.useState('')
    const events: any = {3:18, 4:9, 5:8, 0:8}
    const keys = Object.keys(events)

    const isFirst = ({ d: current }: { d: Date }
        ) => current.getDate() === 1 && current.getHours() <= 8

    const isLast = ({ d: current }: { d: Date}) => {
        const month = current.getMonth()
        const year = current.getFullYear()
        let tmp = new Date(current.getTime())
        tmp.setFullYear(year, month+1, 0) //
        const loop = () => {
            if (tmp.getDay() !== 5) {
                tmp = new Date(tmp.setDate(tmp.getDate()-1))
            }
            if (tmp.getDay() !== 5) setTimeout(loop, 0)
            else return current.getDay() === tmp.getDay() && tmp.getHours() <= 22
        }
        loop();    
        return false    
    }

    const others = ({ d: current }: { d: Date }) => keys.includes(`${current.getDay()}`) && current.getDay() <= events[current.getDay()]

    const formatAMPM = (hour: number) => {
        let minute = '0'
        let ampm = hour >= 12 ? 'PM' : 'AM'
        hour = hour % 12
        hour = hour ? hour : 12  // not 0
        minute = parseFloat(minute) < 10 ? '0'+minute : minute
        const strTime = hour+':'+minute+' '+ampm
        return strTime
    }

    const onCountdownComplete = () => {
        let event: Array<Date> = []  // one event at a time
        let current = new Date()
        const loop = () => {
            if (!(event.length)) {
                event = (
                    isFirst({d:current}) || 
                    isLast({d:current}) || 
                    others({d:current})) ? [...event, current] : []
                if (!(event.length)) (  // set current + 1 
                    current = new Date(current.setDate(current.getDate()+1))
                )
            }
            if (!(event.length)) setTimeout(loop, 0)
        }
        loop()
        current = new Date(current.setDate(current.getDate()+1)) // current + 1
        let hour = 0
        let eName = ''
        if (isFirst({ d: current })) {
            hour = 8
            eName = specialActivities.first
        } else if (isLast({ d: current })) {
            hour = 22
            eName = specialActivities.last
        } else if (others({ d: current })) {
            eName = dayService[current.getDay()][1].toUpperCase()
        }
        hour = hour ? hour : events[current.getDay()]

        setDate(new Date(current.getTime()).setHours(hour, 0, 0, 0))
        setEventDay(dayService[current.getDay()][0])
        setEventName(eName)
        setEventTime(formatAMPM(hour))
    }

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
                                key={date}
                            />
                        </h2>
                        <p className="text-white mb-0">Time to next event</p>
                    </div>
                    <div className="col-md-6 col-lg-6 text-center wow fadeIn" data-wow-delay="0.3s">
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