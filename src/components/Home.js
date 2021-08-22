import axios from 'axios'
import React, { useEffect, useState } from 'react'
import UpcomingLaunch from '../UpcomingLaunch'
import elon from './resources/elon.jpeg'
const Home = () => {
    const [data, setData] = useState({})
    const uri = `https://api.spacexdata.com/v4/company`
    const getSpaceXInfo = async () => {
        await axios.get(uri)
        .then(res => {
            console.log(res.data)
            setData(res.data)

        })
    }
    useEffect(()=>{
        getSpaceXInfo()
        console.log(data.summary)
    },[])
    return (
        <>
            <img className="hero-image" src={elon} alt="" />
            <div className="hero-text">
                <h2>Space X Page</h2>
                {/* <p>Information on the Rockets and Launches of Space X</p> */}
                <div className="upcoming">
                    <UpcomingLaunch/>
                </div>
            </div>
            <section className="lower-section">
            <p>{data.summary}</p>
           <div className="company-info">
               <div className="summary">
                    <p> Founded by {data.founder}</p>
                    <p>COO: {data.coo}</p>
                    <p>CTO Propulsion: {data.cto_propulsion}</p>
                    <p>Employees: {data.employees}</p>
               </div>
               <div className="facts">
                    <p>Vehicles: {data.vehicles}</p>
                   <p>Launch Sites: {data.launch_sites}</p>
                   <p>Test Sites: {data.test_sites}</p>
               </div>
           </div>
           </section>
        </>
    )
}

export default Home
