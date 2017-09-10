import React from 'react';
import ReactDom from 'react-dom';
import 'antd/dist/antd.css';
import './styles/index.less';
import Index from './components/index.jsx';
import NewsContainer from './components/newsContainer.jsx';
export default class App extends React.Component{
  render() {
    return (
      <div>
        <Index/>
      </div>
    )
  }
}
ReactDom.render(<App />, document.querySelector('#app'));
