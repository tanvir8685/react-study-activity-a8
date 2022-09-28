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
            <h2>Profile</h2>
            <h3>Tanvirul Islam</h3>
            <p>Address:Mohammadur ,Dhaka</p>
            
            <h2>Education</h2>
            <p>SSC:2014</p>
            <p>Diploma Engineering:2018</p>
            <p>Bsc:2022</p><br /><br />
            <h3>Add a bread------------</h3><br /><br />
            <h2>Subject Details</h2>
            <h3>Study Time:{total}</h3>
            <h3>Break time:</h3>



            
                
            
        </div>
    );
};

export default Information;