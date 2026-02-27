const Home = () => (
  <section id="home" style={{
    background: 'linear-gradient(135deg, #0d0d1a 0%, #1a1a3e 50%, #0d0d1a 100%)',
    minHeight: '100vh',
    color: '#fff',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    textAlign: 'center',
    padding: '80px 20px 40px',
    gap: '16px',
  }}>
    <h1 style={{ fontSize: '3.5rem', margin: 0, fontWeight: 700, letterSpacing: '-0.5px' }}>
      Daniel / Tapatochips LLC
    </h1>
    <h2 style={{ fontSize: '1.3rem', color: '#7b93fd', margin: 0, fontWeight: 400 }}>
      Full-Stack Developer
    </h2>
    <img
      src="codingcartoon.png"
      alt="Developer cartoon"
      style={{ width: '320px', height: 'auto', borderRadius: '16px', margin: '8px 0' }}
    />
    <p style={{ color: '#a0a0b0', maxWidth: '480px', lineHeight: '1.7', margin: 0, fontSize: '1.05rem' }}>
      Hello and welcome to my portfolio site!
    </p>
    <a
      href="#portfolio"
      style={{
        marginTop: '8px',
        background: '#7b93fd',
        color: '#fff',
        padding: '10px 28px',
        borderRadius: '8px',
        textDecoration: 'none',
        fontWeight: 600,
        fontSize: '0.95rem',
      }}
    >
      View My Work
    </a>
  </section>
);

export default Home;
