const Tag = ({ label }) => (
  <span className="skill-tag" style={{
    background: '#181830',
    border: '1px solid #2d2d50',
    color: '#c8cef5',
    padding: '7px 18px',
    borderRadius: '999px',
    fontSize: '0.88rem',
    fontWeight: 500,
    letterSpacing: '0.2px',
  }}>
    {label}
  </span>
);

const About = () => (
  <section id="about" style={{
    background: 'linear-gradient(180deg, #0d0d1a 0%, #111128 100%)',
    color: 'white',
    padding: '110px 20px',
    textAlign: 'center',
  }}>
    <h2 className="section-title">About Me</h2>
    <div className="section-divider" />

    <div style={{ maxWidth: '680px', margin: '0 auto' }}>
      <p style={{ color: '#8888aa', lineHeight: '1.9', marginBottom: '48px', fontSize: '1rem' }}>
        I am a Full-Stack Developer currently pursuing a degree in Computer Science,
        with a strong foundation built through hands-on, self-directed learning.
        I design and develop scalable, accessible, and performance-driven applications across the full technology stack.
        My experience spans multiple programming languages, modern frameworks, and cross-platform environments,
        enabling me to deliver robust, maintainable, and user-focused solutions.
      </p>

      <h3 style={{ color: '#7b93fd', marginBottom: '16px', fontSize: '0.78rem', textTransform: 'uppercase', letterSpacing: '2px', fontWeight: 600 }}>
        Languages
      </h3>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', justifyContent: 'center', marginBottom: '40px' }}>
        {['JavaScript', 'TypeScript', 'Python', 'Java', 'C++', 'C#'].map(lang => (
          <Tag key={lang} label={lang} />
        ))}
      </div>

      <h3 style={{ color: '#7b93fd', marginBottom: '16px', fontSize: '0.78rem', textTransform: 'uppercase', letterSpacing: '2px', fontWeight: 600 }}>
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
