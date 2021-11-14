import React from 'react'
import { Container,Col, Row, Button, Card} from 'react-bootstrap';
import car from "./car.jpeg" 
import clean from './clean.jpeg'
import plant_a_tree from './plant_a_tree.jpg'
import water from './water.jpg'
import env from './env.jpeg'
import './Home2.css'
function Home2() {
    return (
        <div className="conatin">
          <h1>What Can You Do to Get Points?</h1>
 <Row className="car ds">
    {/* <Col lg={4} md={6}>
    <Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src="holder.js/100px180" />
  <Card.Body>
    <Card.Title>Card Title</Card.Title>
    <Card.Text>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text>
  </Card.Body>
</Card>
    </Col> */}
    <Col lg={6} md={6} xs={12}>
    <div className="card-main">
      <div className="card">
        <img src={plant_a_tree} className="card-img"></img>
        <div className="card-heading">Plant a tree</div>
        <div className="card-text">"One touch of nature makes the whole world kin."</div>
      </div>
    </div>
    </Col>
    <Col lg={6} md={6} xs={12}>
    <div className="card-main">
      <div className="card">
        <img src={water} className="card-img"></img>
        <div className="card-heading">Plant a tree</div>
        <div className="card-text">"One touch of nature makes the whole world kin."</div>
      </div>
    </div></Col>
    <Col lg={6} md={6} xs={12}>
    <div className="card-main">
      <div className="card">
        <img src={clean} className="card-img"></img>
        <div className="card-heading">Conserve Water</div>
        <div className="card-text">Save water by creating a permenant method like starting tanks.</div>
      </div>
    </div>
    </Col>
    <Col lg={6} md={6} xs={12}>
    <div className="card-main">
      <div className="card">
        <img src={car} className="card-img"></img>
        <div className="card-heading">Upgarade to an electric vehicle</div>
        <div className="card-text">A typical passenger vehicle emits about 4.6 metric tons of carbon dioxide per year</div>
      </div>
    </div>
    </Col>
    <Col lg={6} md={6} xs={12}>
    <div className="card-main">
      <div className="card">
        <img src={env} className="card-img"></img>
        <div className="card-heading"></div>
        <div className="card-text">"Do anything towards conserving you nature"</div>
      </div>
    </div>
    </Col>
    {/* <Col lg={6} md={6} xs={12}>
    <div className="card-main">
      <div className="card">
        <img src={plant_a_tree} className="card-img"></img>
        <div className="card-heading">Plant a tree</div>
        <div className="card-text">"One touch of nature makes the whole world kin."</div>
      </div>
    </div>
    </Col> */}
</Row>
        </div>
    )
}

export default Home2
