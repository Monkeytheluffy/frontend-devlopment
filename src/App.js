import React, { useState, useEffect } from 'react';
import { Navbar, Nav, Button, Container, Row, Col } from 'react-bootstrap';
import './App.css';

function App() {
  const [isCollapsed, setIsCollapsed] = useState(true);

  const handleToggle = () => {
    setIsCollapsed(!isCollapsed);
  };

  const getPageWidth = () => {
    const width = window.innerWidth;
    let scale = 1;

    if (width >= 992 && width <= 1600) {
      scale = 0.9;
    } else if (width >= 700 && width <= 767) {
      scale = 0.8;
    } else if (width >= 600 && width <= 700) {
      scale = 0.75;
    } else if (width <= 600) {
      scale = 0.5;
    }

    return scale;
  };

  useEffect(() => {
    const updatePageScale = () => {
      document.body.style.transform = `scale(${getPageWidth()})`;
      document.body.style.transformOrigin = 'top left';
    };

    window.addEventListener('resize', updatePageScale);
    updatePageScale();

    return () => {
      window.removeEventListener('resize', updatePageScale);
    };
  }, []);

  return (
    <div className="wrapper">
      <Navbar bg="dark" variant="dark" fixed="top">
        <Navbar.Brand href="#home">Responsive Webpage</Navbar.Brand>
        <Nav className="ml-auto">
          <Button variant="outline-light" onClick={handleToggle}>
            {isCollapsed ? 'Expand Menu' : 'Collapse Menu'}
          </Button>
        </Nav>
      </Navbar>

      <Container fluid style={{ marginTop: '60px' }}>
        <Row>
          <Col
            xs={12}
            sm={4}
            md={3}
            lg={2}
            className={`left-menu bg-light p-3 ${isCollapsed ? 'd-none' : ''}`}
          >
            <ul>
              <li>Menu Item 1</li>
              <li>Menu Item 2</li>
              <li>Menu Item 3</li>
            </ul>
          </Col>

          <Col xs={12} sm={8} md={6} lg={7} className="main-content p-3">
            <h1>Main Content Area</h1>
            <p>
              This is the main content area where you can add text, images, or other elements.
            </p>
          </Col>

          <Col xs={12} sm={12} md={3} lg={3} className="right-panel bg-light p-3">
            <h3>Right Side Panel</h3>
            <p>You can add advertisements, links, or other content here.</p>
          </Col>
        </Row>
      </Container>

      <footer className="footer bg-dark text-white text-center p-3">
        <p>Footer Content &copy; 2025</p>
      </footer>
    </div>
  );
}

export default App;
