import React, { useEffect, useState } from 'react'
import RocketsCard from './RocketsCard'
const uri = `https://api.spacexdata.com/v4/rockets`
const Rockets = () => {
    const [rockets, setRockets] = useState([])

    useEffect(()=>{
        fetch(uri)
        .then(res => res.json())
        .then(res =>{
            setRockets(res)
            console.log(res)
        })
    },[])
    return (
        <div className="launches-container">
       {rockets.map(rocket=>{
           return <RocketsCard key={rocket.rocket_id} rocket={rocket}/> 
       })}
       </div>
    )
}

export default Rockets
