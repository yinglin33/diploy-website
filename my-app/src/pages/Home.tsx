import React, { useState } from 'react';
import { Row, Col, Card, Button, Container, Form, Alert } from 'react-bootstrap';
import './Home.css';

const Home: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    subject: '',
    message: '',
    phone: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      // EmailJS configuration would go here
      // For now, we'll simulate the email sending
      await new Promise(resolve => setTimeout(resolve, 2000)); // Simulate API call
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        company: '',
        subject: '',
        message: '',
        phone: ''
      });
      setSubmitStatus('success');
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="home-container">
      {/* HERO SECTION */}
      <section className="d-flex align-items-center justify-content-center hero-section">
        <Container className="text-center">
          <h1 className="display-3 fw-bold text-primary mb-4">Welcome to Diploy</h1>
          <p className="fs-4 text-muted mb-5 mx-auto hero-description">
            We help field service and labor-based businesses run smoother — from scheduling and dispatching to AI-powered team management.
          </p>
          <Button variant="primary" size="lg" href="#contact" className="px-5 py-3 fs-5">
            Get in Touch
          </Button>
        </Container>
      </section>

      {/* ABOUT SECTION */}
      <section className="py-5 border-bottom bg-white about-section">
        <Container className="text-start d-flex flex-column justify-content-center about-container">
          <h2 className="display-5 fw-bold text-secondary mb-4 text-start">Why Diploy?</h2>
          <p className="fs-5 mb-3 text-start about-text">
            Diploy is a modular workspace and frontline team management system. It's designed for small businesses who are tired of juggling text threads, spreadsheets, or overpriced software. With Diploy, you can build your own setup — like Notion, but optimized for dispatching, team coordination, and customer management.
          </p>
          <p className="fs-5 text-muted mb-4 text-start about-text">
            Use just what you need. Pay for just what you use. Scale confidently.
          </p>
          <p className="text-muted fst-italic mb-0 text-start">Version 1.0: Workspace & Frontline Team Management System</p>
        </Container>
      </section>

      {/* BOOK A DEMO SECTION */}
      <section className="py-5 border-bottom demo-section">
        <Container className="text-center d-flex flex-column justify-content-center demo-container">
          <h2 className="display-5 fw-bold text-secondary mb-4">Ready to See Diploy in Action?</h2>
          <p className="fs-5 text-muted mb-4 mx-auto demo-description">
            Schedule a personalized demo to see how Diploy can streamline your frontline operations and help your business run smoother.
          </p>
          <div className="d-flex justify-content-center">
            <Button 
              variant="primary" 
              size="lg" 
              href="https://calendly.com/yinglonglin/diploy-product-demo"
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-3 fs-5 demo-button"
            >
              Book a Demo
            </Button>
          </div>
        </Container>
      </section>

      {/* CONTACT SECTION */}
      <section className="py-5 contact-section" id="contact">
        <Container>
          <div className="text-start mb-5">
            <h2 className="display-5 fw-bold text-secondary mb-4">Contact Us</h2>
            <p className="fs-5 text-muted mb-0">
              Have questions about Diploy? We'd love to hear from you. Fill out the form below and we'll get back to you within 2-3 business days.
            </p>
          </div>

          {submitStatus === 'success' && (
            <Alert variant="success" className="mb-4">
              <Alert.Heading>Message Sent Successfully!</Alert.Heading>
              <p className="mb-0">
                Thank you for reaching out. We've received your message and will get back to you within 2-3 business days.
              </p>
            </Alert>
          )}

          {submitStatus === 'error' && (
            <Alert variant="danger" className="mb-4">
              <Alert.Heading>Message Not Sent</Alert.Heading>
              <p className="mb-0">
                We encountered an issue sending your message. Please try again or contact us directly at sales@diploy.io
              </p>
            </Alert>
          )}

          <Row>
            <Col lg={7}>
              <Card className="shadow-sm border-0">
                <Card.Body className="p-5">
                  <Form onSubmit={handleSubmit}>
                    <Row>
                      <Col md={6}>
                        <Form.Group className="mb-4">
                          <Form.Label className="fw-semibold text-start">Name *</Form.Label>
                          <Form.Control
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleInputChange}
                            required
                            placeholder="Name"
                            size="lg"
                          />
                        </Form.Group>
                      </Col>
                      <Col md={6}>
                        <Form.Group className="mb-4">
                          <Form.Label className="fw-semibold text-start">Email *</Form.Label>
                          <Form.Control
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleInputChange}
                            required
                            placeholder="Email Address"
                            size="lg"
                          />
                        </Form.Group>
                      </Col>
                    </Row>

                    <Row>
                      <Col md={6}>
                        <Form.Group className="mb-4">
                          <Form.Label className="fw-semibold text-start">Company/Organization</Form.Label>
                          <Form.Control
                            type="text"
                            name="company"
                            value={formData.company}
                            onChange={handleInputChange}
                            placeholder="Company/Organization"
                            size="lg"
                          />
                        </Form.Group>
                      </Col>
                      <Col md={6}>
                        <Form.Group className="mb-4">
                          <Form.Label className="fw-semibold text-start">Phone Number</Form.Label>
                          <Form.Control
                            type="tel"
                            name="phone"
                            value={formData.phone}
                            onChange={handleInputChange}
                            placeholder="Phone Number"
                            size="lg"
                          />
                        </Form.Group>
                      </Col>
                    </Row>

                    <Form.Group className="mb-4">
                      <Form.Label className="fw-semibold text-start">Subject/Reason for Contact *</Form.Label>
                      <Form.Control
                        type="text"
                        name="subject"
                        value={formData.subject}
                        onChange={handleInputChange}
                        required
                        placeholder="e.g., Product inquiry, Demo request, Support"
                        size="lg"
                      />
                    </Form.Group>

                    <Form.Group className="mb-4">
                      <Form.Label className="fw-semibold text-start">Message *</Form.Label>
                      <Form.Control
                        as="textarea"
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        required
                        placeholder="Tell us more about your needs and how we can help..."
                        rows={5}
                        className="contact-textarea"
                      />
                    </Form.Group>

                    <div className="d-flex justify-content-start">
                      <Button
                        type="submit"
                        variant="primary"
                        size="lg"
                        disabled={isSubmitting}
                        className="px-5 py-3 fs-5 contact-submit-button"
                      >
                        {isSubmitting ? 'Sending...' : 'Send'}
                      </Button>
                    </div>
                  </Form>
                </Card.Body>
              </Card>
            </Col>

            <Col lg={5}>
              <div className="text-start">
                <h4 className="fw-semibold text-secondary mb-4">Other Ways to Reach Us</h4>
                <div className="d-flex align-items-center mb-4">
                  <div className="me-3">
                    <i className="bi bi-envelope-fill text-primary fs-3"></i>
                  </div>
                  <div>
                    <p className="mb-1 fw-semibold fs-5">Email</p>
                    <a
                      href="mailto:sales@diploy.io"
                      className="text-decoration-none text-muted fs-6"
                    >
                      sales@diploy.io
                    </a>
                  </div>
                </div>
                <div className="d-flex align-items-center mb-4">
                  <div className="me-3">
                    <i className="bi bi-telephone-fill text-primary fs-3"></i>
                  </div>
                  <div>
                    <p className="mb-1 fw-semibold fs-5">Phone</p>
                    <a
                      href="tel:+19097189852"
                      className="text-decoration-none text-muted fs-6"
                    >
                      +1 (909) 718-9852
                    </a>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  );
};

export default Home;
