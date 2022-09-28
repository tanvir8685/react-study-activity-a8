import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee ,faGraduationCap} from '@fortawesome/free-solid-svg-icons'
import React, { useEffect, useState } from 'react';
import Activity from '../Activity/Activity';
import './ActivitiesDetails.css'
const ActivitiesDetails = () => {
    const[activities,setActivities]=useState([]);
    const[information,setInformation]=useState([]);

    useEffect(()=>{
        fetch('activities.json')
        .then(res=>res.json())
        .then(data=>setActivities(data))
    },[])
    const handleAddToActivities=(activity)=>{
        console.log('its clicked',activity)
        const newInformation=[...information,activity];
        setInformation(newInformation);
        

    }
    return (
        
        <div>
           {/* <div className='icon banner'> */}
           
            <h2  className='banner'>  <FontAwesomeIcon icon={faGraduationCap}></FontAwesomeIcon>  Study Activities</h2>
           {/* </div> */}
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
                <h2>This is for information{information.length}</h2>
                {
                    console.log(information)
                }

            </div>
        </div>
        </div>
    );
};

export default ActivitiesDetails;