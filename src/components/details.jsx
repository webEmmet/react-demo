import React from 'react';
import { Row, Col } from 'antd';
import Header from './header.jsx';
import Footer from './footer.jsx';
import Comments from './comment.jsx';
export default class NewsDetails extends React.Component{
  constructor() {
    super();
    this.state = {
      newsItem: ''
    }
  }
  
  componentDidMount() {
    // console.log(this.props.match.params.uniquekey)
    fetch("http://newsapi.gugujiankong.com/Handler.ashx?action=getnewsitem&uniquekey=" + this.props.match.params.uniquekey)
    .then(res=>res.json())
    .then(json=>{
        this.setState({newsItem: json});
        document.title = this.state.newsItem.title + '- React News | React 驱动的新闻平台';
    });
  }
  
  createMarkup() {
    return {__html: this.state.newsItem.pagecontent}
  }
  render() {
    return(
      <div>
        <Header/>
        <div className="newsBox">
          <Row>
            <Col span={4}></Col>
            <Col span={16} className="container">
              <div dangerouslySetInnerHTML={this.createMarkup()} className="articleContainer">
              </div>
              <Comments uniquekey={this.props.match.params.uniquekey}/>
            </Col>
            <Col span={4}></Col>
          </Row>
        </div>
        <Footer/>
      </div>
    )
  }
}