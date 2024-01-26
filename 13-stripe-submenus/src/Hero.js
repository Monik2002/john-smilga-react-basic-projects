import React from 'react'
import phoneImg from './images/phone.svg';
import { useGlobalContext } from './context';

const Hero = () => {
 const {closeSubmenu} = useGlobalContext();
 return ( 
 <section className='hero' onMouseOver={closeSubmenu}>
  <div className='hero'>
    <div className='hero-center'>
      <article className='hero-info'>
        <h1>Swift Payments Across The Internet</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium, magnam?</p>
        <button className='btn'>
          start now
        </button>
      </article>
      <article className='hero-images'>
        <img src={phoneImg} className='phone-img' alt="phone" />
      </article>
    </div>
  </div>
 </section>
)
}

export default Hero
