import React from 'react';
import { Card } from 'antd';
import { Link } from 'react-router-dom';
export default class NewsImgBlock extends React.Component{
  constructor() {
    super();
    this.state = {
      news: ''
    };
  }

  componentWillMount() {
    fetch("http://newsapi.gugujiankong.com/Handler.ashx?action=getnews&type="+this.props.type+"&count="+this.props.count)
        .then(res => res.json())
        .then(json => {
            this.setState({news: json});
        });
  };

  render() {
    const news = this.state.news;
    let newsList = [];
    if (news.length > 0) {
      news.forEach((newsItem, index)=>{
        newsList.push(
          <li key={index}>
            <Link to={`details/${newsItem.uniquekey}`} target="_blank">
              <figure className="custom-image">
                <img src={newsItem.thumbnail_pic_s} alt=""/>
                <figcaption>
                  <h3>{newsItem.title}</h3>
                  <p>{newsItem.author_name}</p>
                </figcaption>
              </figure>
              
            </Link>
          </li>)
      })
    }
    return(
      <div className="topNewsList">
        <Card title={this.props.cartTitle} bordered={true} style={{width: this.props.width}}>
          {newsList}
        </Card>
      </div>
    )
  }
}