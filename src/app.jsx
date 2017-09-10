import React from 'react';
import ReactDom from 'react-dom';
import 'antd/dist/antd.css';
import './styles/index.less';
import { Button } from 'antd';
import Header from './components/header.jsx';
import Footer from './components/footer.jsx';
export default class Index extends React.Component{
  render() {
    return (
      <div>
        <Header />
        <Footer />
      </div>
    )
  }
}
ReactDom.render(<Index />, document.querySelector('#app'));
