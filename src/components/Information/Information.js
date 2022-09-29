import React, { useEffect, useState } from 'react';
import './Information.css'

const Information = ({information}) => {
    const[brk,setBrk]=useState([]);
    const[br,setbr]=useState([])
    useEffect(()=>{
        fetch('breakTime.json')
        .then(res=>res.json())
        .then(data=>setBrk(data))
    },[brk])
    
    const showtime=(br)=>{
        setbr(br)
        
    }
    
    
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
            <h3>Add a break------------</h3><br /><br />
            {
                brk.map(br=><button key={br.id} onClick={()=>showtime(br)} className='brk-btn'>{br.time} min</button>)
            }
            
            <h2>Subject Details</h2>
            <h3>Study Time:{total} min</h3>
            <h3>Break time:{br.time} min</h3>



            
                
            
        </div>
    );
};

export default Information;