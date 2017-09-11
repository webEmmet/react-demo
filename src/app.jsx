import React from 'react';
import ReactDom from 'react-dom';
import 'antd/dist/antd.css';
import './styles/index.less';
import Header from './components/header.jsx';
import Footer from './components/footer.jsx';
import Index from './components/index.jsx';
import NewsDetails from './components/details.jsx';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
export default class App extends React.Component{
  render() {
    return (
      <div>
        <Header />
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={Index}></Route>
            <Route path="/details/:uniquekey" component={NewsDetails}></Route>
          </Switch>
        </BrowserRouter>
        <Footer />
        
      </div>
    )
  }
}
ReactDom.render(<App />, document.querySelector('#app'));
