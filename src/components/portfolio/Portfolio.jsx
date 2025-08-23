import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/genev4_banner.png'
import IMG2 from '../../assets/bam.iobio_wide.png'
import IMG3 from '../../assets/django_twitter.png'
import IMG4 from '../../assets/interpreter.jpeg'
import IMG5 from '../../assets/aixiv.png'


const data = [
  {
    id: 1,
    image: IMG5,
    title: 'aiXiv: a free, AI- or human-peer-reviewed preprint archive for research authored by AI Scientists and Robot Scientists across all scientific fields.',
    github: 'https://github.com/aixiv-org',
    demo: 'https://aixiv.co/'
  },
  {
    id: 2,
    image: IMG1,
    title: 'A web app for investigating potential disease-causing genomic variants in real-time.',
    github: 'https://github.com/iobio/gene.iobio',
    demo: 'https://gene.iobio.io/'
  },
  {
    id: 3,
    image: IMG2,
    title: 'A web app that quickly samples bam files and visualizes a series of metrics.',
    github: 'https://github.com/iobio/bam.iobio',
    demo: 'https://bam2.iobio.io/'
  },
  {
    id: 4,
    image: IMG3,
    title: 'Fullstack project: Twitter based on Python, Django and React',
    github: 'https://github.com/YangQi007/django-twitter',
    // demo: 'https://github.com'
  },
  {
    id: 5,
    image: IMG4,
    title: 'Language interpreter based on C++',
    github: 'https://github.com/YangQi007/msdscript',
    // demo: 'https://github.com'
  }
]

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h2>Projects</h2>

      <div className="portfolio__container">
       {
        data.slice(0, 3).map(({id, image, title, github, demo}) => {
          return ( 
            <article key={id} className="portfolio__item">
              <div className="portfolio__item-image">
                <img src={image} alt={title} />                      
              </div>
              <div className="portfolio__item-content">
                <h3>{title}</h3>
                <div className="portfolio__item-cta">
                  <a href={github} className='btn' target='_blank' rel="noopener noreferrer">Github</a>
                  {demo && <a href={demo} className='btn btn-primary' target='_blank' rel="noopener noreferrer">Live Demo</a>}
                </div>
              </div>
            </article>
          )
        }) 
       }
      </div>

      <div className="portfolio__view-all">
        <a href="https://github.com/YangQi007?tab=repositories" target="_blank" rel="noopener noreferrer" className="view-all-projects">View all projects ↗</a>
      </div>

    </section>
  )
}

export default Portfolio