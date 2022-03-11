import React from 'react'
import './About.css';
import petsImg from '../../assets/svg/about-pets.svg';

export default function About() {
  return (
    <section className="wrapper">
        <div className="about_container">
            <div className="about_content">
               <div className="about_content-image">
                    <img src={petsImg} alt="about pets" />
                </div>
                <div className="about_content-text">
                    <h3 className="about_content-text-title">About the shelter “Cozy House”</h3>
                    <p className="about_content-text-body">Currently we have 121 dogs and 342 cats on our hands and statistics show that only 20% of them will find a family. The others will continue to live with us and will be waiting for a lucky chance to become dearly loved.</p>
                    <p className="about_content-text-body">We feed our wards with the best food and make sure that they do not get sick, feel comfortable (including psychologically) and well. We are supported by 87 volunteers and 28 employees of various skill levels. About 12% of the animals are taken by the shelter staff. Taking care of the animals, they become attached to the pets and would hardly ever leave them alone.</p>
                </div> 
            </div>
            
        </div>
    </section>
  )
}