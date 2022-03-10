import React from 'react'
import './StartScreen.css';
import MyButton from '../UI/MyButton/MyButton';

export default function StartScreen() {
  return (
    <section className='start-screen_container'>
        <div className="wrapper">
            <div className="start-screen_content">
                <h2 className='content_title'>Not only people need a house</h2>
                <p className='content_text'>We offer to give a chance to a little and nice puppy with an extremely wide and open heart. He or she will love you more than anybody else in the world, you will see!</p>
                <div className='content_btn'>
                    <MyButton>Make a friend</MyButton>
                </div>
            </div> 
        </div>
    </section>
  )
}
