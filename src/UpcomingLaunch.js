import React, { useEffect, useState } from 'react'

const UpcomingLaunch = () => {
    const [upcomingLaunch, setUpcomingLaunch] = useState({})
    const getUpcomingLaunch = async () => {
        await fetch(`https://api.spacexdata.com/v4/launches/upcoming`)
        .then(res => res.json())
        .then(res => {
            console.log(res[0])
            setUpcomingLaunch(res[0])
        })
    }
    const calcTimeLeftTillLaunch = () => {
       const date = new Date(upcomingLaunch.date_local).getUTCHours

        const diff = new Date(upcomingLaunch.date_utc).toUTCString - new Date().toUTCString
        console.log(date)
    }
    useEffect(()=>{
        getUpcomingLaunch()
        calcTimeLeftTillLaunch()
    },[])
    return (
        <div>
           <span>Upcoming: {upcomingLaunch.name} {upcomingLaunch.flight_number} {upcomingLaunch.date_local.getDate}</span>
                
        </div>
    )
}

export default UpcomingLaunch
