import React from 'react'
import './footer.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';


const footer = () => {
  return (
    <>
      <footer className = "footer">
        <div>
        <p>Clinton Reynolds &copy; 2025</p>
        </div>
        <section>
          <a href="https://www.linkedin.com/in/yourname"><FontAwesomeIcon className ='icon' icon ={faLinkedin}/></a>
          <a href="github.com/yourname"><FontAwesomeIcon className ='icon' icon ={faGithub}/></a>
        </section>
      </footer>
    </>
  )
}

export default footer