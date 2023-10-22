import React from 'react'
import './skills.css'
import Bootstrap from '../../assets/Bootstrap_logo.svg.png';
import WebDesign from '../../assets/website-design.png';
import ML from '../../assets/Machine_Learning_Logo.png';

const Skills = () => {
    return (
        <section id='skills'>
            <span className='skillTitle'>What I do</span>
            <span className='skillDesc'>My ultimate goal is to become a data scientist, leveraging my skills in web development and combining them with my growing understanding of AI and ML. I believe that the combination of these areas will allow me to make meaningful contributions to data analysis and decision-making processes.</span>
            <div className='skillBars'>
                <div className='skillBar'>
                    <img src={Bootstrap} className="skillBarImg" alt="Bootstrap" />
                    <div className='skillBarText'>
                        <h2>Learning Bootstrap</h2>
                        <p>Build anything—from prototype to production—in minutes.</p>
                    </div>
                </div>

                <div className='skillBar'>
                    <img src={WebDesign} className="skillBarImg" alt="WebDesign" />
                    <div className='skillBarText'>
                        <h2>Website Design</h2>
                        <p>Readability, mobile-friendliness, website speed, sitemaps, URL structure, website navigation.</p>
                    </div>
                </div>

                <div className='skillBar'>
                    <img src={ML} className="skillBarImg" alt="MachineLearn" />
                    <div className='skillBarText'>
                        <h2>Machine Learning</h2>
                        <p>Building computer systems that learn from data.</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Skills