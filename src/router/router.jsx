import React from 'react';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';
import Home from '../pages/home/index';
import Demo1 from '../pages/demo1/index';

export default class Router extends React.Component{
    render(){
        return (
            <BrowserRouter>
                <ul>
                    <li><Link to='/'>首页</Link></li>
                    <li><Link to='/demo1'>Demo1</Link></li>
                </ul>
    
                <Switch>
                    <Route exact path='/'>
                        <Home />
                    </Route>
                    <Route path='/demo1'>
                        <Demo1 />
                    </Route>
                </Switch>
            </BrowserRouter>
        )
    }
}