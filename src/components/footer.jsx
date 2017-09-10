import React from 'react';
import { Row, Col} from 'antd';

export default class Header extends React.Component{
  constructor() {
    super();
    this.state = {
      current: 'top',
    }
  }
  render() {
    return(
      <footer className="footer">
        <Row className="h-1">
          <Col span={4}></Col>
          <Col span={16} className="h-1 d-faj">&copy;&nbsp; 2017 ReactNews. All Rights Reserved</Col>
          <Col span={4}></Col>
        </Row>
      </footer>
    )
  }
}