import React from "react";

//example projects for now
const projects = [
  { id: 1, title: 'Thoughts with God', description: "This is a personal app that I have made and deployed on both Apple and Google play stores", image: '/verseDisplay.png', link: '/path-to-link'},
    { id: 2, title: 'Balance Check Calculator', description: "This app I can't show as it is for work purposes, however; it essentially is a tool to assist the billing department with their calculations for an updated amount due on past due accounts.", image: '/path-to-image1', link: '/path-to-link'},
    
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