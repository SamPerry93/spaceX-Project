import React from 'react'

const SingleRocketPage = ({oneRocket,images,firstStage,engines,height}) => {
    
    return (
        <div className="rocket-page">
            <img className="rocket-image" src={images} alt={oneRocket.name} />
            <h1>{oneRocket.name}</h1> 
            <p>{oneRocket.description}</p>
            <div className="details-section">

                <h3> First Flight: {oneRocket.first_flight}</h3> 
                <h3>Height: {height.feet}ft </h3>  
                <h3>Stages: {oneRocket.stages}</h3>
                <h3>Boosters: {oneRocket.boosters}</h3>
            </div>
            <div className="engine-section">
                <h3>FirstStage Engines: {firstStage.engines}</h3>
                <h3>Fuel: {firstStage.fuel_amount_tons} <span>tons</span></h3>
                <h3>Burn Time: {firstStage.burn_time_sec} seconds</h3>
                <h3>Engines: {engines.number}</h3>
                <h3>Type: {engines.type}</h3>
                <h3>Version: {engines.version}</h3>
                <h3>Thrust to Weight: {engines.thrust_to_weight}</h3>
            </div>
            
        </div>
    )
}

export default SingleRocketPage
