import React from 'react'
import './Hero.css'
import profile from "../../images/profile-pic.jpg"
import Image from 'next/image';






export default function Hero() {
    return (
        <>
            <div className='hero-container'>
                <div className='profile-container'>
                  <Image src={profile} alt='profile pic'/>
     
                </div>
                <div className="info-container">
                    <div id='major'>
                        <h2>Information Science & Technology</h2>
                    </div>
                    <div id='name'>
                        <h1>Oyindamola J (OJ) Akanbi </h1>
                    </div>
                    <div id='school'>
                        <h2>The Pennsylvania State University</h2>
                    </div>

                </div>

            </div>

        </>
    )
}