const Tag = ({ label }) => (
  <span style={{
    background: '#1e1e2e',
    border: '1px solid #2d2d44',
    color: '#e0e0f0',
    padding: '6px 16px',
    borderRadius: '20px',
    fontSize: '0.9rem',
  }}>
    {label}
  </span>
);

const About = () => (
  <section id="about" style={{
    background: '#0d0d1a',
    color: 'white',
    padding: '100px 20px',
    textAlign: 'center',
  }}>
    <h2 style={{ fontSize: '2rem', marginBottom: '12px' }}>About Me</h2>
    <div style={{ width: '48px', height: '3px', background: '#7b93fd', margin: '0 auto 32px', borderRadius: '2px' }} />

    <div style={{ maxWidth: '680px', margin: '0 auto' }}>
      <p style={{ color: '#a0a0b0', lineHeight: '1.8', marginBottom: '40px', fontSize: '1rem' }}>
        Hello! I am a self-taught Full-Stack Developer currently pursuing a degree in Computer Science.
        I enjoy building accessible, well-designed applications and have experience across multiple
        languages, frameworks, and platforms.
      </p>

      <h3 style={{ color: '#7b93fd', marginBottom: '16px', fontSize: '1rem', textTransform: 'uppercase', letterSpacing: '1px' }}>
        Languages
      </h3>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', justifyContent: 'center', marginBottom: '32px' }}>
        {['JavaScript', 'TypeScript', 'Python', 'Java', 'C++', 'C#'].map(lang => (
          <Tag key={lang} label={lang} />
        ))}
      </div>

      <h3 style={{ color: '#7b93fd', marginBottom: '16px', fontSize: '1rem', textTransform: 'uppercase', letterSpacing: '1px' }}>
        Frameworks & Libraries
      </h3>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', justifyContent: 'center' }}>
        {['React', 'React Native', 'MongoDB', 'Firebase', 'Express', 'Node.js', 'Flask', 'Jinja'].map(fw => (
          <Tag key={fw} label={fw} />
        ))}
      </div>
    </div>
  </section>
);

export default About;
