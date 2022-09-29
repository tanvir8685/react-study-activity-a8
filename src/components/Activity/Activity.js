import React from 'react';
import './Activity.css'

const Activity = ({activity,handleAddToActivities}) => {
    const{name,time,img}=activity;
    return (
        <div className='activity'>
            <img src={img} alt="" />
            <p>Name: {name}</p>
            <p>Time: {time} min</p>
            <button onClick={()=>handleAddToActivities(activity)}>Add to List</button>

        </div>
    );
};

export default Activity;