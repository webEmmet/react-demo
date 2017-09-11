import React from 'react';
import { Row, Col, Form, Input, Icon, Button, Card, message, notification } from 'antd';
const FormItem = Form.Item;
class Comments extends React.Component{
  constructor() {
    super();
    this.state = {
      comments: []
    }
  }
  // 加载评论
  componentDidMount() {
    fetch("http://newsapi.gugujiankong.com/Handler.ashx?action=getcomments&uniquekey=" + this.props.uniquekey)
        .then(res=>res.json())
        .then(json=>{
            this.setState({comments: json});
        });
        
  }
  // 提交评论
  handleSubmit(e) {
    e.preventDefault();
    var formData = this.props.form.getFieldsValue();
    
    fetch("http://newsapi.gugujiankong.com/Handler.ashx?action=comment&userid=" + localStorage.userid 
        + "&uniquekey=" + this.props.uniquekey + "&commnet=" + formData.remark)
        .then(response => response.json())
        .then(json => {
        this.componentDidMount();
        message.success('评论成功');
        this.props.form.resetFields();
    })
  }

  // 收藏文章
  addUserCollection() {
    fetch("http://newsapi.gugujiankong.com/Handler.ashx?action=uc&userid=" + localStorage.userid + "&uniquekey=" + this.props.uniquekey)
        .then(response => response.json())
        .then(json => {
			//收藏成功以后进行一下全局的提醒
			notification['success']({message: 'ReactNews提醒', description: '收藏此文章成功'});
		});
  }
  render() {
    const {getFieldDecorator} = this.props.form;
    const {comments} = this.state;
    let commentsList = [];
    if (comments.length > 0) {
      comments.forEach((item, index)=>{
        commentsList.push(
          <Card key={index} title={item.UserName} extra={<a href="#">发布于 {item.datetime}</a>}>
            <p>{item.Comments}</p>
          </Card>)
      })
    }
    return(
      <div className="comment">
        <Row>
          <Col span={24}>
          
            <Form className="login-form" onSubmit={this.handleSubmit.bind(this)}>
              <FormItem label="您的评论">
                {getFieldDecorator('remark', {
                  rules: [{ required: true, message: 'Please input your remark!' }],
                })(
                  <Input prefix={<Icon type="user" style={{ fontSize: 13 }} />} placeholder="请输入您的评论" />
                )}
              </FormItem>
              <Button type="primary" htmlType="submit">提交评论</Button>
              &nbsp;&nbsp;
              <Button type="primary" htmlType="button" onClick={this.addUserCollection.bind(this)}>收藏文章</Button>
            </Form>
            {commentsList}
            
          </Col>
        </Row>
      </div>
    )
  }
}
export default Comments = Form.create()(Comments);