import React from 'react';
import './Activity.css'

const Activity = ({activity}) => {
    const{name,id,time,img}=activity;
    return (
        <div className='activity'>
            <img src={img} alt="" />
            <p>Name: {name}</p>
            <p>Time: {time} min</p>
            <button>Add to List</button>

        </div>
    );
};

export default Activity;