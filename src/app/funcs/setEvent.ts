export const getNextEvent = ({ today }: {today: Date}) => {
    // k:v => getDay: setHours
    const events: any = {3:18, 4:9, 5:8, 0:8}
    
    const keys = Object.keys(events)
    let current = today

    for (let i=0; i<7; i++){
        if (current.getDate() === 1 && current.getHours() <= 9) break;
        if (keys.includes(`${current.getDay()}`) &&
         current.getHours() <= events[current.getDay()]
        ) break;
        current = new Date(current.setDate(current.getDate() + 1))
    }

    return new Date(current.setHours(events[current.getDay()]))

}
