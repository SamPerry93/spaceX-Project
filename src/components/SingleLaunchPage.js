import React from 'react'
import { Link } from 'react-router-dom'
const SingleLaunchPage = ({oneLaunch,images}) => {
    return (
        <div className="launch-page">
            <h1>Flight {oneLaunch.flight_number}</h1>
            <h2>{oneLaunch.name}</h2>
            <span><img src={images.small} alt="" /></span>
            
            <p>Launch Date: {oneLaunch.date_local}</p>
            {/* <iframe src={videoLink} title='video'></iframe> */}
            <p>{oneLaunch.details}</p>
            <Link to={`/rockets/${oneLaunch.rocket}`}>Rocket</Link>
        </div>
    )
}

export default SingleLaunchPage
