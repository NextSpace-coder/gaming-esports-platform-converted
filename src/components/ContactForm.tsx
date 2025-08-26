import React, { useState } from 'react';
import { useContactSubmissions } from '@/hooks/useContactSubmissions';

interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  company: string;
  message: string;
}

const ContactForm: React.FC = () => {
  const { submitContact, loading, error } = useContactSubmissions();
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: ''
  });
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [validationErrors, setValidationErrors] = useState<string[]>([]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    // Clear validation errors when user starts typing
    if (validationErrors.length > 0) {
      setValidationErrors([]);
    }
    if (submitSuccess) {
      setSubmitSuccess(false);
    }
  };

  const validateForm = (): boolean => {
    const errors: string[] = [];
    
    if (!formData.name.trim()) {
      errors.push('Name is required');
    }
    
    if (!formData.email.trim()) {
      errors.push('Email is required');
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errors.push('Please enter a valid email address');
    }
    
    if (!formData.message.trim()) {
      errors.push('Message is required');
    }

    setValidationErrors(errors);
    return errors.length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted!', formData); // Debug log
    
    setSubmitSuccess(false);
    setValidationErrors([]);

    // Validate form
    if (!validateForm()) {
      console.log('Form validation failed');
      return;
    }

    console.log('Submitting to Supabase...'); // Debug log

    try {
      const { data, error: submitError } = await submitContact({
        name: formData.name.trim(),
        email: formData.email.trim(),
        phone: formData.phone.trim() || null,
        company: formData.company.trim() || null,
        message: formData.message.trim()
      });

      console.log('Supabase response:', { data, error: submitError }); // Debug log

      if (!submitError && data) {
        setSubmitSuccess(true);
        setFormData({
          name: '',
          email: '',
          phone: '',
          company: '',
          message: ''
        });
        console.log('Form submitted successfully!');
      }
    } catch (err) {
      console.error('Submit error:', err);
    }
  };

  return (
    <div className="contact__form-wrap">
      <form onSubmit={handleSubmit} noValidate>
        <div className="input-grp">
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            placeholder="Your Name *"
            className={validationErrors.some(err => err.includes('Name')) ? 'error' : ''}
          />
        </div>
        
        <div className="input-grp">
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            placeholder="Your Email *"
            className={validationErrors.some(err => err.includes('Email') || err.includes('email')) ? 'error' : ''}
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
            rows={5}
            className={validationErrors.some(err => err.includes('Message')) ? 'error' : ''}
          ></textarea>
        </div>
        
        {/* Validation Errors */}
        {validationErrors.length > 0 && (
          <div className="validation-errors" style={{ color: '#ff6b6b', marginBottom: '15px' }}>
            {validationErrors.map((error, index) => (
              <p key={index} style={{ margin: '5px 0', fontSize: '14px' }}>• {error}</p>
            ))}
          </div>
        )}
        
        <button 
          type="submit" 
          className="submit-btn"
          disabled={loading}
          style={{ 
            opacity: loading ? 0.7 : 1,
            cursor: loading ? 'not-allowed' : 'pointer'
          }}
        >
          {loading ? 'Sending...' : 'Send Message'}
        </button>
      </form>

      {/* Success Message */}
      {submitSuccess && (
        <div className="ajax-response success" style={{ 
          color: '#28a745', 
          backgroundColor: '#d4edda', 
          border: '1px solid #c3e6cb',
          padding: '10px 15px',
          borderRadius: '5px',
          marginTop: '15px'
        }}>
          <p style={{ margin: 0 }}>✅ Thank you! Your message has been sent successfully.</p>
        </div>
      )}

      {/* Error Message */}
      {error && (
        <div className="ajax-response error" style={{ 
          color: '#dc3545', 
          backgroundColor: '#f8d7da', 
          border: '1px solid #f5c6cb',
          padding: '10px 15px',
          borderRadius: '5px',
          marginTop: '15px'
        }}>
          <p style={{ margin: 0 }}>❌ Error: {error}</p>
        </div>
      )}

      {/* Debug Info (remove in production) */}
      {process.env.NODE_ENV === 'development' && (
        <div style={{ 
          marginTop: '20px', 
          padding: '10px', 
          backgroundColor: '#f8f9fa', 
          border: '1px solid #dee2e6',
          borderRadius: '5px',
          fontSize: '12px'
        }}>
          <strong>Debug Info:</strong>
          <pre>{JSON.stringify({ loading, error, submitSuccess, formData }, null, 2)}</pre>
        </div>
      )}
    </div>
  );
};

export default ContactForm;