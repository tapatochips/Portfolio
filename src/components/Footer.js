const Footer = () => (
  <footer style={{
    background: '#0d0d1a',
    borderTop: '1px solid #2d2d44',
    color: '#a0a0b0',
    textAlign: 'center',
    padding: '24px 20px',
  }}>
    <p style={{ margin: 0, fontSize: '0.9rem' }}>
      &copy; {new Date().getFullYear()} Daniel / Tapatochips LLC. All rights reserved.
    </p>
  </footer>
);

export default Footer;
