import React from 'react' 
import WorkItem from './WorkItem'
import './work.css'
import pic01 from '../../assets/prework.jpg'
import pic02 from '../../assets/gift.png'
import pic03 from '../../assets/wdash.jpg'
import pic04 from '../../assets/readgen.jpg'
import pic05 from '../../assets/vbuilder.jpg'
import pic06 from '../../assets/etracker.png'

const previousWorks = [
    {
      id: 1,
      description: 'Prework Study Guide',
      link: 'https://github.com/ClintonReynolds/prework-study-guide.git',
      screenshot: pic01,
    },
    {
      id: 2,
      description: 'GIFT-EXCHANGE',
      link: 'https://github.com/JayC-06/GIFT-EXCHANGE-.git',
      screenshot: pic02,
    },
    {
      id: 3,
      description: 'Weather Dashboard',
      link: 'https://github.com/ClintonReynolds/weather-dashboard.git',
      screenshot: pic03,
    },
    {
      id: 4,
      description: 'README Generator',
      link: 'https://github.com/ClintonReynolds/readme-generator.git',
      screenshot: pic04,
    },
    {
      id: 5,
      description: 'Vehicle Builder',
      link: 'https://github.com/ClintonReynolds/Vehicle-Builder.git',
      screenshot: pic05,
    },
    {
      id: 6,
      description: 'Employee Tracker',
      link: 'https://github.com/ClintonReynolds/Employee-Tracker.git',
      screenshot: pic06,
    },
    
]

const Work = () => {
  return (
    <div className="work-grid">
      {previousWorks.map((work) => (
        <WorkItem
          key={work.id}
          description={work.description}
          link={work.link}
          screenshot={work.screenshot}
        />
      ))}
    </div>
  )
}

export default Work