import React from 'react';
import { Container } from 'react-bootstrap';

const Footer: React.FC = () => {
  return (
    <footer className="bg-dark text-white text-center py-3 mt-5">
      <Container>
        <small>© 2025 Diploy. All rights reserved.</small>
      </Container>
    </footer>
  );
};

export default Footer;