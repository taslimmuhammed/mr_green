import React from 'react';
import { Container,Col, Row, Button, Card} from 'react-bootstrap';
import './Footer.css';

function Footer() {
  return (
    <div className="footerParentDiv">
     <div className="footer-text">
    <Row><Col xs={3} md={2} lg={1}><div className="f-text"></div></Col>
      <Col xs={3} md={2} lg={1}><div className="f-text"></div></Col>
      <Col xs={3} md={2} lg={1}><div className="f-text"></div></Col>
      <Col xs={3} md={2} lg={1}><div className="f-text"></div></Col>
      <Col xs={3} md={2} lg={1}><div className="f-text">About</div></Col>
      <Col xs={3} md={2} lg={1}><div className="f-text">Support</div></Col>
      <Col xs={3} md={2} lg={1}><div className="f-text">Privacy</div></Col>
      <Col xs={3} md={2} lg={1}><div className="f-text">Terms</div></Col>
      <Col xs={3} md={2} lg={1}><div className="f-text"></div></Col>
      <Col xs={3} md={2} lg={1}><div className="f-text"></div></Col>
      <Col xs={3} md={2} lg={1}><div className="f-text"></div></Col>
      <Col xs={3} md={2} lg={1}><div className="f-text"></div></Col>
    </Row>
    <div className="f-seperator"></div>
    <div className="f-sub-main"><div className="f-sub">© 2021 Mr.Green</div></div>
     </div>
    </div>
  );
}

export default Footer;
