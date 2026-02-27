import { useState } from "react";

const projects = [
  {
    id: 1,
    title: 'Thoughts With God',
    description: 'A React Native app for daily Bible verses, prayer management, and spiritual reflection. Built with a Firebase backend and designed with accessibility in mind.',
    features: [
      'Daily Bible verses from a complete Bible database',
      'Prayer board with community & personal tracking',
      'Favorites management for saved verses',
      'Light, Dark, and Sepia themes',
      'Dynamic font sizing & screen reader support',
      'Premium subscriptions via Stripe',
    ],
    tech: ['React Native', 'Firebase', 'Expo', 'Stripe', 'TypeScript'],
    screenshots: [
      '/ThoughtsWithGodSignIn.png',
      '/ThoughtsWithGodSignUp.png',
      '/ThoughtsWithGodHomePage.png',
      '/ThoughtsWithGodFavoritesPage.png',
      '/ThoughtsWithGodPrayerBoard.png',
      '/ThoughtsWithGodBibleReader.png',
      '/ThoughtsWithGodBiblicalDiscussions.png',
      '/ThoughtsWithGodSubPage.png',
      '/ThoughtsWithGodProfile1.png',
      '/ThoughtsWithGodProfile2.png',
    ],
    link: 'https://github.com/tapatochips/ThoughtsWithGod',
  },
  {
    id: 2,
    title: 'Balance Check Calculator',
    description: 'A calculator app for determining past due account balances and what is needed to bring the customer current. I am unable to provide Images of this app at this time.',
    features: [
      'Dynamic balance calculations based on user input',
      'User-friendly interface for quick data entry',
      'Responsive design for  desktop use',
      'Exportable calculation results for record-keeping',
    ],
    tech: ['C#/.NET', 'SQL Server', 'Entity Framework', 'ASP.NET Core', 'JavaScript'],
    screenshots: [
      '',
    ],
    link: 'https://github.com/tapatochips/balcheckcalcweb',
  },
  {
    id: 3,
    title: 'College Work',
    description: 'This Repo contains projects from my all of my college coursework. At this time I am unable to provide images of these projects.',
    features: [
      'In college I have completed projects in a variety of languages and frameworks, including Java, C++, Python, C#, SQL.',
    ],
    tech: ['C++', 'Java', 'Python', 'C#', 'SQL'],
    screenshots: [
      '',
    ],
    link: 'https://github.com/tapatochips/College-work',
  },
];

const ImageCarousel = ({ screenshots, title }) => {
  const [index, setIndex] = useState(0);

  const prev = () => setIndex(i => (i === 0 ? screenshots.length - 1 : i - 1));
  const next = () => setIndex(i => (i === screenshots.length - 1 ? 0 : i + 1));

  const btnStyle = {
    position: 'absolute',
    top: '50%',
    transform: 'translateY(-50%)',
    background: 'rgba(0,0,0,0.5)',
    color: '#fff',
    border: 'none',
    borderRadius: '50%',
    width: '32px',
    height: '32px',
    cursor: 'pointer',
    fontSize: '1rem',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 1,
  };

  return (
    <div style={{ position: 'relative', width: '100%', height: '220px', background: '#111' }}>
      <img
        src={screenshots[index]}
        alt={`${title} screenshot ${index + 1}`}
        style={{ width: '100%', height: '100%', objectFit: 'contain' }}
      />
      <button onClick={prev} style={{ ...btnStyle, left: '8px' }}>‹</button>
      <button onClick={next} style={{ ...btnStyle, right: '8px' }}>›</button>
      <div style={{
        position: 'absolute',
        bottom: '8px',
        left: '50%',
        transform: 'translateX(-50%)',
        display: 'flex',
        gap: '5px',
      }}>
        {screenshots.map((_, i) => (
          <button
            key={i}
            onClick={() => setIndex(i)}
            style={{
              width: '8px',
              height: '8px',
              borderRadius: '50%',
              border: 'none',
              cursor: 'pointer',
              padding: 0,
              background: i === index ? '#7b93fd' : 'rgba(255,255,255,0.4)',
            }}
          />
        ))}
      </div>
    </div>
  );
};
const Portfolio = () => (
  <section id="portfolio" style={{ padding: '40px 20px' }}>
    <h2 style={{ color: 'white', marginBottom: '30px' }}>Portfolio</h2>
    <div
      className="project-cards"
      style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))',
        gap: '24px',
      }}
    >
      {projects.map(project => (
        <div
          className="card"
          key={project.id}
          style={{
            background: '#1e1e2e',
            borderRadius: '12px',
            overflow: 'hidden',
            boxShadow: '0 4px 20px rgba(0,0,0,0.3)',
            display: 'flex',
            flexDirection: 'column',
          }}
        >
          <ImageCarousel screenshots={project.screenshots} title={project.title} />

          <div style={{ padding: '20px', flex: 1, display: 'flex', flexDirection: 'column' }}>
            <h3 style={{ color: '#fff', margin: '0 0 10px', fontSize: '1.2rem' }}>
              {project.title}
            </h3>
            <p style={{ color: '#a0a0b0', fontSize: '0.9rem', lineHeight: '1.6', margin: '0 0 16px' }}>
              {project.description}
            </p>

            {/* Tech tags */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', marginBottom: '16px' }}>
              {project.tech.map(tag => (
                <span
                  key={tag}
                  style={{
                    background: '#2d2d44',
                    color: '#7b93fd',
                    fontSize: '0.75rem',
                    padding: '3px 10px',
                    borderRadius: '20px',
                    border: '1px solid #3d3d5c',
                  }}
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* Feature list */}
            <ul style={{ color: '#a0a0b0', fontSize: '0.85rem', paddingLeft: '18px', margin: '0 0 20px', lineHeight: '1.8' }}>
              {project.features.map(f => (
                <li key={f}>{f}</li>
              ))}
            </ul>

            {/* View Project button pinned to bottom */}
            <div style={{ marginTop: 'auto' }}>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: 'inline-block',
                  background: '#7b93fd',
                  color: '#fff',
                  padding: '8px 20px',
                  borderRadius: '6px',
                  textDecoration: 'none',
                  fontWeight: 'bold',
                  fontSize: '0.9rem',
                }}
              >
                View Project
              </a>
            </div>
          </div>
        </div>
      ))}
    </div>
  </section>
);

export default Portfolio;
