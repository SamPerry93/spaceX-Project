import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const RocketsCard = ({rocket}) => {
    const [images, setImages] = useState([rocket.flickr_images])
    return (
    
        <div key={rocket.id} className="rocket-card" >
            {images.map((img,idx) =>{
                return <img key={idx} className="rockets-image" src={img} alt={rocket.name}/>
            })}
            <h1>{rocket.name}</h1>
            <p>{rocket.description}</p>
            <Link className="read-more" to={`/rockets/${rocket.id}`}>Read More</Link>
        </div>
        
    )
}

export default RocketsCard
