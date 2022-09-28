import React from 'react';
import './Information.css'

const Information = ({information}) => {
    console.log(information)
    let total=0;
    for(const info of information){
        total=total+info.time;
    }
    return (
        <div className='information'>
            <h2>This is for information{information.length}</h2>
            <p>time:{total}</p>
                
            
        </div>
    );
};

export default Information;