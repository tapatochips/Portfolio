import { useState } from 'react';

const inputStyle = {
  background: '#1e1e2e',
  border: '1px solid #2d2d44',
  borderRadius: '8px',
  color: '#fff',
  padding: '10px 14px',
  fontSize: '0.95rem',
  width: '100%',
  outline: 'none',
  marginTop: '6px',
};

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');

    if (!formData.name || !formData.email || !formData.message) {
      alert('Please fill out missing fields!');
      setIsLoading(false);
      return;
    }

    const recaptchaToken = document.querySelector('.g-recaptcha-response').value;
    formData['g-recaptcha-response'] = recaptchaToken;

    try {
      const response = await fetch('http://localhost:5000/send', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        setSuccess('Message sent successfully!');
        setFormData({ name: '', email: '', message: '' });
      } else {
        setError('Error sending message. Please try again later.');
      }
    } catch {
      setError('Network error. Please try again later.');
    }

    setIsLoading(false);
  };

  return (
    <section id="contact" style={{
      background: '#0f0f1f',
      padding: '100px 20px',
      textAlign: 'center',
    }}>
      <h2 style={{ color: '#fff', fontSize: '2rem', marginBottom: '12px' }}>Contact</h2>
      <div style={{ width: '48px', height: '3px', background: '#7b93fd', margin: '0 auto 40px', borderRadius: '2px' }} />

      <form
        onSubmit={handleSubmit}
        style={{
          maxWidth: '520px',
          margin: '0 auto',
          display: 'flex',
          flexDirection: 'column',
          gap: '20px',
          textAlign: 'left',
        }}
      >
        <div>
          <label style={{ color: '#a0a0b0', fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            style={inputStyle}
          />
        </div>
        <div>
          <label style={{ color: '#a0a0b0', fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            style={inputStyle}
          />
        </div>
        <div>
          <label style={{ color: '#a0a0b0', fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
            Message
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            rows={5}
            style={{ ...inputStyle, resize: 'vertical' }}
          />
        </div>

        <div className="g-recaptcha" data-sitekey="your-site-key" />

        <button
          type="submit"
          disabled={isLoading}
          style={{
            background: isLoading ? '#4a5490' : '#7b93fd',
            color: '#fff',
            border: 'none',
            borderRadius: '8px',
            padding: '12px',
            fontSize: '1rem',
            fontWeight: 600,
            cursor: isLoading ? 'not-allowed' : 'pointer',
            transition: 'background 0.2s',
          }}
        >
          {isLoading ? 'Sending...' : 'Send Message'}
        </button>

        {error && <p style={{ color: '#ff6b6b', margin: 0 }}>{error}</p>}
        {success && <p style={{ color: '#6bffb8', margin: 0 }}>{success}</p>}
      </form>
    </section>
  );
};

export default Contact;
