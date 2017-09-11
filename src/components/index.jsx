import React from 'react';
import Header from './header.jsx';
import Footer from './footer.jsx';
import NewsContainer from './newsContainer.jsx';
export default class Index extends React.Component{
  
  render() {
    return(
      <div>
        <Header />
        <NewsContainer/>
        <Footer />
      </div>
    )
  }
}