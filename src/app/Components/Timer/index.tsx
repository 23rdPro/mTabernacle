"use client";

import React from "react"
import Countdown from "react-countdown";

const events = [
  { day: 0, time: { hours: 8, minutes: 0 }, name: 'Super Service' },  // Sunday 8am
  { day: 3, time: { hours: 18, minutes: 0 }, name: 'Communion Service' }, // Wednesday 6pm
  { day: 4, time: { hours: 9, minutes: 0 }, name: 'Transformed Eve' },  // Thursday 9am
  { day: 5, time: { hours: 8, minutes: 0 }, name: 'Healing Service' },  // Friday 8am
];

const first = { day: 1, time: { hours: 8 }, name: 'New Moon Service' }
const last = { day: 5, time: { hours: 22 }, name: 'Night of Mercy' }

const days = [
  'Sunday', 
  'Monday', 
  'Tuesday', 
  'Wednesday', 
  'Thursday', 
  'Friday', 
  'Saturday'
]

const isFirst = (date: any) => date.getDate() === 1

const isLast = (date: any) => {
  const lDay = new Date(date.getFullYear(), date.getMonth() + 1, 0)
  return lDay.getDay() === 5 && lDay.getDate() >= 25 && lDay.getDate() <= 31;
}

const isFutureEvent = (date: Date, event: any) => {
  const currentDate = new Date();
  const eventDate = new Date(
    date.getFullYear(),
    date.getMonth(),
    date.getDate(), 
    event?.time.hours, 0, 0
  );
  return eventDate > currentDate;  // if true; we can count down to it- 
};

const Timer = () => {
  const [date, setDate] = React.useState(0)
  const [eventName, setEventName] = React.useState('')
  const [eventDay, setEventDay] = React.useState('')
  const [eventTime, setEventTime] = React.useState('')

  const getNextEvent = () => {
    let day = new Date();
    for (let i=0; i<7; i++){
      let event = events.find(e => e.day === day.getDay() && isFutureEvent(day, e))
      // console.log(ev)
      if (isFirst(day) && isFutureEvent(day, first)) {
        day.setHours(8, 0, 0)
        setEventName(first.name)
        setEventDay(days[day.getDay()])
        setEventTime('8:00am')
        break;
      }
      if (event) {
        console.log(event, 'here')
        day.setHours(event.time.hours, 0, 0)
        setEventName(event.name)
        setEventDay(days[day.getDay()])
        setEventTime(
          event.time.hours > 11 ?
            `${event.time.hours % 12}:00pm` :
            `${event.time.hours}:00am`
        );
        break;
      }
      if (isLast(day) && isFutureEvent(day, last)) {
        day.setHours(22, 0, 0)
        setEventName(last.name)
        setEventDay(days[day.getDay()])
        setEventTime('10:00pm')
        break;
      }
      day.setDate(day.getDate() + 1)
    }
    return day.getTime()
  };

  const onCountdownComplete = () => {
    const nextEventDate = getNextEvent();
    // console.log()
    if (nextEventDate > date) {
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