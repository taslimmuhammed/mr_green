import React from 'react';
import './home.css'
import { Container, Col, Row, Button} from 'react-bootstrap';
import plant from './planting.png'
import Home2 from "../Home2/Home2"
import { useHistory } from 'react-router';
import ControlledCarousel from '../Slider/Slider';
import Footer from '../Footer/Footer'
import NavBar from '../NavBar/NavBar';

function Home() {
  const history = useHistory();
    return (<div className="m1">
      <NavBar/>
          <div className="main"> 

             <Container fluid className="home-section" id="home">
        <Container className="home-content">
          <Row>
            <Col md={7} className="home-header" >
              <h1 style={{ paddingBottom: 15 }} className="heading">
                Hi There! <span className="wave" role="img" aria-labellefirebasey="wave">👋🏻</span>
              </h1>

              <h1 className="heading-name">
                welcome to 
                <strong className="main-name"> MR.Green</strong>
              </h1>

              <div style={{ textAlign: "left" }} className="Welcome">
              Join Mr.green platform today and to showcase your contributions towards nature and get recognised for your works.
              </div><div style={{height:10}}/>
            <Button variant="light" onClick={()=>history.push("/signup")}> SignUp </Button><span> </span>
             <Button variant="outline-light" onClick={()=>history.push("/login")}> LogIn </Button>
            </Col>

            <Col md={5} style={{ paddingBottom: 20 }}>
              <img src={plant} alt="home pic" className="img-fluid" />
          
            </Col>
          </Row>
        </Container>
      </Container>  
     </div> <Home2/><div className="carousel"><ControlledCarousel/></div>
    <Footer></Footer>
    </div>
    
    )
}

export default Home;

