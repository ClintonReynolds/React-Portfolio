import React from 'react' 
import WorkItem from './WorkItem'
import './work.css'

const previousWorks = [
    {
      id: 1,
      description: 'Project 1 - E-commerce Website',
      link: 'https://example.com/project1',
      screenshot: 'https://via.placeholder.com/150',
    },
    {
      id: 2,
      description: 'Project 2 - Portfolio Website',
      link: 'https://example.com/project2',
      screenshot: 'https://via.placeholder.com/150',
    },
    {
      id: 3,
      description: 'Project 3 - Blogging Platform',
      link: 'https://example.com/project3',
      screenshot: 'https://via.placeholder.com/150',
    },
    {
      id: 4,
      description: 'Project 4 - Social Media App',
      link: 'https://example.com/project4',
      screenshot: 'https://via.placeholder.com/150',
    },
    {
      id: 5,
      description: 'Project 5 - Online Learning Platform',
      link: 'https://example.com/project5',
      screenshot: 'https://via.placeholder.com/150',
    },
    {
      id: 6,
      description: 'Project 6 - Real Estate Website',
      link: 'https://example.com/project6',
      screenshot: 'https://via.placeholder.com/150',
    },
    {
      id: 7,
      description: 'Project 7 - Job Board Platform',
      link: 'https://example.com/project7',
      screenshot: 'https://via.placeholder.com/150',
    },
    {
      id: 8,
      description: 'Project 8 - Event Management App',
      link: 'https://example.com/project8',
      screenshot: 'https://via.placeholder.com/150',
    },
    {
      id: 9,
      description: 'Project 9 - Task Management Tool',
      link: 'https://example.com/project9',
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