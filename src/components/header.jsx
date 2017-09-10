import React from 'react';
import { Row, Col } from 'antd';
export default class Header extends React.Component{
  render() {
    return(
      <header className="header">
        <Row>
          <Col span={4}></Col>
          <Col span={8}>
            <a href="" className="logo">
              <img src="./src/images/logo.png" alt="" />
            </a>
          </Col>
          <Col span={8}>col-12</Col>
          <Col span={4}></Col>
        </Row>
      </header>
    )
  }
}