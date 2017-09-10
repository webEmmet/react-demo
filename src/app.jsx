import React from 'react';
import ReactDom from 'react-dom';
import 'antd/dist/antd.css';
import './styles/index.less';
import Index from './components/index.jsx';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
export default class App extends React.Component{
  render() {
    return (
      <div>
        <BrowserRouter>
          <Switch>
            <Route path="/" component={Index}></Route>
          </Switch>
        </BrowserRouter>
      </div>
    )
  }
}
ReactDom.render(<App />, document.querySelector('#app'));
