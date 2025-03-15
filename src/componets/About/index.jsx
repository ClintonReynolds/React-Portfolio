import React from 'react'
import './about.css'
import cooldude from '../../assets/cooldude.jpg'

const About = () => {
  return (
    <div className = "about">
        <section className = "about-content">
            <h1>About</h1>
            <p>Hi, I'm Clinton. I'm a Web Dev based in Orlando. I have a passion for Coding and I love to Design sites. I'm always looking to learn new things and I'm currently learning Web Development.</p>
            <p>When I'm not working, I enjoy Video games and Football.</p>
        </section>
        <section className = "image-section">
            <div className="image-wrapper">
            <img src={cooldude} alt="a cool dude" />
            </div>
            
        </section>
    </div>
  )
}

export default About