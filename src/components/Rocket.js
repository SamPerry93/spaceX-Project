import React, { useEffect, useState } from 'react'
import SingleRocketPage from './SingleRocketPage'

 
const Rocket = ({match}) => {
    const uri = `https://api.spacexdata.com/v4/rockets/${match.params.id}`
    const [oneRocket, setOneRocket] = useState({})
    const [images, setImages] = useState([])
    const [firstStage, setFirstStage] = useState({})
    const [engines, setEngines] = useState({})
    const [height, setHeight] = useState({})

        const getRocket = async () => {
            await fetch(uri)
                .then(res => res.json())
                .then(res =>{
                    setOneRocket(res)
                    setImages(res.flickr_images.map(img=>{
                        return(img)
                    }))
                    setFirstStage(res.first_stage)
                    setEngines(res.engines)
                    setHeight(res.height)
                    console.log(res)
                })
        }
    useEffect(() => {
        getRocket()
        .catch(err=>{
            console.log(err)
        })
        
    }, [])
    return (
        <SingleRocketPage key={oneRocket.id} images={images} oneRocket={oneRocket} firstStage={firstStage}engines={engines} height={height}/>
    )
}

export default Rocket
