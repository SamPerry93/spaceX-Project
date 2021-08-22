import React, { useEffect, useState } from 'react'
import RocketsCard from './RocketsCard'
const uri = `https://api.spacexdata.com/v4/rockets`
const Rockets = () => {
    const [rockets, setRockets] = useState([])
    const [loading, setLoading] = useState(true)
    useEffect(()=>{
        setLoading(true)
        fetch(uri)
        .then(res => res.json())
        .then(res =>{
            setRockets(res)
            console.log(res)
            setLoading(false)
        })
    },[])
    return (
        loading ? <div className="launches-container"><div style={{height: 400}} className="launch-card"/><div style={{height: 400}}className="launch-card"/><div style={{height: 400}} className="launch-card"/><div style={{height: 400}} className="launch-card"/></div> : <div className="launches-container">
       {rockets.map(rocket=>{
           return <RocketsCard key={rocket.rocket_id} rocket={rocket}/> 
       })}
       </div>
    )
}

export default Rockets
