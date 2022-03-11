import React from 'react'
import './Pets.css';
import CardPet from '../CardPet/CardPet';
import { useState } from 'react';
import MyButton from '../UI/MyButton/MyButton';

export default function Pets({listPets}) {

    const [petsInSlider, setPetsInSlider] = useState(listPets.filter((item, index) => index < 3));

    return (
        <section className="pets_container">
            <div className="pets_container-title">
                <h3>Our friends who <br/> are looking for a house</h3>
            </div>
            <div className="pets_container-slider">
                <img className="arrow-left" src="/assets/images/button_arrow_left.png" width="52" height="52" alt="arrow left" />
                {petsInSlider.map(pet => 
                                    <CardPet 
                                        key={pet.name}
                                        pet={pet}
                                    />)}
                <img className="arrow-right" src="/assets/images/button_arrow_right.png" width="52" height="52" alt="arrow right" />
            </div>  
            <div className="pets_container-btn">
                <MyButton>Get to know the rest</MyButton>
            </div>         
        </section>      
    )
}
