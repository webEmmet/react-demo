import React from 'react';
import { Row, Col, Tabs, Carousel} from 'antd';

export default class NewsContainer extends React.Component{
  
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      autoplay: true
    }
    return(
      <div>
        <Row>
          <Col span={4}></Col>
          <Col span={10} className="container">
            <div className="leftContainer">
              <div className="carousel">
                <Carousel {...settings}>
                  <div><img src="./src/images/img1.jpeg" alt=""/></div>
                  <div><img src="./src/images/img2.jpeg" alt=""/></div>
                  <div><img src="./src/images/img3.jpeg" alt=""/></div>
                </Carousel>
              </div>
            </div>
          </Col>
          <Col span={6} className="tabNews"></Col>
          <Col span={4}></Col>
        </Row>
      </div>
    )
  }
}