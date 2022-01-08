import { Alert, Badge, Button, Col, Row, Navbar, Container, Nav, NavDropdown } from "react-bootstrap"
import { Link } from "remix";

export default function Index() {
  return (
    <div className="container-fluid">
      <Row>
        <Col>
          <h1>Welcome to Remix</h1>
          <Alert variant="success">with Bootstrap!</Alert>
        </Col>
        <Col>
          <Navbar bg="light" expand="lg">
            <Container>
              <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                  <Nav.Link href="#home">Home</Nav.Link>
                  
                  <Nav.Link href="link">Nava.Link</Nav.Link>
                  {/* below is the same as above (I think) */}
                  <Link to="link" prefetch="intent" className="nav-link" data-rr-ui-event-key="link">Link</Link>

                  <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                    <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                  </NavDropdown>
                </Nav>
              </Navbar.Collapse>
            </Container>
          </Navbar>
        </Col>
      </Row>
      <Row>
        <ul>
          <li>
            <a
              target="_blank"
              href="https://remix.run/tutorials/blog"
              rel="noreferrer"
            >
              15m Quickstart Blog Tutorial
            </a>
          </li>
          <li>
            <a
              target="_blank"
              href="https://remix.run/tutorials/jokes"
              rel="noreferrer"
            >
              Deep Dive Jokes App Tutorial
            </a>
          </li>
          <li>
            <a target="_blank" href="https://remix.run/docs" rel="noreferrer">
              Remix Docs
            </a>
          </li>
        </ul>
      </Row>
      <Row>
        <Col><Button variant="primary">I'm a Primary Button</Button></Col>
      </Row>


    </div>
  );
}
