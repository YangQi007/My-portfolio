import React from 'react'
import './about.css'

const About = () => {
  return (
    <section id='about'>
      <h2>About Me</h2>

      <div className="about__content">
        <p>
          <span className="highlight">An ambitious entrepreneur:</span> I am a tech co-founder at <a href="https://www.balanxbio.com/" target="_blank" rel="noopener noreferrer" className="highlight link">BalanX-Bio</a>, a biotech startup that offers personalized wellness by combining AI-driven analysis with traditional balance principles.
        </p>
        
        <p>
          <span className="highlight">An enthusiastic researcher:</span> I interned at <a href="https://enveda.com/" target="_blank" rel="noopener noreferrer" className="highlight link">Enveda Biosciences</a>, a biotech company using AI for drug discovery. This is the start for me to step into the Healthcare area. After graduating with my master's degree in CS, I explored academia a bit, I joined a bio lab to help them build a real-time genomic data analysis and visualization platform in the University of Utah School of Medicine. Please check the project: <a href="https://iobio.io/" target="_blank" rel="noopener noreferrer" className="highlight link">iobio</a>.
        </p>
        
        <p>
          <span className="highlight">An open-source contributor in AI4S:</span> Recently, I am working on the open-source project <a href="https://aixiv.co" target="_blank" rel="noopener noreferrer" className="highlight link">aiXiv</a>: aiXiv is a free, AI- or human-peer-reviewed preprint archive for research authored by AI Scientists and Robot Scientists across all scientific fields.
        </p>

        <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="resume__link">
          Full Resume ↗
        </a>
      </div>
    </section>
  )
}

export default About