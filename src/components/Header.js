const Header = () => (
  <header style={{
    background: 'rgba(13, 13, 26, 0.9)',
    backdropFilter: 'blur(10px)',
    borderBottom: '1px solid #2d2d44',
    color: '#fff',
    padding: '0 40px',
    position: 'fixed',
    width: '100%',
    top: 0,
    zIndex: 1000,
    height: '60px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
  }}>
    <span style={{ fontWeight: 700, fontSize: '1.1rem', color: '#7b93fd', letterSpacing: '0.5px' }}>
      Daniel / Tapatochips LLC
    </span>
    <nav>
      <ul style={{ listStyle: 'none', padding: 20, margin: 50, display: 'flex', gap: '32px' }}>
        {['Home', 'About', 'Portfolio'].map(item => (
          <li key={item}>
            <a
              href={`#${item.toLowerCase()}`}
              style={{ color: '#a0a0b0', textDecoration: 'none', fontSize: '0.95rem', transition: 'color 0.2s' }}
              onMouseEnter={e => e.target.style.color = '#7b93fd'}
              onMouseLeave={e => e.target.style.color = '#a0a0b0'}
            >
              {item}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  </header>
);

export default Header;
