import React from 'react';
import { Row, Col, Card, Button, Container } from 'react-bootstrap';

const Home: React.FC = () => {
  return (
    <div style={{ backgroundColor: '#f8f9fa' }}>
      {/* HERO SECTION */}
      <section className="d-flex align-items-center justify-content-center" style={{ 
        minHeight: '100vh', 
        background: 'linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%)',
        position: 'relative'
      }}>
        <Container className="text-center">
          <h1 className="display-3 fw-bold text-primary mb-4">Welcome to Diploy</h1>
          <p className="fs-4 text-muted mb-5 mx-auto" style={{ maxWidth: '800px', lineHeight: '1.8' }}>
            We help field service and labor-based businesses run smoother — from scheduling and dispatching to AI-powered team management.
          </p>
          <Button variant="primary" size="lg" href="#contact" className="px-5 py-3 fs-5">
            Get in Touch
          </Button>
        </Container>
      </section>

      {/* ABOUT SECTION */}
      <section className="py-5 border-bottom bg-white" style={{ minHeight: '500px', paddingTop: '80px', paddingBottom: '80px' }}>
        <Container className="text-start d-flex flex-column justify-content-center" style={{ minHeight: '400px' }}>
          <h2 className="display-5 fw-bold text-secondary mb-4 text-start">Why Diploy?</h2>
          <p className="fs-5 mb-3 text-start" style={{ lineHeight: '1.7' }}>
            Diploy is a modular workspace and frontline team management system. It's designed for small businesses who are tired of juggling text threads, spreadsheets, or overpriced software. With Diploy, you can build your own setup — like Notion, but optimized for dispatching, team coordination, and customer management.
          </p>
          <p className="fs-5 text-muted mb-4 text-start" style={{ lineHeight: '1.7' }}>
            Use just what you need. Pay for just what you use. Scale confidently.
          </p>
          <p className="text-muted fst-italic mb-0 text-start">Version 1.0: Workspace & Frontline Team Management System</p>
        </Container>
      </section>

      {/* BOOK A DEMO SECTION */}
      <section className="py-5 border-bottom">
        <Container className="text-center">
          <h2 className="h3 fw-semibold text-secondary mb-4">Ready to See Diploy in Action?</h2>
          <p className="fs-5 text-muted mb-4 mx-auto" style={{ maxWidth: '700px', lineHeight: '1.6' }}>
            Schedule a personalized demo to see how Diploy can streamline your frontline operations and help your business run smoother.
          </p>
          <Button 
            variant="primary" 
            size="lg" 
            href="https://calendly.com/yinglonglin/diploy-product-demo"
            target="_blank"
            rel="noopener noreferrer"
          >
            Book a Demo
          </Button>
        </Container>
      </section>

      {/* CONTACT SECTION */}
      <section className="py-5 bg-light" id="contact">
        <Container className="text-center">
          <h2 className="h3 fw-semibold text-secondary mb-4">Contact Us</h2>
          <Row className="justify-content-center g-4">
            <Col xs={12} md={5}>
              <Card className="h-100 shadow-sm border-0">
                <Card.Body className="p-4">
                  <Card.Title className="text-primary fs-4 mb-3">Email</Card.Title>
                  <Card.Text className="fs-5">
                    <a
                      href="mailto:sales@diploy.io"
                      className="text-decoration-none text-dark"
                    >
                      sales@diploy.io
                    </a>
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col xs={12} md={5}>
              <Card className="h-100 shadow-sm border-0">
                <Card.Body className="p-4">
                  <Card.Title className="text-primary fs-4 mb-3">Phone</Card.Title>
                  <Card.Text className="fs-5">
                    <a
                      href="tel:+19097189852"
                      className="text-decoration-none text-dark"
                    >
                      +1 (909) 718-9852
                    </a>
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  );
};

export default Home;
