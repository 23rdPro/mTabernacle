"use client";

import React from "react"
import Countdown from "react-countdown";

const events = [
  { day: 0, time: { hours: 8, minutes: 0 }, name: 'Super Service' },  // Sunday 8am
  { day: 3, time: { hours: 18, minutes: 0 }, name: 'Communion Service' }, // Wednesday 6pm
  { day: 4, time: { hours: 9, minutes: 0 }, name: 'Transformed Eve' },  // Thursday 9am
  { day: 5, time: { hours: 8, minutes: 0 }, name: 'Healing Service' },  // Friday 8am
];

const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']

const isFirst = (date: any) => date.getDate() === 1

const isLast = (date: any) => {
  const lDay = new Date(date.getFullYear(), date.getMonth() + 1, 0)
  return lDay.getDay() === 5 && lDay.getDate() >= 25 && lDay.getDate() <= 31;
}

const isFutureEvent = (date: Date, event: any) => {
  const currentDate = new Date();
  const eventDate = new Date(date.getFullYear(), date.getMonth(), date.getDate(), event?.time.hours, 0, 0);
  return eventDate > currentDate;  // if true; we can count down to it- eventDate
};

const getNextEvent = () => {
  let day = new Date();
  for (let i=0; i<7; i++){
    let event = events.find(d => d.day === day.getDay())
    let canCountdown = isFutureEvent(day, event)
    if (isFirst(day) && canCountdown) {
      day.setHours(8, 0, 0)
      break;
    }
    if (event && canCountdown) {
      day.setHours(event.time.hours, 0, 0)
      break;
    }
    if (isLast(day) && canCountdown) {
      day.setHours(22, 0, 0)
      break;
    }
    day.setDate(day.getDate() + 1)
  }
  return day.getTime()
};

const Timer = () => {
  const [date, setDate] = React.useState(0)
  const [eventName, setEventName] = React.useState('')
  const [eventDay, setEventDay] = React.useState('')
  const [eventTime, setEventTime] = React.useState('')
  React.useEffect(() => {
    const tmp = new Date(date)
    let eventName = '';
    let eventDay = '';
    let eventTime = '';
    const updateEventInfo = () => {
      if (isFirst(tmp)) {
        eventName = "New Moon Service"
        eventDay = days[tmp.getDay()]
        eventTime = '8:00am';
      } else if (isLast(tmp) && tmp.getHours() < 22 && tmp.getHours() > 7) {
        eventName = 'Night Of Mercy';
        eventDay = days[tmp.getDay()];
        eventTime = '10:00pm';
      } else {
        let event = events.find(d => d.day === tmp.getDay());
        if (event) {
          eventName = event.name;
          eventDay = days[tmp.getDay()];
          eventTime = event.time.hours > 11 ? `${event.time.hours % 12}:00pm` : `${event.time.hours}:00am`;
        }
      }
    };
    updateEventInfo();
    setEventName(eventName);
    setEventDay(eventDay);
    setEventTime(eventTime);
  }, [date])

  const onCountdownComplete = () => {
    const nextEventDate = getNextEvent();
    if (nextEventDate !== date) {
      setDate(nextEventDate);
    }
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
               key={date}
               onComplete={onCountdownComplete}
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