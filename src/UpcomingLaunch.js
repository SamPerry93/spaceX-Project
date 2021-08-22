import React, { useEffect, useState } from 'react'

const UpcomingLaunch = () => {
    const [upcomingLaunch, setUpcomingLaunch] = useState({})
    const [daysTillLaunch, setDaysTillLaunch] = useState('')
    const getUpcomingLaunch = async () => {
        await fetch(`https://api.spacexdata.com/v4/launches/upcoming`)
        .then(res => res.json())
        .then(res => {
            console.log(res[0])
            setUpcomingLaunch(res[0])
        })
    }
    const calcTimeLeftTillLaunch = () => {
       const date = new Date(upcomingLaunch.date_utc)
       const now = new Date(Date.now())
       //console.log(date - now)
        //const diff = date - now
        const diff = date.getTime() - now.getTime()
        const min = diff / 60000
        const days = Math.ceil((min / 60) / 24)
        const string = days.toString()
        console.log(days.toString())
        setDaysTillLaunch(string)
        
    }
    useEffect(()=>{
        getUpcomingLaunch()
        //calcTimeLeftTillLaunch()
        const date = new Date(upcomingLaunch.date_utc)
        console.log(date.toUTCString())
        setDaysTillLaunch(date.toUTCString())
    },[])
    return (
        <div>
           <h3>Next Mission: {upcomingLaunch.name} {upcomingLaunch.flight_number} </h3>
           <h4>{daysTillLaunch}</h4>
                
        </div>
    )
}

export default UpcomingLaunch
