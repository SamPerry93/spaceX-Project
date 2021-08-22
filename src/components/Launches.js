import React, { useEffect, useState } from 'react'
import LaunchCard from './LaunchCard'
const uri = `https://api.spacexdata.com/v4/launches/?limit=10`
const Rockets = () => {
    const [launches, setLaunches] = useState([])
    const [loading, setLoading] = useState(true)
    useEffect(()=>{
        setLoading(true)
        fetch(uri)
        .then(res => res.json())
        
        .then(res =>{
            setLaunches(res)
            console.log(res)
            setLoading(false)
        })
    },[])
    return (
        loading ? <div className="launches-container"><div style={{height: 400}} className="launch-card"/><div style={{height: 400}}className="launch-card"/><div style={{height: 400}} className="launch-card"/><div style={{height: 400}} className="launch-card"/></div> : <div className="launches-container">
       {launches.map(launch=>{
           return <LaunchCard key={launch.flight_id} launch={launch}/> 
       })}
       </div>
    )
}

export default Rockets
