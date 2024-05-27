import React from "react";

//example projects for now
const projects = [
    { id: 1, title: 'Project One', description: "Description of project one", image: '/path-to-image1', link: '/path-to-link'},
    { id: 2, title: 'Project Two', description: "Description of project two", image: '/path-to-image1', link: '/path-to-link'},
    { id: 3, title: 'Project Three', description: "Description of project three", image: '/path-to-image1', link: '/path-to-link'},
    { id: 4, title: 'Project Four', description: "Description of project four", image: '/path-to-image1', link: '/path-to-link'},
    { id: 5, title: 'Project Five', description: "Description of project five", image: '/path-to-image1', link: '/path-to-link'},
    { id: 5, title: 'Project Six', description: "Description of project six", image: '/path-to-image1', link: '/path-to-link'},
]

const Portfolio = () => (
    <section id="portfolio">
        <h2 style={{ color: 'white' }}>Portfolio</h2>
        <div className="project-cards" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '20px', padding: '20px' }}>
      {projects.map(project => (
        <div className="card" key={project.id} style={{ background: '#fff', padding: '20px', boxShadow: '0 4px 8px rgba(0,0,0,0.1)', borderRadius: '8px', textAlign: 'center' }}>
          <img src={project.image} alt={project.title} style={{ maxWidth: '100%', height: 'auto', borderRadius: '8px 8px 0 0' }} />
          <h3>{project.title}</h3>
          <p>{project.description}</p>
          <a href={project.link} target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', color: '#007BFF', fontWeight: 'bold' }}>View Project</a>
        </div>
      ))}</div>
    </section>
);

export default Portfolio;