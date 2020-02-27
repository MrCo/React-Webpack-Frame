import React,{ Component } from 'react';
import { DatePicker } from 'antd';

import 'antd/dist/antd.less';
import './style.less';

export default class Demo1 extends Component{
    constructor(props){
        super(props);
    }

    render(){
        return (
            <div>
                <div>这是demo1页面</div>
                <DatePicker/>
            </div>
        );
    }
}