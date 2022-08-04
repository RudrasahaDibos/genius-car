import React, { useEffect, useState } from 'react';
import { useTypewriter ,Cursor} from 'react-simple-typewriter';
import Service from '../Service/Service';


import './Services.css';

const Services = () => {
    const[services ,setservices] =useState([]);
      useEffect(()=>{
        fetch('services.json')
        .then((response) => response.json())
        .then((data) =>setservices(data));
      },[])
      const {text} = useTypewriter({
        words: ['Service', ' car Desnginer ', 'maker', 'Digital service'],
       
        onLoopDone: () => console.log(`loop completed after 3 runs.`),
      })
         
    return (
        <div  id='service'className='container  '>
             
             <h1 className='services-title'>our--
             <span style={{color:"red"}}>
             {text}
              </span>
              <Cursor/>
              </h1>
             
        
             <div>
                      <div className='row'>
                      {
              services.map(service => <Service
                key={service.id}
                service={service}
              ></Service>)
             }
                      </div>
             </div>
        </div>
    );
};

export default Services;