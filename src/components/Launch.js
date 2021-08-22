import { useEffect, useState } from 'react'
import SingleLaunchPage from './SingleLaunchPage'
const Launch = ({match}) => {
    const uri = `https://api.spacexdata.com/v4/launches/${match.params.id}`
    
    const [oneLaunch, setOneLaunch] = useState({})
    const [images, setImages] = useState([])
    const [youtubeUrl,setYoutubeUrl] = useState('')
    const videoLink = `https://www.youtube.com/embed?v=`+ youtubeUrl
        const getLaunch = async () => {
            await fetch(uri)
                .then(res => res.json())
                .then(res => {
                    setOneLaunch(res)
                    setYoutubeUrl(res.links.youtube_id)
                    setImages(res.links.patch)
                    console.log(videoLink)
                })
        }
    useEffect(() => {
        getLaunch()
        
    }, [])
    
    return(
        <>
            <SingleLaunchPage key={match.params.id} oneLaunch={oneLaunch} images={images}/>
        </>
        )
}

export default Launch
