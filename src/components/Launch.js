import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
const Launch = ({match}) => {
    const uri = `https://api.spacexdata.com/v4/launches/${match.params.id}`
    const [oneLaunch, setOneLaunch] = useState({})
    const [images, setImages] = useState([])

        const getLaunch = async () => {
            
            await fetch(uri)
                .then(res => res.json())
                .then(res => {
                    setOneLaunch(res)
                    setImages(res.links.patch)
                })
        }
    useEffect(() => {
        getLaunch()
    }, [])
    
    return(
        <div className="launch-page">
            <h1>Flight {oneLaunch.flight_number}</h1>
            <h2>{oneLaunch.name}</h2>
            <span><img src={images.small} alt="" /></span>
            
            <p>Launch Date: {oneLaunch.date_local}</p>
            <iframe src={`https://www.youtube.com/embed?v=${oneLaunch.youtube_id}`} frameborder="0" title={oneLaunch.name}></iframe>
            <p>{oneLaunch.details}</p>
            <Link to={`/rockets/${oneLaunch.rocket}`}>Rocket</Link>
        </div>
        )
}

export default Launch
