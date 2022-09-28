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
    return (
        <div className='activity-with-info-container'>
            <div className="activity-container">
                <h2>Study Activites</h2>
                {
                    activities.map(activity=><Activity
                         key={activity.id}
                         activity={activity} ></Activity>)
                }
            </div>
            <div className="information-container">
                <h2>This is for information</h2>

            </div>
        </div>
    );
};

export default ActivitiesDetails;