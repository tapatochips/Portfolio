const Header = () => (
  <header style={{
    background: 'rgba(13, 13, 26, 0.85)',
    backdropFilter: 'blur(14px)',
    WebkitBackdropFilter: 'blur(14px)',
    borderBottom: '1px solid rgba(123, 147, 253, 0.12)',
    color: '#fff',
    padding: '0 40px',
    position: 'fixed',
    width: '100%',
    top: 0,
    zIndex: 1000,
    height: '64px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    boxSizing: 'border-box',
  }}>
    <span style={{
      fontWeight: 700,
      fontSize: '1.05rem',
      color: '#7b93fd',
      letterSpacing: '0.3px',
    }}>
      Daniel / Tapatochips LLC
    </span>
    <nav>
      <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', gap: '36px' }}>
        {['Home', 'About', 'Portfolio'].map(item => (
          <li key={item}>
            <a
              href={`#${item.toLowerCase()}`}
              style={{
                color: '#a0a0b0',
                textDecoration: 'none',
                fontSize: '0.9rem',
                fontWeight: 500,
                letterSpacing: '0.3px',
                transition: 'color 0.2s',
              }}
              onMouseEnter={e => e.target.style.color = '#c5d0ff'}
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
