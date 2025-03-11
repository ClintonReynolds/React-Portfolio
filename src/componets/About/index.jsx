import React from 'react'
import './about.css'
import cooldude from '../../assets/cooldude.jpg'

const About = () => {
  return (
    <div className = "about">
        <section className = "about-content">
            <h1>About</h1>
            <p>Hi, I'm [Your Name]. I'm a [Your Job Title] based in [Your City]. I have a passion for [Your Passion] and I love to [Your Other Passion]. I'm always looking to learn new things and I'm currently learning [Something You're Learning].</p>
            <p>When I'm not working, I enjoy [Your Hobbies].</p>
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