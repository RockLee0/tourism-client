import axios from 'axios';
import React from 'react';
import { useForm } from "react-hook-form";
import './AddService.css';


const AddService = () => {
    const { register, handleSubmit, reset } = useForm();

    const onSubmit = data => {
        console.log(data);

        axios.post('http://localhost:5000/services', data)
            .then(res => {
                if (res.data.insertedId) {
                    alert('Service added successfully');
                    reset();
                }
            })
    };

    return (
        <div>
             <div className="add-service">
            <h2>To add service you need to fill the form properly</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input {...register("name", { required: true, maxLength: 20 })} placeholder="Place name" />
                <textarea {...register("description")} placeholder="Description" />
                <input {...register("img")} placeholder="image url" />
                <input type="submit" />
            </form>
        </div>
        </div>
    );
};

export default AddService;