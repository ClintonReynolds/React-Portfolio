import React from 'react'
import jsPDF from 'jspdf';
import './resume.css'

const Resume = () => {
  const handleDownloadPDF = () => {
        const doc = new jsPDF();
        const resumeContent = `
          John Doe
          ---------------------
          Email: johndoe@example.com
          Phone: +1234567890
          Website: www.johndoe.com
    
          Summary:
          Highly motivated software engineer with a passion for web development.
    
          Skills:
          - JavaScript, React, Node.js
          - HTML, CSS, MongoDB
    
          Experience:
          Software Engineer | XYZ Company
          2021 - Present
          - Developed web applications using React and Node.js.
          - Implemented responsive design and cross-browser compatibility.
    
          Education:
          Bachelor of Science in Computer Science | University XYZ
          2017 - 2021
        `;
    
        // Add content to the PDF
        doc.text(resumeContent, 10, 10);
        
        // Save the PDF
        doc.save('resume.pdf');
      };
    
      return (
        <div>
          <h1>John Doe's Resume</h1>
          <p>Email: johndoe@example.com</p>
          <p>Phone: +1234567890</p>
          <p>Website: www.johndoe.com</p>
    
          <h2>Summary</h2>
          <p>Highly motivated software engineer with a passion for web development.</p>
    
          <h2>Skills</h2>
            <p>JavaScript, React, Node.js</p>
            <p>HTML, CSS, MongoDB</p>
    
          <h2>Experience</h2>
          <p>Software Engineer at XYZ Company (2021 - Present)</p>
            <p>Developed web applications using React and Node.js.</p>
            <p>Implemented responsive design and cross-browser compatibility.</p>
    
          <h2>Education</h2>
          <p>Bachelor of Science in Computer Science - University XYZ (2017 - 2021)</p>
    
          <button onClick={handleDownloadPDF}>Download Resume as PDF</button>
        </div>
      );
    };
    


export default Resume