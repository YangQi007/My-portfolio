import React from 'react'
import './contact.css'
import {MdOutlineEmail} from 'react-icons/md'
import { useRef } from 'react' 
import emailjs from 'emailjs-com'

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_8vasggu', 'template_58rwo8i', form.current, '15QARYpiQhWhM5Z8N')
    
    e.target.reset()
  };  

  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
       <div className="contact__options">
        <article className="contact__option">
          <MdOutlineEmail className='contact__option-icon'/>
          <h4>Email</h4>
          <h5>yangqi.cs2022@gmail.com</h5>
          <a href="mailto:yangqi.cs2022@gmail.com" target="_blank">Send a message</a>
        </article>
       </div>

       <form ref={form} onSubmit={sendEmail}>
        <input type="text" name='name' placeholder='Your Full Name' required/>
        <input type="eamil" name='email' placeholder='Your Email' required/>
        <textarea name="message" rows="7" placeholder='Your Message' required></textarea>
        <button type='submit' className='btn btn-primary' >Send Message</button>
       </form>
      </div>
    </section>
  )
}

export default Contact