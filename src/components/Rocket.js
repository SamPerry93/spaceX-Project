import React, { useEffect, useState } from 'react'

 
const Rocket = ({match}) => {
    const uri = `https://api.spacexdata.com/v4/rockets/${match.params.id}`
    const [oneRocket, setOneRocket] = useState({})
    const [images, setImages] = useState([])

        const getRocket = async () => {
            await fetch(uri)
                .then(res => res.json())
                .then(res =>{
                    setOneRocket(res)
                    setImages(res.flickr_images.map(img=>{
                        return(img)
                    }))
                    console.log(res)
                })
        }
    useEffect(() => {
        getRocket()
        
    }, [])
    return (
        <div>
            <img src={images} alt="" />
            <h1>{oneRocket.name}</h1> 
            <p>{oneRocket.description}</p>
            <div className="details-section">

                <h3>{oneRocket.first_flight}</h3> 
                {/* <h3>Diameter: {oneRocket.diameter.feet}ft </h3>   */}
            </div>
            <div className="engine-section">
                {/* <h3>{oneRocket.engines} {oneRocket.engines.type} engines</h3> */}
                {/* <h3>Propellants: {oneRocket.engines.propellant_1}and{oneRocket.engines.propellant_2}</h3> */}
            </div>
            
        </div>
    )
}

export default Rocket
