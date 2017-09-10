import React from 'react';
import ReactDom from 'react-dom';
import 'antd/dist/antd.css';
import './styles/index.less';
import { Button } from 'antd';
import Header from './components/header.jsx';
export default class Index extends React.Component{
  render() {
    return (
      <div>
        <Header />
      </div>
    )
  }
}
ReactDom.render(<Index />, document.querySelector('#app'));
