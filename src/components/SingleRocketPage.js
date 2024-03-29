import React from 'react'

const SingleRocketPage = ({oneRocket,images,firstStage,engines,height}) => {
    const date = new Date(oneRocket.first_flight)
    return (
        <div className="rocket-page">
            <img className="rocket-image" src={images} alt={oneRocket.name} />
            <div className="details-section">
                <h1>{oneRocket.name}</h1> 
                <p>{oneRocket.description}</p>
                 
            </div>
            <div className="rocket-info">
                <h3>First Flight: <span>{date.toUTCString().slice(0,16)}</span></h3> 
                <h3>Height: <span>{height.feet}ft</span> </h3> 
                <h3>Stages: <span>{oneRocket.stages}</span></h3>
                <h3>Fuel: <span>{firstStage.fuel_amount_tons} tons</span></h3>
                <h3>Boosters: <span>{oneRocket.boosters}</span></h3>
                <h3>Burn Time: <span>{firstStage.burn_time_sec} seconds</span></h3>
            </div>
            <div className="engine-section">
                <h3>Engines: {engines.number}</h3>
                <h3>Type: {engines.type}</h3>
                <h3>Version: {engines.version}</h3>
                <h3>FirstStage Engines: {firstStage.engines}</h3>
                <h3>Thrust to Weight: {engines.thrust_to_weight}</h3>
            </div>
            
        </div>
    )
}

export default SingleRocketPage
