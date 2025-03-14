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
          <a href="https://www.linkedin.com/in/clint-reynolds-906302356/?lipi=urn%3Ali%3Apage%3Ad_flagship3_feed%3BEjv6rowIRoiJC28lTESWxw%3D%3D"><FontAwesomeIcon className ='icon' icon ={faLinkedin}/></a>
          <a href="https://github.com/ClintonReynolds"><FontAwesomeIcon className ='icon' icon ={faGithub}/></a>
        </section>
      </footer>
    </>
  )
}

export default footer