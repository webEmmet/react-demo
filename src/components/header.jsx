import React from 'react';
import { Row, Col, Menu, Icon } from 'antd';
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;

export default class Header extends React.Component{
  constructor() {
    super();
    this.state = {
      current: 'top',
    }
  }
  
  render() {
    return(
      <header className="header-box">
        <Row className="h-1 header">
          <Col span={4}></Col>
          <Col span={6} className="the-logo-box h-1 d-fa">
            <a href="" className="logo d-b">
              <img src="./src/images/logo.png" alt="" />
            </a>
          </Col>
          <Col span={8} className="header-text h-1 d-fa">React-news-demo</Col>
          <Col span={4}></Col>
        </Row>
        {/*导航条*/}
        <Row className="the-nav">
          <Col span={4}></Col>
          <Col span={16} className="header-text h-1">
          <Menu 
            mode="horizontal" 
            className="nav-bar h-1 w-1"
            selectedKeys={[this.state.current]}>
            <Menu.Item key="top">
              <Icon type="appstore" />头条
            </Menu.Item>
            <Menu.Item key="shehui">
              <Icon type="appstore" />社会
            </Menu.Item>
            <Menu.Item key="guonei">
              <Icon type="appstore" />国内
            </Menu.Item>
            <Menu.Item key="guoji">
              <Icon type="appstore" />国际
            </Menu.Item>
            <Menu.Item key="yule">
              <Icon type="appstore" />娱乐
            </Menu.Item>
            <Menu.Item key="tiyu">
              <Icon type="appstore" />体育
            </Menu.Item>
            <Menu.Item key="shishang">
              <Icon type="appstore" />时尚
            </Menu.Item>
          </Menu>
          </Col>
          <Col span={4}></Col>
        </Row>
      </header>
    )
  }
}