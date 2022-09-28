import React, { useEffect, useState } from 'react';
import './ActivitiesDetails.css'
const ActivitiesDetails = () => {
    const[activity,setActivity]=useState([])
    useEffect(()=>{
        fetch('activities.json')
        .then(res=>res.json())
        .then(data=>console.log(data))
    },[])
    return (
        <div className='activities-container'>
            <div className="activity-container">
                <h2>Study Activites</h2>
            </div>
            <div className="information-container">
                <h2>This is for information</h2>

            </div>
        </div>
    );
};

export default ActivitiesDetails;