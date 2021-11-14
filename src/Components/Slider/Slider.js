import React from 'react'
import { Carousel} from 'react-bootstrap';
import {useState} from 'react'
import plant_a_tree from './plant_a_tree.jpg'
import './Slider.css'
function ControlledCarousel() {
    const [index, setIndex] = useState(0);
    const handleSelect = (selectedIndex, e) => {
      setIndex(selectedIndex);
    };
  
    return (<div className="c-main">
        <div className="c-heading"><h1>Trending this Week</h1></div>
        <div className="c-slider">
      <Carousel activeIndex={index} onSelect={handleSelect}>
        <Carousel.Item>
         
        <img
            className="slider-img"
            src="https://www.signupgenius.com/cms/images/groups/beach-clean-up-tips-ideas-article-600x400.jpg"
            alt="Third slide"
          />
          <Carousel.Caption>
            <h3>Eco Club North Carolina</h3>
            <p>Massive beach cleanup at north beach carolina, USA</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
        <img
            className="slider-img"
            src={plant_a_tree}
            alt="Third slide"
          />
          <Carousel.Caption>
            <h3></h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
        <img
            className="slider-img"
            src={plant_a_tree}
            alt="Third slide"
          />
        <div className="slider"></div>
          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel></div>  
      </div>
    );
  }
  
//   render(<ControlledCarousel />);
  export default ControlledCarousel;