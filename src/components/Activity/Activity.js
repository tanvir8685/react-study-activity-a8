import React from 'react';

const Activity = ({activity}) => {
    const{name,id,time,img}=activity;
    return (
        <div>
            <h2>This is activity  {name}</h2>
        </div>
    );
};

export default Activity;