import React, { useEffect, useState } from 'react';
import Activity from '../Activity/Activity';
import './ActivitiesDetails.css'
const ActivitiesDetails = () => {
    const[activities,setActivities]=useState([])
    useEffect(()=>{
        fetch('activities.json')
        .then(res=>res.json())
        .then(data=>setActivities(data))
    },[])
    const handleAddToActivities=(activity)=>{
        console.log('its clicked',activity)
    }
    return (
        
        <div>
            <h2 className='banner'>Study Activities</h2>
            <h5 className='banner'>Select today's subject</h5>
            <div className='activity-with-info-container'>
            
            <div className="activity-container">
                
                {
                    activities.map(activity=><Activity
                         key={activity.id}
                         activity={activity}
                         handleAddToActivities={handleAddToActivities} ></Activity>)
                }
            </div>
            <div className="information-container">
                <h2>This is for information</h2>

            </div>
        </div>
        </div>
    );
};

export default ActivitiesDetails;