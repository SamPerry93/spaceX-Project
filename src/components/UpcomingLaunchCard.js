import React from 'react'

const UpcomingLaunchCard = ({launch}) => {
    return (
        <div className="launch-card">
            <h1>Flight {launch.flight_number}</h1>
            {!launch.links.patch.small ? <div style={{height: 300, display:'flex',justifyContent:'center',alignItems:'center'}}><p>Image Coming Soon</p></div> :<img className="launch-patch" src={launch.links.patch.small} alt={launch.name} />}
            <h2>{launch.name}</h2>
            <p>{launch.date_local}</p>
            <p>{launch.rocket_name}</p>
        </div>
    )
}

export default UpcomingLaunchCard
