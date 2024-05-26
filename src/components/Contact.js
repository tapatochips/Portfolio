import React, { useState } from 'react';

const Contact = () => {
    //store data
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    });

    //state to manage load and error
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');

    //handle input
    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value, 
        });
    };

    //handle submit
    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true);
        setError('');

    //basic form validation
    if (!formData.name || !formData.email || !formData.message) {
        alert("Please fill out missing fields!");
        setIsLoading(false);
        return;
    }

    //adding captcha to form
    const recaptchaToken = document.querySelector('.g-recaptcha-response').value;
    formData['g-recaptcha-response'] = recaptchaToken;

    //send data to server
    try {
        const response = await fetch('http://localhost:5000/send', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formData),
        });
        //check response
        if (response.ok) {
          setSuccess('Message sent successfully!');
          setFormData({ name: '', email: '', message: '' });
        } else {
          setError('Error sending message. Please try again later.');
        }
      } catch (error) {
        setError('Network error. Please try again later.');
      }
  
      setIsLoading(false);
    };
  
    return (
      <section id="contact">
        <h2>Contact</h2>
        <form onSubmit={handleSubmit}>
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required />
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required />
          <label htmlFor="message">Message:</label>
          <textarea id="message" name="message" value={formData.message} onChange={handleChange} required></textarea>
          <div className="g-recaptcha" data-sitekey="your-site-key"></div>
          <button type="submit" disabled={isLoading}>{isLoading ? 'Sending...' : 'Submit'}</button>
          {error && <p className="error" style={{ color: 'red', marginTop: '10px' }}>{error}</p>}
          {success && <p className="success" style={{ color: 'green', marginTop: '10px' }}>{success}</p>}
        </form>
      </section>
    );
  };
  

export default Contact;
