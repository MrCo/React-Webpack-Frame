/**
 * React DOM代码
 * CodeBy:Mr.Co
 * Date:2018/3/13.
 */
import React from 'react';
import ReactDOM from 'react-dom';
import './style.less';
//import $ from 'jquery';

import imgBanner from '../../assets/images/banner.jpg';

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
            </div>
        )
    }
}

ReactDOM.render(
    <Index/>,
    document.getElementById('divDom')
)

