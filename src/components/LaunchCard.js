import React from 'react'
import { Link } from 'react-router-dom'

const RocketsCard = ({launch}) => {
    return (
        <div className="launch-card">
           {launch.success ? <h1 style={{color:"#129b22"}}>Flight {launch.flight_number}</h1> : <h1 style={{color: "#bd3535"}}>Flight {launch.flight_number}</h1>} 
            <img className="launch-patch" src={launch.links.patch.small} alt={launch.name} />
            
            <h2>{launch.name}</h2>
            <p>{launch.date_local}</p>
            <p>{launch.rocket_name}</p>
            {launch.success ? <p >Success</p> : 
                <div className="failure">
                    <p style={{padding: "1rem 0"}}>Rapid Unscheduled Dissasembly</p>
                    {launch.failures.map(fail => {return <p>Reason: {fail.reason}</p>})}
                    
                </div> }
            <Link className="read-more" to={`/launches/${launch.id}`}>Read More</Link>
        </div>
        
    )
}

export default RocketsCard
