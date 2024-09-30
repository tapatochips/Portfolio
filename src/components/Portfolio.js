import React from "react";

//example projects for now
const projects = [
    { id: 1, title: 'Balance Check Calculator', description: "lorem ipsum", image: '/path-to-image1', link: '/path-to-link'},
    { id: 2, title: 'Finance/banking app', description: "This project allows users to create an account and help them track their finances", image: '/path-to-image1', link: '/path-to-link'},
    { id: 3, title: 'React-Native Weather app', description: "This app displays the weather for the users current location", image: '/path-to-image1', link: '/path-to-link'},
    { id: 4, title: 'Modernized Business Website', description: "My friend wanted me to try to modernize their personal business website, I have not hosted this site as we never came to an agreement of payment.", image: '/path-to-image1', link: '/path-to-link'},
    { id: 5, title: 'Pokemon Pokedex', description: "Users are able to search the pokedex for any pokemon and save them to their favorites.", image: '/path-to-image1', link: '/path-to-link'},
    
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