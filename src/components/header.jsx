import React from 'react';
import ReactDOM from 'react-dom';
import { Row, Col, Menu, Icon, Modal, Button, Form, Input, message, Tabs } from 'antd';
import { Link } from 'react-router-dom';
const TabPane = Tabs.TabPane;
const SubMenu = Menu.SubMenu;
const FormItem = Form.Item;
const MenuItemGroup = Menu.ItemGroup;

class Header extends React.Component{
  constructor() {
    super();
    this.state = {
      current: 'top',
      hasLogined: false,
      visible: false,
      action: 'login',
      userNickName: '',
      userid: ''
    }
  }
  componentWillMount() {
    if (localStorage.userid) {
        this.setState({hasLogined: true, userNickName: localStorage.userNickName, userid: localStorage.userid});
    }
  }
  // 设置modal显示
  setModalVisible (value) {
    this.setState({
      visible: value,
    });
    this.clearFormData();
  }
  // 提交数据
  handleSubmit(e) {
    e.preventDefault();
    var formData = this.props.form.getFieldsValue();
    fetch("http://newsapi.gugujiankong.com/Handler.ashx?action=" + this.state.action
        +"&userName=" + formData.userName + "&password=" + formData.password
        +"&r_userName=" + formData.r_userName + "&r_password="
        + formData.r_password + "&r_confirmPassword="
        + formData.r_confirmPassword)
        .then(response => response.json())
        .then(json => {
            this.setState({userNickName: json.NickUserName, userid: json.UserId});
            localStorage.userid= json.UserId;
            localStorage.userNickName = json.NickUserName;
        });
    if (this.state.action === 'login') {
        this.setState({hasLogined: true});
    }
    message.success('请求成功');
    this.clearFormData();
    this.setModalVisible(false);
  }
  // 清空数据
  clearFormData() {
    this.props.form.resetFields();
  }
  //  退出
  logOut() {
    this.setState({hasLogined: false});
    localStorage.removeItem('userNickName');
    localStorage.removeItem('userid');
  }
  // 改变标签栏选中状态
  changeTab(key) {
    this.setState({
      action: key
    });
  }
  render() {
    const { getFieldDecorator } = this.props.form;
    const userShow = this.state.hasLogined 
    ?
    <div className="btnBox">
      <Button type='primary' htmlType='button'>{this.state.userNickName}</Button>
      &nbsp;&nbsp;
      <Link target="_blank" to={`/userCenter`}>
          <Button type='dashed' htmlType='button'>个人中心</Button>
      </Link>
      &nbsp;&nbsp;
      <Button type='warning' htmlType='button' onClick={this.logOut.bind(this)}>退出</Button>
    </div>
    :
    <div className="btnBox">
      <Button type="primary" onClick={()=> {this.setModalVisible(true)}}>登录/注册</Button>
    </div>;

    return(
      <header className="header-box">
        <Row className="h-1 header">
          <Col span={4}></Col>
          <Col span={6} className="the-logo-box h-1 d-fa">
            <a href="" className="logo d-b">
              <img src="/src/images/logo.png" alt="" />
            </a>
          </Col>
          <Col span={8} className="header-text h-1 d-fa">React-news-demo
            {userShow}
          </Col>
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
        <Modal
          visible={this.state.visible}
          onOk={this.handleSubmit.bind(this)}
          onCancel={()=>{this.setModalVisible(false)}}
        >
          <Tabs defaultActiveKey="login" onChange={this.changeTab.bind(this)}>
            <TabPane tab="登录" key="login">
              <Form className="login-form">
                <FormItem>
                  {getFieldDecorator('userName', {
                    rules: [{ required: true, message: 'Please input your username!' }],
                  })(
                    <Input prefix={<Icon type="user" style={{ fontSize: 13 }} />} placeholder="Username" />
                  )}
                </FormItem>
                <FormItem>
                  {getFieldDecorator('password', {
                    rules: [{ required: true, message: 'Please input your Password!' }],
                  })(
                    <Input prefix={<Icon type="lock" style={{ fontSize: 13 }} />} type="password" placeholder="Password" />
                  )}
                </FormItem>
              </Form>
            </TabPane>
            <TabPane tab="注册" key="register">
              <Form className="login-form">
                <FormItem>
                {getFieldDecorator('r_userName', {
                    rules: [{ required: true, message: 'Please input your username!' }],
                })(
                    <Input prefix={<Icon type="user" style={{ fontSize: 13 }} />} placeholder="Username" />
                )}
                </FormItem>
                <FormItem>
                {getFieldDecorator('r_password', {
                    rules: [{ required: true, message: 'Please input your Password!' }],
                })(
                    <Input prefix={<Icon type="lock" style={{ fontSize: 13 }} />} type="password" placeholder="Password" />
                )}
                </FormItem>
                <FormItem>
                {getFieldDecorator('r_confirmPassword', {
                    rules: [{ required: true, message: 'Please repeat input your Password!' }],
                })(
                    <Input prefix={<Icon type="lock" style={{ fontSize: 13 }} />} type="password" placeholder="Confirm Password" />
                )}
                </FormItem>
              </Form>
            </TabPane>
          </Tabs>
        </Modal>
      </header>
    )
  }
}

export default Header = Form.create()(Header);