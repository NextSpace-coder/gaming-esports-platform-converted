import React, { useState } from 'react';
import { useContactSubmissions } from '@/hooks/useContactSubmissions';

interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  company: string;
  message: string;
}

const ContactPage: React.FC = () => {
  const { submitContact, loading, error } = useContactSubmissions();
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: ''
  });
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitSuccess(false);

    if (!formData.name || !formData.email || !formData.message) {
      return;
    }

    const { data, error: submitError } = await submitContact({
      name: formData.name,
      email: formData.email,
      phone: formData.phone || null,
      company: formData.company || null,
      message: formData.message
    });

    if (!submitError && data) {
      setSubmitSuccess(true);
      setFormData({
        name: '',
        email: '',
        phone: '',
        company: '',
        message: ''
      });
    }
  };

  return (
    <main className="main--area">
      {/* Breadcrumb Area */}
      <section className="breadcrumb-area breadcrumb__hide-img" style={{backgroundImage: 'url(/assets/img/bg/breadcrumb_bg02.jpg)'}}>
        <div className="container">
          <div className="breadcrumb__wrapper">
            <div className="row">
              <div className="col-12">
                <div className="breadcrumb__content">
                  <h2 className="title">Contact Us</h2>
                  <nav className="breadcrumb">
                    <span property="itemListElement" typeof="ListItem">
                      <a href="/">Home</a>
                    </span>
                    <span className="breadcrumb-separator"><i className="fas fa-angle-right"></i></span>
                    <span property="itemListElement" typeof="ListItem">Contact</span>
                  </nav>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Area */}
      <section className="contact-area">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="contact__content">
                <div className="overlay-title">
                  <span>Contact</span>
                </div>
                <h2 className="title">Get In Touch</h2>
                <p>Ready to take your gaming experience to the next level? Contact our team today to learn more about our services and how we can help you dominate the competition.</p>
                
                <div className="footer-el-widget">
                  <div className="footer-contact-link">
                    <div className="icon">
                      <i className="flaticon-telephone"></i>
                    </div>
                    <div className="content">
                      <h4 className="title">Phone Number</h4>
                      <a href="tel:+1234567890" className="link">+123 456 7890</a>
                    </div>
                  </div>
                </div>

                <div className="footer-el-widget">
                  <div className="footer-contact-link">
                    <div className="icon">
                      <i className="flaticon-mail"></i>
                    </div>
                    <div className="content">
                      <h4 className="title">Email Address</h4>
                      <a href="mailto:info@gaming.com" className="link">info@gaming.com</a>
                    </div>
                  </div>
                </div>

                <div className="footer-el-widget">
                  <div className="footer-contact-link">
                    <div className="icon">
                      <i className="flaticon-location"></i>
                    </div>
                    <div className="content">
                      <h4 className="title">Office Address</h4>
                      <p>123 Gaming Street, Tech City, TC 12345</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-6">
              <div className="contact__form-wrap">
                <form onSubmit={handleSubmit}>
                  <div className="input-grp">
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="Your Name *"
                      required
                    />
                  </div>
                  
                  <div className="input-grp">
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="Your Email *"
                      required
                    />
                  </div>
                  
                  <div className="input-grp">
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder="Your Phone"
                    />
                  </div>
                  
                  <div className="input-grp">
                    <input
                      type="text"
                      name="company"
                      value={formData.company}
                      onChange={handleInputChange}
                      placeholder="Your Company"
                    />
                  </div>
                  
                  <div className="input-grp message-grp">
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Your Message *"
                      required
                    ></textarea>
                  </div>
                  
                  <button 
                    type="submit" 
                    className="submit-btn"
                    disabled={loading}
                  >
                    {loading ? 'Sending...' : 'Send Message'}
                  </button>
                </form>

                {/* Success Message */}
                {submitSuccess && (
                  <div className="ajax-response success">
                    <p>Thank you! Your message has been sent successfully.</p>
                  </div>
                )}

                {/* Error Message */}
                {error && (
                  <div className="ajax-response error">
                    <p>Error: {error}</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="contact-map">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3024.1234567890123!2d-74.0059413!3d40.7127837!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25a316e7e5b6d%3A0x1234567890abcdef!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2sus!4v1234567890123!5m2!1sen!2sus"
          width="600"
          height="450"
          style={{border: 0}}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Office Location"
        ></iframe>
      </section>
    </main>
  );
};

export default ContactPage;