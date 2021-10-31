import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import axios from 'axios';
import { useForm } from "react-hook-form";

import useAuth from '../../hooks/useAuth';

const Booking = () => {
    const { serviceId } = useParams();
    const [service,setService]=useState({});
    const { user } = useAuth();

    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        console.log(data);

        axios.post('http://localhost:5000/booking', data)
            .then(res => {
                if (res.data.insertedId) {
                    alert('booking added successfully');
                    reset();
                }
            })
    };


    console.log(user);

    useEffect(()=>{
        fetch(`http://localhost:5000/services/${serviceId}`)
        .then(res=>res.json())
        .then(data=>setService(data));
    },[])

    return (
        <div>
            <div>
                <h2>Details of place:</h2>
                <h3>Place:{service.name}</h3>
                <h3>Description: <br /> <h4>{service.description}</h4></h3>
            </div>
            <h3> Plan Id: {serviceId}</h3>
            <h2>User name: {user?.displayName}</h2>
            <h2>User email: {user?.email}</h2>
            
            <form onSubmit={handleSubmit(onSubmit)}>
                <input {...register("name", { required: true, maxLength: 20 })} placeholder="Tourist name" />
                <input {...register("destination")} placeholder="Destination" />
                <input {...register("place")} placeholder="From" />
                <input type="submit" />
            </form>
            
        </div>
    );
};

export default Booking;