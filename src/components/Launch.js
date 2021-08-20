import { useEffect, useState } from 'react'
const Launch = ({match}) => {
    const uri = `https://api.spacexdata.com/v4/launches/`
    const [oneLaunch, setOneLaunch] = useState({})
    const [images, setImages] = useState([])
    const [firstStage, setFirstStage] = useState({})
    const [engines, setEngines] = useState({})
    const [height, setHeight] = useState({})

        const getLaunch = async () => {
            
            await fetch(uri + match.params.id)
                .then(res => res.json())
                .then(res => {
                    setOneLaunch(res)
                    
                })
        }
    useEffect(() => {
        getLaunch()
    }, [])
    // return (
    //     // <SingleLaunchPage key={match.params.id} images={images} oneRocket={oneRocket} firstStage={firstStage}engines={engines} height={height}/>
    // )
    return(
        <div>
            <h1>{oneLaunch.flight_number}</h1>
            <h2>{oneLaunch.name}</h2>
        </div>
        )
}

export default Launch
