import React from 'react';
import './Service.css'
import {useNavigate} from 'react-router-dom';

const Service = ({service}) => {
    const{id,name ,price,description,img}=service;
      const Navigate =  useNavigate();
     const handleuseperams =id=>{
            Navigate(`/service/${id}`);
     }

    return (
        <div className="card col-12" style={{width: "18rem"}}>
        <img src={img} className="card-img-top" alt="..."/>
        <div className="card-body">
          <h5 className="card-title ">{name}</h5>
          <p className="card-text">{description}</p>
          <p className="card-text">price${price}</p>
          <a    onClick={ ()=>handleuseperams(id)}className="btn btn-primary">Booking{name}</a>
        </div>
      </div>
    );
};

export default Service;