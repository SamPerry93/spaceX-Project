import React from 'react'
import { Link } from 'react-router-dom'

const RocketsCard = ({rocket}) => {
    return (
    
        <div className="rocket-card">
            <h1>{rocket.name}</h1>
            <p>{rocket.description}</p>
            <Link to={`/${rocket.id}`}>Read More</Link>
        </div>
        
    )
}

export default RocketsCard
