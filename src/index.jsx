import React from 'react';
import ReactDom from 'react-dom';
export default class Index extends React.Component{
  render() {
    return (
      <div>
        I Love You
      </div>
    )
  }
}
ReactDom.render(<Index />, document.querySelector('#app'));
