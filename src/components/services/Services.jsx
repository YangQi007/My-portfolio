import React from 'react'
import './services.css'
import {BiCheck} from 'react-icons/bi'

const Services = () => {
  return (
    <section id='services'>
      <h5>What I Offer</h5>
      <h2>Services</h2>

      <div className="container services__container">
        <article className="service">
          <div className="service__head">
            <h3>Web Development</h3>
          </div>

          <ul className='service__list'>
            <li>
              <BiCheck className='service__list-icon' />
              <p>My personal portfolio based on React</p>
            </li>

            <li>
              <BiCheck className='service__list-icon' />
              <p>New web application developed on Streamlit for chemists</p>
            </li>

            <li>
              <BiCheck className='service__list-icon' />
              <p>Fullstack twitter based on Django and React</p>
            </li>
          </ul>
        </article>

        <article className="service">
          <div className="service__head">
            <h3>Web Development</h3>
          </div>

          <ul className='service__list'>
            <li>
              <BiCheck className='service__list-icon' />
              <p>My personal portfolio based on React</p>
            </li>

            <li>
              <BiCheck className='service__list-icon' />
              <p>New web application developed on Streamlit for chemists</p>
            </li>

            <li>
              <BiCheck className='service__list-icon' />
              <p>Fullstack twitter based on Django and React</p>
            </li>
          </ul>
        </article>

        <article className="service">
          <div className="service__head">
            <h3>Web Development</h3>
          </div>

          <ul className='service__list'>
            <li>
              <BiCheck className='service__list-icon' />
              <p>My personal portfolio based on React</p>
            </li>

            <li>
              <BiCheck className='service__list-icon' />
              <p>New web application developed on Streamlit for chemists</p>
            </li>

            <li>
              <BiCheck className='service__list-icon' />
              <p>Fullstack twitter based on Django and React</p>
            </li>
          </ul>
        </article>
      </div>
    </section>
  )
}

export default Services