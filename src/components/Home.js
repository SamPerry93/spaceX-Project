import React from 'react'
import UpcomingLaunch from '../UpcomingLaunch'
import elon from './resources/elon.jpeg'
const Home = () => {
    return (
        <>
        <img className="hero-image" src={elon} alt="" />
            <div className="hero-text">
                <h2>Space X Page</h2>
                <p>Information on the Rockets and Launches of Space X</p>
                <div className="upcoming">
                    <UpcomingLaunch/>
                </div>
            </div>
           
        </>
    )
}

export default Home
