import React, { useState } from 'react'
import { Link } from 'react-router-dom'
const RocketsCard = ({launch}) => {
    const [isFlipped, setIsFlipped] = useState(false)
    const date = new Date(launch.date_local)
    const handleMore = () => {
        setIsFlipped(false)
        setIsFlipped(!isFlipped)
    } 
    
    return (
        isFlipped ? <div className="launch-card launch-card-back"> <h1>Flight {launch.flight_number}</h1> 
        <h2>{launch.name}</h2>
        
        <p>Launch Date: {date.toUTCString().slice(0,16)}</p>
        <iframe height="300px" width="100%" allowFullScreen='true' frameBorder="0" src={`https://www.youtube.com/embed/${launch.links.youtube_id}`} title='video'></iframe>
        <p className="details">{launch.details}</p>
        <div className="launchpage-button-container">
        <button className="launchpage-button" onClick={handleMore}>Back</button>
        <Link className="launchpage-rocket-link" to={`/rockets/${launch.rocket}`}>Rocket Page</Link>
        
        </div>
        </div> 
        :
        <div className="launch-card">
           {launch.success ? <h1 style={{color:"#129b22"}}>Flight {launch.flight_number}</h1> : <h1 style={{color: "#bd3535"}}>Flight {launch.flight_number}</h1>} 
            <img className="launch-patch" src={launch.links.patch.small} alt={launch.name} />
            
            <h2>{launch.name}</h2>
            <p>{date.toUTCString().slice(0,16)}</p>
            <p>{launch.rocket_name}</p>
            {launch.success ? <p >Success</p> : 
                <div className="failure">
                    <p style={{padding: "1rem 0"}}>Rapid Unscheduled Dissasembly</p>
                    {launch.failures.map(fail => {return <p>Reason: {fail.reason}</p>})}
                    
                </div> }
            
           <button className="launchpage-button launchpage-more" onClick={handleMore}>More</button>
        </div>
        
    )
}

export default RocketsCard
