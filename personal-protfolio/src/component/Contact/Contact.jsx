'use client';
import React from 'react';
import axios from 'axios';
import { useState, useEffect } from 'react';





export default function Contact() {
    const [data, setData] = useState({ name: null, email: null, message: null});
    
    const handleSubmit = (e) => {
        e.preventDefault();
        if (!data.name || !data.email || !data.message) {
            console.log("Please fill all fields");
            return;
        }

        console.log(data);
        axios.post('/api/hello', data)
            .then((res) => {
                console.log("Response:", res);
            })
            .catch((err) => {
                console.log("Error:", err);
            });
    };
   
        
    return (
        <div>
            <form
                onSubmit=
                    {handleSubmit}
            
            >
                <div>
                    <label htmlFor="name">Name</label>
                    <input
                        type="text"
                        id="name"
                        onChange={(e) => {
                            setData({ ...data, name: e.target.value });
                        }}
                    />
                </div>
                <div>
                    <label htmlFor="email">Email</label>
                    <input
                        type="text"
                        id="email"
                        onChange={(e) => {
                            setData({ ...data, email: e.target.value });
                        }}
                    />
                </div>
                <div>
                    <label htmlFor="message">Message</label>
                    <textarea
                        id="message"
                        onChange={(e) => {
                            setData({ ...data, message: e.target.value });
                        }}
                    />
                </div>
                <button type="submit">Submit</button>

            </form>
        </div>
    )
}






