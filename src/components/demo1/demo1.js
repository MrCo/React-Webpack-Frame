import React, { PureComponent,Component } from 'react';
import ReactDOM from 'react-dom';

const button = (props) => {
    return <Button>Click Me</Button>
}

class IndexPage extends Component{
  constructor() {
    super();
    this.state = {
      isShow: false
    };
    console.log('constructor');
  };

  changeState = () => {
    this.setState({
      isShow: true
    })
  };

//   shouldComponentUpdate(nextProps,nextState){
//       console.log(nextState);
//     return nextState.isShow !== this.state.isShow;
//   }

  render() {
    console.log('render');
    return (
      <div>
        <button onClick={this.changeState}>点击</button>
        <div>{this.state.isShow.toString()}</div>
      </div>
    );
  }
}


ReactDOM.render(
    <IndexPage/>,
    document.getElementById('divDom')
);