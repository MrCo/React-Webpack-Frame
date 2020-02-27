/**
 * React DOM代码
 * CodeBy:Mr.Co
 * Date:2018/3/13.
 */
import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import { createStore } from 'redux';
import counter from '../../reducers/count';

import './style.less';
//import $ from 'jquery';

import imgBanner from '../../assets/images/banner.jpg';


const store = createStore(counter);

class Counter extends React.Component {
    constructor(props) {
      super(props);
      this.incrementAsync = this.incrementAsync.bind(this);
      this.incrementIfOdd = this.incrementIfOdd.bind(this);
    }
  
    incrementIfOdd() {
      if (this.props.value % 2 !== 0) {
        this.props.onIncrement()
      }
    }
  
    incrementAsync() {
      setTimeout(this.props.onIncrement, 1000)
    }
  
    render() {
      const { value, onIncrement, onDecrement } = this.props
      return (
        <p>
          Clicked: {value} times
          {' '}
          <button onClick={onIncrement}>
            +
          </button>
          {' '}
          <button onClick={onDecrement}>
            -
          </button>
          {' '}
          <button onClick={this.incrementIfOdd}>
            Increment if odd
          </button>
          {' '}
          <button onClick={this.incrementAsync}>
            Increment async
          </button>
        </p>
      )
    }
}
  
Counter.propTypes = {
    value: PropTypes.number.isRequired,
    onIncrement: PropTypes.func.isRequired,
    onDecrement: PropTypes.func.isRequired
}

class Index extends React.Component {

    constructor(props) {
        super(props);
        //console.log($('body').html());
    }

    componentDidMount() {

    }

    componentDidUpdate() {

    }

    render() {
        return (
            <div>
                <h1>Hello Webpack And React</h1>
                <img src={imgBanner}></img>
                <Counter
                value={store.getState()}
                onIncrement={() => store.dispatch({ type: 'INCREMENT' })}
                onDecrement={() => store.dispatch({ type: 'DECREMENT' })}
              />
            </div>
        )
    }
}

const render = () => ReactDOM.render(
    <Index/>,
    document.getElementById('divDom')
)

render();

store.subscribe(render);
