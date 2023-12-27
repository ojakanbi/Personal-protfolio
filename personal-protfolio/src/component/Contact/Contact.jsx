'use client'
import React, { useState } from 'react';
import axios from 'axios';
import './Contact.css';

export default function Contact() {
  const [data, setData] = useState({ name: '', email: '', message: '' });
  const [showForm, setShowForm] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!data.name || !data.email || !data.message) {
      console.log('Please fill all fields');
      return;
    }

    console.log('data', data);
    axios
      .post('/api/hello', data)
      .then((res) => {
        console.log('Response:', res);
        setShowForm(!showForm); // Toggle form display on successful submission
      })
      .catch((err) => {
        console.log('Error:', err);
      });
  };

  return (
      <section>
          
          <div className="headingTitle " id ="left">
        <h3>
          <span id="blue-span">Contact</span> Me{" "}
        </h3>
          </div>

          <div className="experience-section">
              

          
      <div className="contact-container">
        <div className={`contact-form ${showForm ? 'active' : ''}`}>
          <div className="form-backdrop"></div>
          <div className="form-content">
            <form onSubmit={handleSubmit}>
              <div className="input-group">
                <label>Name</label>
                <input
                  type="text"
                  name="name"
                  value={data.name}
                  onChange={(e) => setData({ ...data, name: e.target.value })}
                />
              </div>
              <div className="input-group">
                <label>Email</label>
                <input
                  type="email"
                  name="email"
                  value={data.email}
                  onChange={(e) => setData({ ...data, email: e.target.value })}
                />
              </div>
              <div className="input-group">
                <label>Message</label>
                <textarea
                  name="message"
                  value={data.message}
                  onChange={(e) => setData({ ...data, message: e.target.value })}
                />
              </div>
              <div className="button-group">
                <button type="submit">Submit</button>
              </div>
            </form>
          </div>
        </div>
              </div>

              <div className='contactsList'>
                  <ul>
                      <li><a href="https://www.linkedin.com/in/ojakanbi/" target="_blank" rel="noreferrer">LinkedIn</a></li>
                      <li><a href='https://www.github.com/ojakanbi' target="_blank" rel="noreferrer"> Github</a></li>
                      <li><a href='https://www.instagram.com/oj.visual/' target="_blank" rel="noreferrer">Instagram</a></li>
                
                  </ul>
              </div>
              </div>
    </section>
  );
}