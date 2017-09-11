import React from 'react';
import Header from './header.jsx';
import Footer from './footer.jsx';
import {Row, Col, Tabs, Upload, Modal, Card} from 'antd';
const TabPane = Tabs.TabPane;

export default class UserCenter extends React.Component{
  constructor() {
    super();
    this.state = {
      userCollection: '',
      userComments: '',
      loadedCollection: false
    }
  }

  componentDidMount() {
    fetch("http://newsapi.gugujiankong.com/Handler.ashx?action=getuc&userid=" + localStorage.userid)
		.then(response=>response.json())
		.then(json=>{
      this.setState({userCollection: json});
    });
  }

  changeTab(key) {
    if (key == 2) {
      fetch("http://newsapi.gugujiankong.com/Handler.ashx?action=getusercomments&userid=" + localStorage.userid)
      .then(response=>response.json())
      .then(json=>{
        this.setState({userComments:json});
      });
    }
    else {
      if (this.userCollection) {
        return;
      }
      this.componentDidMount();
    }
  }

  render() {
    const { userCollection } = this.state;
    // 收藏列表的设置
    let usercollectionList = [];
    if (userCollection.length > 0 ) {
      userCollection.forEach((item, index)=>{
        usercollectionList.push(
          <Card key={index} title={item.uniquekey} extra={<a href={`/details/${item.uniquekey}`}>查看</a>}>
              <p>{item.Title}</p>
          </Card>
        )
      });
      
    } else {
      usercollectionList = '您没有收藏文章';
    }
    // 评论列表的设置
    const { userComments } = this.state;
    let usercommentsList = [];
        if (userComments.length > 0) {
          userComments.forEach((item, index)=>{
                usercommentsList.push(
                    <Card key={index} title={`您与${item.datetime}评论了文章`} extra={<a href={`/#/details/${item.uniquekey}`}>查看</a>}>
                        <p>{item.Comments}</p>
                    </Card>
                )
            });
        }

    return(
      <div>
        <Header/>
        <Row>
          <Col span={4}></Col>
          <Col span={16}>
            <Tabs onChange={this.changeTab.bind(this)}>
            <TabPane tab="我的收藏列表" key="1">
              {usercollectionList}
            </TabPane>
            <TabPane tab="我的评论列表" key="2">
              {usercommentsList}
            </TabPane>
          </Tabs>
          </Col>
          <Col span={4}></Col>
        </Row>
        
        <Footer/>
      </div>
      
    )
  }
}