import React,{ Component } from 'react/';
import { DatePicker } from 'antd';
import echarts from 'echarts';

//import '../../../node_modules/antd/dist/antd.less';
import '@antd/antd.less';
import './style';

export default class Demo1 extends Component{
    constructor(props){
        super(props);
    }

    componentWillMount(){

    }

    componentDidMount(){
        // 基于准备好的dom，初始化echarts实例
        var myChart = echarts.init(document.getElementById('echat1'));
        // 绘制图表
        myChart.setOption({
            title: {
                text: 'ECharts 入门示例'
            },
            tooltip: {},
            xAxis: {
                data: ['衬衫', '羊毛衫', '雪纺衫', '裤子', '高跟鞋', '袜子']
            },
            yAxis: {},
            series: [{
                name: '销量',
                type: 'bar',
                data: [5, 20, 36, 10, 10, 20]
            }]
        });
    }

    render(){
        return (
            <div>
                <div>这是demo1页面</div>
                <DatePicker/>

                <div id='echat1' className='box1'></div>
            </div>
        );
    }
}