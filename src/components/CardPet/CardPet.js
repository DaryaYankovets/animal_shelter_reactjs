import React from 'react'
import MyButton from '../UI/MyButton/MyButton';
import './CardPet.css';

export default function CardPet({pet}) {

    return (
        <div className="card-pet_container">
            <div className="container_image">
                <img src={pet.img} alt="pet" />
            </div>
            <div className="container_name">
                {pet.name}
            </div>
            <div className="container_btn">
                <MyButton style={{background: "#ffffff"}}>Learn more</MyButton>
            </div>
        </div>
    )
}
