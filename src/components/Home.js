const Home = () => (
  <section id="home" style={{
    background: 'radial-gradient(ellipse at 50% 0%, #1a1a4e 0%, #0d0d1a 60%)',
    minHeight: '100vh',
    color: '#fff',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    textAlign: 'center',
    padding: '80px 20px 60px',
    gap: '20px',
  }}>
    <h1 style={{
      fontSize: 'clamp(2.2rem, 6vw, 3.8rem)',
      margin: 0,
      fontWeight: 700,
      letterSpacing: '-1px',
      background: 'linear-gradient(135deg, #ffffff 30%, #7b93fd 100%)',
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
      backgroundClip: 'text',
    }}>
      Daniel / Tapatochips LLC
    </h1>
    <h2 style={{
      fontSize: '1.15rem',
      color: '#7b93fd',
      margin: 0,
      fontWeight: 500,
      letterSpacing: '2px',
      textTransform: 'uppercase',
      opacity: 0.9,
    }}>
      Full-Stack Developer
    </h2>
    <img
      src="codingcartoon.png"
      alt="Developer cartoon"
      style={{
        width: '280px',
        height: 'auto',
        borderRadius: '20px',
        margin: '4px 0',
        boxShadow: '0 8px 40px rgba(123, 147, 253, 0.2)',
      }}
    />
    <p style={{ color: '#8888aa', maxWidth: '420px', lineHeight: '1.8', margin: 0, fontSize: '1rem' }}>
      Hello and welcome to my portfolio site!
    </p>
    <a
      href="#portfolio"
      className="btn-primary"
      style={{
        marginTop: '4px',
        padding: '12px 32px',
        fontSize: '0.95rem',
        borderRadius: '10px',
      }}
    >
      View My Work
    </a>
  </section>
);

export default Home;
