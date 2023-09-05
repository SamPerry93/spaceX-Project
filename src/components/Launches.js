import axios from 'axios'
import React, { useEffect, useState } from 'react'
import LaunchCard from './LaunchCard'
import UpcomingLaunchCard from './UpcomingLaunchCard'
const uri = `https://api.spacexdata.com/v4/launches/query`
const Rockets = () => {
    const [launches, setLaunches] = useState([])
    const [loading, setLoading] = useState(true)
    const [offset, setOffset] = useState(0)
    const [ascendDescend, setAscendDescend] = useState('asc')
    
    let params = {
        offset:offset,
        limit:10,
        sort:{
            "flight_number": `${ascendDescend}`
        }
    }
    const getData = async () => {
        setLoading(true)
        await axios.post(uri,{options:params})
        .then(res => {
            setLaunches(res.data.docs)
            console.log(res)
            setLoading(false)
        })
    }
    useEffect(()=>{
        getData()
    },[offset,ascendDescend])

    const handleClickForward = () => {
        setOffset(offset + 10)
        window.scrollTo({top:0, behavior:'smooth'})
        console.log(offset)
    }
    const handleClickBack = () => {
        setOffset(offset - 10)
        window.scrollTo({top:0, behavior: 'smooth'})
    }
    const ascending = () => {
        setOffset(0)
        if(ascendDescend !== "asc"){
           
            setAscendDescend("asc")
        }else{
            
            setAscendDescend("desc")
        }
        
        console.log(ascendDescend)
    }

    
    return (
        loading ? <div className="launches-container"><div style={{height: 400}} className="launch-card"/><div style={{height: 400}}className="launch-card"/><div style={{height: 400}} className="launch-card"/><div style={{height: 400}} className="launch-card"/><div style={{height: 400}} className="launch-card"/></div> 
        : 
        <>
        <div className="launches-button-container">
            <button className="back-button" onClick={handleClickBack}>Back</button>
            <button className="ascend-button"  onClick={ascending}>
                {ascendDescend === "asc" ? "Desc": "Asc"}
            </button>
            <button className="next-button" onClick={handleClickForward}>Next</button>
        </div> 
        
        <div  className="launches-container">    
        {launches.map(launch=>{
            return( 
                launch.upcoming ?  <UpcomingLaunchCard launch={launch}/> : <LaunchCard  key={launch.id} launch={launch}/> 
            )
        })}
       
       
       </div>
       <div className="launches-button-container">
            <button className="back-button" onClick={handleClickBack}>Back</button>
           <button className="next-button" onClick={handleClickForward}>Next</button>
        </div>
      
       </>
    )
}

export default Rockets
