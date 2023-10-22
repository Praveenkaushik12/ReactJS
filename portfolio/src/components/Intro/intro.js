import React from 'react'
import './intro.css';
import bg from '../../assets/bg.png';
import {Link} from 'react-scroll';
import hireme from '../../assets/hireme.png';
import ReactTyped from "react-typed";


const Intro = () => {
    return (
        <section id="intro">
            <div className="introContent">
                <span className="hello">Hello,</span>
                
                <span className="introText">I'm <span className="introName"><ReactTyped strings={["PraVeen!"]} typeSpeed={100} loop /></span><br/>Website Designer </span>
                <p className="introPara">I'm a motivated and goal-oriented 2nd year college student with a<br/> passion for web development and a strong desire to learn.While I'm still<br/> developing my coding skills,I'm dedicated to expanding my knowledge in this field.</p>
                <Link><button className="btn"><img src={hireme} alt="hire" className="btnImg" />Hire Me</button></Link>
            </div>
            <img src={bg} alt="profile" className="bg" />
        </section>
    )
}

export default Intro