import React, { useEffect, useState } from 'react'

const UpcomingLaunch = () => {
    const [upcomingLaunch, setUpcomingLaunch] = useState({})
    const [daysTillLaunch, setDaysTillLaunch] = useState('')
    const date = new Date(upcomingLaunch.date_utc)
    const getUpcomingLaunch = async () => {
        await fetch(`https://api.spacexdata.com/v4/launches/next`)
        .then(res => res.json())
        .then(res => {
            console.log(res)
            setUpcomingLaunch(res)
        })
    }
    const calcTimeLeftTillLaunch = async () => {
    //    const date = new Date(upcomingLaunch.date_utc)
    //    const now = new Date(Date.now())
    //    //console.log(date - now)
    //     //const diff = date - now
    //     const diff = date.getTime() - now.getTime()
    //     const min = diff / 60000
    //     const days = Math.ceil((min / 60) / 24)
    //     const string = days.toString()
    //     console.log(days.toString())
    //     setDaysTillLaunch(string)
        console.log(upcomingLaunch.date_utc)
        const date = new Date(upcomingLaunch.date_utc)
        //const date = upcomingLaunch.date_utc
        console.log(date)
        setDaysTillLaunch(date.toUTCString())
    }
    useEffect(()=>{
        getUpcomingLaunch()
        //calcTimeLeftTillLaunch()
        
        //const date = upcomingLaunch.date_utc
        // console.log(date)
        // setDaysTillLaunch(date.toUTCString())
    },[])
    return (
        <div>
           <h3>Next Mission: {upcomingLaunch.name} {upcomingLaunch.flight_number} </h3>
           <h4>{date.toUTCString()}</h4>
                
        </div>
    )
}

export default UpcomingLaunch
