import React from 'react'
import './testimonials.css'
import AVTR1 from '../../assets/avatar5_Valerie.jpeg'
import AVTR2 from '../../assets/avatar6_Shaurya.jpeg'
import AVTR3 from '../../assets/avatar3.jpg'

// import Swiper core and required modules
import { Pagination } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';


const data = [
  {
    avatar: AVTR1,
    name: 'Valerie Pearce -- Engineering Manager at Enveda Biosciences',
    review: 'Yang joined Enveda Biosciences during the summer of 2022 as a Software Engineer Intern.Yang excelled at seeking out work that covered many focus areas of professional modern software engineering.Yang demonstrated initiative, excellent people skills, and a clear aptitude for building working software.'
            
  },
  {
    avatar: AVTR2,
    name: 'Shaurya Chanana -- Mentor at Enveda Biosciences',
    review: 'Yang is a problem solver and self driven software engineer! Yang can learn new things fast without much supervision. I enjoyed working with him!'
  },
  // {
  //   avatar: AVTR3,
  //   name: 'Joe',
  //   review: 'Yang is a problem solver and self driven software engineer!'
  // },
  
]

const Testimonials = () => {
  return (
    <section id='testimonials'>
      <h5>Review From Colleagues</h5>
      <h2>Testimonials</h2>

      <Swiper className="container testimonials__container" 
            // install Swiper modules
            modules={[Pagination]}
            spaceBetween={40}
            slidesPerView={1}
            pagination={{ clickable: true }}>
        {
          data.map(({avatar, name, review}, index) => {
            return(  
                <SwiperSlide key={index} className="testimonial">
                  <div className="client__avatar">
                    <img src={avatar}/>
                  </div>
                  <h5 className='client__name'>{name}</h5>
                  <small className='client__review'>{review} </small>
                </SwiperSlide>
            )
           }
          )
        }
      </Swiper>
    </section>
  )
}

export default Testimonials