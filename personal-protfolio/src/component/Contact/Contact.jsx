"use client";
import React, { useState } from "react";
import axios from "axios";
import "./Contact.css";
import { GitHub, Instagram } from "@mui/icons-material";
import Linkedin from '@mui/icons-material/LinkedIn';


export default function Contact() {
  const [data, setData] = useState({ name: "", email: "", message: "" });
  const [showForm, setShowForm] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!data.name || !data.email || !data.message) {
      console.log("Please fill all fields");
      return;
    }

    console.log("data", data);
    axios
    .post("/api/hello", data)
    .then((res) => {
      console.log("Response:", res);
      setShowForm(!showForm); // Toggle form display on successful submission
    })
    .catch((err) => {
      console.error("Error:", err);
      if (err.response) {
        console.log("Server responded with:", err.response.data);
      } else if (err.request) {
        console.log("No response received:", err.request);
      } else {
        console.log("Error setting up request:", err.message);
      }
    });

    axios
      .get("/api/message", data)
      .then((res) => {
        console.log("Respons message:", res);
      })
  };

  return (
    <section className= "container"  id="connect">
      <div className="section-heading" id="left">
        <h3>
          <span className = "span">Contact</span> Me{" "}
        </h3>
      </div>

      <div className="content-container">
        <div className="contact-container">
          <div className={`contact-form ${showForm ? "active" : ""}`}>
            <div className="form-backdrop"></div>
            <div className="form-content">
              <form onSubmit={handleSubmit}>
                <div className="input-group">
                  <label>Name</label>
                  <input
                    placeholder="Your Name"
                    type="text"
                    name="name"
                    value={data.name}
                    onChange={(e) => setData({ ...data, name: e.target.value })}
                  />
                </div>
                <div className="input-group">
                  <label>Email</label>
                  <input
                    placeholder="123@gmail.com"
                    type="email"
                    name="email"
                    value={data.email}
                    onChange={(e) =>
                      setData({ ...data, email: e.target.value })
                    }
                  />
                </div>
                <div className="input-group">
                  <label>Message</label>
                  <textarea
                    placeholder="Enter your message here..."
                    name="message"
                    value={data.message}
                    onChange={(e) =>
                      setData({ ...data, message: e.target.value })
                    }
                  />
                </div>
                <div className="button-group">
                  <button type="submit">Send Message</button>
                </div>
              </form>
            </div>
          </div>
        </div>

        <div className="contactsList">
          <ul>
            <li>
              <a
                href="https://www.linkedin.com/in/ojakanbi/"
                target="_blank"
                rel="noreferrer"
              >
                <Linkedin className="iconContact" />
              </a>
            </li>
            <li>
              <a
                href="https://www.github.com/ojakanbi"
                target="_blank"
                rel="noreferrer"
              >
                {" "}
                <GitHub className="iconContact" />
              </a>
            </li>
            <li>
              <a
                href="https://www.instagram.com/oj.visual/"
                target="_blank"
                rel="noreferrer"
              >
                <Instagram className="iconContact" />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
