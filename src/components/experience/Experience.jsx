import React from 'react'
import './experience.css'

const Experience = () => {
  return (
    <section id='experience'>
      <h2>My Experience</h2>
      
      <div className="experience__container">
        <a href="https://www.balanxbio.com/" target="_blank" rel="noopener noreferrer" className="experience__item">
          <div className="experience__date">2025 — PRESENT</div>
          <div className="experience__content">
            <h3>Tech Co-founder • BalanX-Bio ↗</h3>
            <p>
              Combining AI-driven analysis with traditional balance principles to offer personalized wellness solutions through advanced bio-analysis and tailored nutrition.
            </p>
            <div className="experience__tech">
              <span className="tech__tag">AI/ML</span>
              <span className="tech__tag">Microbiome Analysis</span>
              <span className="tech__tag">Biotech</span>
              <span className="tech__tag">Leadership</span>
              <span className="tech__tag">Product Strategy</span>
            </div>
          </div>
        </a>

        <a href="https://www.shinga.io/" target="_blank" rel="noopener noreferrer" className="experience__item">
          <div className="experience__date">2025 — PRESENT</div>
          <div className="experience__content">
            <h3>Software Engineer • Shinga Creative ↗</h3>
            <p>
              Developed robust, human-centered user interfaces and data visualizations for client branding websites using React, resulting in a measured increase in user engagement. Wrote clean, maintainable, and performant code for high-traffic web applications by applying modern design patterns and refactoring legacy components.
            </p>
            <div className="experience__tech">
              <span className="tech__tag">React</span>
              <span className="tech__tag">Jest</span>
              <span className="tech__tag">JavaScript</span>
              <span className="tech__tag">Data Visualization</span>
            </div>
          </div>
        </a>

        <a href="https://iobio.io/" target="_blank" rel="noopener noreferrer" className="experience__item">
          <div className="experience__date">2023 — 2025</div>
          <div className="experience__content">
            <h3>Software Developer • University of Utah - Health ↗</h3>
            <p>
              Worked on iobio.io, real-time genomic data analysis and visualization web platform. Led the development of bam.iobio, an interactive analysis dashboard by creating a reusable UI Component SDK that improved user analysis efficiency. Collaborated with Harvard Medical School's Undiagnosed Diseases Network to design a patient portal.
            </p>
            <div className="experience__tech">
              <span className="tech__tag">Vue</span>
              <span className="tech__tag">D3.js</span>
              <span className="tech__tag">Python</span>
              <span className="tech__tag">Node.js</span>
              <span className="tech__tag">PostgreSQL</span>
              <span className="tech__tag">Web Components</span>
              <span className="tech__tag">Figma</span>
            </div>
          </div>
        </a>

        <a href="https://enveda.com/" target="_blank" rel="noopener noreferrer" className="experience__item">
          <div className="experience__date">2022</div>
          <div className="experience__content">
            <h3>Software Engineer Intern • Enveda Biosciences ↗</h3>
            <p>
              Architected and built event-driven, serverless ETL pipelines using AWS services creating a scalable and cost-efficient data processing foundation for the ML platform. Designed and deployed a ML model inference service enabling over 1,000 biologists to perform real-time chemical compound prediction analysis.
            </p>
            <div className="experience__tech">
              <span className="tech__tag">AWS Lambda</span>
              <span className="tech__tag">AWS Glue</span>
              <span className="tech__tag">DynamoDB</span>
              <span className="tech__tag">Python</span>
              <span className="tech__tag">Streamlit</span>
              <span className="tech__tag">Docker</span>
              <span className="tech__tag">GitHub Actions</span>
            </div>
          </div>
        </a>

        <a href="https://lib.utah.edu/protospace.php" target="_blank" rel="noopener noreferrer" className="experience__item">
          <div className="experience__date">2022 — 2023</div>
          <div className="experience__content">
            <h3>3D Print Lab Assistant • ProtoSpace ↗</h3>
            <p>
              Developed a 3D printer ticket system using Python, FastAPI, and GraphQL to automate print request workflows and monitor printer operational status, integrating with Jira for ticket management.
            </p>
            <div className="experience__tech">
              <span className="tech__tag">Python</span>
              <span className="tech__tag">FastAPI</span>
              <span className="tech__tag">GraphQL</span>
              <span className="tech__tag">MongoDB</span>
              <span className="tech__tag">Jira</span>
            </div>
          </div>
        </a>
      </div>
    </section>
  )
}

export default Experience