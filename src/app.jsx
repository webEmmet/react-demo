import React from 'react';
import ReactDom from 'react-dom';
import 'antd/dist/antd.css';
import './styles/index.less';
import UserCenter from './components/userCenter.jsx';
import Index from './components/index.jsx';
import NewsDetails from './components/details.jsx';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
export default class App extends React.Component{
  render() {
    return (
      <div>
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={Index}></Route>
            <Route path="/details/:uniquekey" component={NewsDetails}></Route>
            <Route path="/usercenter" component={UserCenter}></Route>
          </Switch>
        </BrowserRouter>
        
      </div>
    )
  }
}
ReactDom.render(<App />, document.querySelector('#app'));
