import React, { useRef } from 'react';
import './Contact.css';
import Twitter from '../../assets/twitter.png';
import Instagram from '../../assets/instagram.png';
import Git from '../../assets/GitHub.png';
import LinkedIn from '../../assets/linkedIn.png';
import emailjs from '@emailjs/browser';

export const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();
    console.log('Sending email...');
  
    emailjs.sendForm('service_cf9ihg5', 'template_3296j5w', form.current, 'BBiUNIzzKSI9gMq_9')
      .then((result) => {
        console.log('Email sent:', result.text);
      }, (error) => {
        console.log('Email error:', error.text);
      });
  };
  
  return (
    <section className='contactPage'>
      <div id="contact">
        <h1 className='contactPageTitle'>Contact Me</h1>
        <span className='contactDesc'>Please fill out the form below to discuss any work opportunities.</span>
        <form className='contactForm' ref={form} onSubmit={sendEmail}>
          <input type="text" className='name' placeholder='Your Name' name='your_name' />
          <input type="email" className='email' placeholder='Your Email' name='your_email' />
          <textarea name="message" className='msg' rows="5" placeholder='Your Message'></textarea>
          <button type='submit' className='submitBtn' value="Send">Submit</button>
          <div className='links'>
            <a href='https://www.linkedin.com/in/praveen-kaushik-9721191aa/' ><img src={LinkedIn} className='link' alt="LinkedIn" /></a>
            <a href='https://github.com/Praveenkaushik12'><img src={Git} className='link' alt="Github" /></a>
            <a href='https://www.instagram.com/praveenkaushik09'><img src={Instagram} className='link' alt="Insta" /></a>
            <a href='https://twitter.com/praVeenkaush_03'><img src={Twitter} className='link' alt="twitter" /></a>

          </div>
        </form>
      </div>
    </section>
  )
}

export default Contact;
