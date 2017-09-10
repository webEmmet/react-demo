import React from 'react';
import { Card } from 'antd';
import { Link } from 'react-router-dom';
export default class NewsBlock extends React.Component{
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
              {newsItem.title}
            </Link>
          </li>)
      })
    }
    

    return(
      <div className="topNewsList">
        <Card>
          <ul>
            {newsList}
          </ul>
        </Card>
      </div>
    )
  }
}