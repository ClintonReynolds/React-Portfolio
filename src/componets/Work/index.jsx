import React from 'react' 
import WorkItem from './WorkItem'
import './work.css'

const previousWorks = [
    {
      id: 1,
      description: 'Prework Study Guide',
      link: 'https://github.com/ClintonReynolds/prework-study-guide.git',
      screenshot: 'https://via.placeholder.com/150',
    },
    {
      id: 2,
      description: 'GIFT-EXCHANGE',
      link: 'https://github.com/JayC-06/GIFT-EXCHANGE-.git',
      screenshot: 'https://via.placeholder.com/150',
    },
    {
      id: 3,
      description: 'Weather Dashboard',
      link: 'https://github.com/ClintonReynolds/weather-dashboard.git',
      screenshot: 'https://via.placeholder.com/150',
    },
    {
      id: 4,
      description: 'README Generator',
      link: 'https://github.com/ClintonReynolds/readme-generator.git',
      screenshot: 'https://via.placeholder.com/150',
    },
    {
      id: 5,
      description: 'Vehicle Builder',
      link: 'https://github.com/ClintonReynolds/Vehicle-Builder.git',
      screenshot: 'https://via.placeholder.com/150',
    },
    {
      id: 6,
      description: 'Employee Tracker',
      link: 'https://github.com/ClintonReynolds/Employee-Tracker.git',
      screenshot: 'https://via.placeholder.com/150',
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