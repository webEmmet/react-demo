import React from 'react';
import NewsBlock from './newsBlock.jsx';
import NewsImgBlock from './newsImgBlock.jsx';
import { Row, Col, Tabs, Carousel} from 'antd';
const TabPane = Tabs.TabPane;

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
          <Col span={11} className="container">
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
          <Col span={5} className="tabNews">
            <Tabs defaultActiveKey="1" >
              <TabPane tab="新闻" key="1">
                <NewsBlock count={15} type="top" width="100%" bordered="false" />
              </TabPane>
              <TabPane tab="国际" key="2">
                <NewsBlock count={15} type="guoji" width="100%" bordered="false"/>
              </TabPane>
              <TabPane tab="娱乐" key="3">
                <NewsBlock count={15} type="yule" width="100%" bordered="false"/>
              </TabPane>
            </Tabs>
          </Col>
          <Col span={4}></Col>
        </Row>
        <Row>
          <Col span={4}></Col>
          <Col span={16} className="imageNews">
            <NewsImgBlock count={6} type="guoji" width="100%" carTitle="国际头条"/>  
          </Col>
          <Col span={4}></Col>
        </Row>
      </div>
    )
  }
}