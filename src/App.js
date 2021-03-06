import React from 'react';
import { HashRouter as Router, Route, Redirect, Link, Switch } from 'react-router-dom';
import Chapter0 from '@/views/chapter0';
import Chapter1 from '@/views/chapter1';
import Chapter2 from '@/views/chapter2';
import Chapter3 from '@/views/chapter3';
import Chapter4 from '@/views/chapter4';
import Chapter5 from '@/views/chapter5';
import "@/assets/scss/app.scss";
const Navs = [
    {
        label: '首页',
        value: '/chapter0'
    },
    {
        label: '内联框架',
        value: '/chapter1'
    },
];

class App extends React.Component {
    constructor() {
        super();
        this.state = {
            route: '/chapter0'
        }
        this.changeRoute = this.changeRoute.bind(this);
    }

    render() {
        return (
            <Router>
                <div className='root'>
                    <div className='navigator'>
                        <ul>
                            {
                                Navs.map((elem, index) => (
                                    <li key={index}
                                        onClick={() => { this.changeRoute(elem.value) }}
                                        className={this.state.route === elem.value ? 'active' : null}>
                                        <Link to={elem.value}>{elem.label}</Link>
                                    </li>
                                ))
                            }
                        </ul>
                    </div>
                    <div className='content'>
                        <Switch>
                            <Route path="/chapter0">
                                <Chapter0 />
                            </Route>
                            <Route path="/chapter1">
                                <Chapter1 />
                            </Route>
                            <Redirect to="/chapter0"/>
                        </Switch>
                    </div>
                    <div className='foot'></div>
                </div>
            </Router>
        )
    }

    changeRoute(value) {
        this.setState({
            route: value
        });
    }
}

export default App;
