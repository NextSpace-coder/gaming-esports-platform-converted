import React, { useState } from 'react';

interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  company: string;
  message: string;
}

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: ''
  });
  const [loading, setLoading] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [validationErrors, setValidationErrors] = useState<string[]>([]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    console.log(`Input changed: ${name} = ${value}`);
    
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
    if (error) {
      setError(null);
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

  const submitToSupabase = async (data: ContactFormData) => {
    console.log('Submitting to Supabase with data:', data);
    
    const SUPABASE_URL = "https://iaptupykxulqphglbqbc.supabase.co";
    const SUPABASE_ANON_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImlhcHR1cHlreHVscXBoZ2xicWJjIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDc5MzQyNTYsImV4cCI6MjA2MzUxMDI1Nn0.DGdq6_7Fv6AuuCY6Hv6YDv_kaMpv_Z7Q6absvQhHarI";
    
    const payload = {
      name: data.name.trim(),
      email: data.email.trim(),
      phone: data.phone.trim() || null,
      company: data.company.trim() || null,
      message: data.message.trim(),
      status: 'new'
    };

    console.log('API payload:', payload);

    try {
      const response = await fetch(`${SUPABASE_URL}/rest/v1/58b7ef72-f2f8-45ba-a505-bb747b82fa1c_contact_submissions`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'apikey': SUPABASE_ANON_KEY,
          'Authorization': `Bearer ${SUPABASE_ANON_KEY}`,
          'Prefer': 'return=representation'
        },
        body: JSON.stringify(payload)
      });

      console.log('Response status:', response.status);
      console.log('Response headers:', Object.fromEntries(response.headers.entries()));

      if (!response.ok) {
        const errorText = await response.text();
        console.error('Response error:', errorText);
        throw new Error(`HTTP ${response.status}: ${errorText}`);
      }

      const result = await response.json();
      console.log('Success result:', result);
      return { data: result, error: null };
    } catch (err) {
      console.error('Fetch error:', err);
      return { data: null, error: err instanceof Error ? err.message : 'Unknown error' };
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log('=== FORM SUBMIT TRIGGERED ===');
    console.log('Form data:', formData);
    
    setSubmitSuccess(false);
    setValidationErrors([]);
    setError(null);

    // Validate form
    if (!validateForm()) {
      console.log('Form validation failed');
      return;
    }

    console.log('Form validation passed, starting submission...');
    setLoading(true);

    try {
      const { data, error: submitError } = await submitToSupabase(formData);

      if (submitError) {
        console.error('Submission error:', submitError);
        setError(submitError);
      } else if (data) {
        console.log('Submission successful:', data);
        setSubmitSuccess(true);
        setFormData({
          name: '',
          email: '',
          phone: '',
          company: '',
          message: ''
        });
      }
    } catch (err) {
      console.error('Unexpected error:', err);
      setError(err instanceof Error ? err.message : 'An unexpected error occurred');
    } finally {
      setLoading(false);
      console.log('=== FORM SUBMIT COMPLETED ===');
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
            cursor: loading ? 'not-allowed' : 'pointer',
            backgroundColor: loading ? '#666' : '#007bff',
            color: 'white',
            padding: '12px 24px',
            border: 'none',
            borderRadius: '5px',
            fontSize: '16px'
          }}
          onClick={() => console.log('Button clicked!')}
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

      {/* Debug Info */}
      <div style={{ 
        marginTop: '20px', 
        padding: '10px', 
        backgroundColor: '#f8f9fa', 
        border: '1px solid #dee2e6',
        borderRadius: '5px',
        fontSize: '12px'
      }}>
        <strong>Debug Info:</strong><br/>
        Loading: {loading ? 'Yes' : 'No'}<br/>
        Success: {submitSuccess ? 'Yes' : 'No'}<br/>
        Error: {error || 'None'}<br/>
        Form Data: {JSON.stringify(formData, null, 2)}
      </div>

      {/* Test Button */}
      <button 
        onClick={() => {
          console.log('Test button clicked!');
          alert('Test button works!');
        }}
        style={{
          marginTop: '10px',
          padding: '8px 16px',
          backgroundColor: '#28a745',
          color: 'white',
          border: 'none',
          borderRadius: '3px'
        }}
      >
        Test Button
      </button>
    </div>
  );
};

export default ContactForm;