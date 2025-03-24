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
      link2: 'https://weather-dashboard-1k00.onrender.com/',
      screenshot: pic01,
    },
    {
      id: 2,
      description: 'GIFT-EXCHANGE',
      link: 'https://github.com/JayC-06/GIFT-EXCHANGE-.git',
      link2: 'https://weather-dashboard-1k00.onrender.com/',
      screenshot: pic02,
    },
    {
      id: 3,
      description: 'Weather Dashboard',
      link: 'https://github.com/ClintonReynolds/weather-dashboard.git',
      link2: 'https://weather-dashboard-1k00.onrender.com/',
      screenshot: pic03,
    },
    {
      id: 4,
      description: 'README Generator',
      link: 'https://github.com/ClintonReynolds/readme-generator.git',
      link2: 'https://weather-dashboard-1k00.onrender.com/',
      screenshot: pic04,
    },
    {
      id: 5,
      description: 'Vehicle Builder',
      link: 'https://github.com/ClintonReynolds/Vehicle-Builder.git',
      link2: 'https://weather-dashboard-1k00.onrender.com/',
      screenshot: pic05,
    },
    {
      id: 6,
      description: 'Employee Tracker',
      link: 'https://github.com/ClintonReynolds/Employee-Tracker.git',
      link2: 'https://weather-dashboard-1k00.onrender.com/',
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
          link2={work.link2}
          screenshot={work.screenshot}
        />
      ))}
    </div>
  )
}

export default Work