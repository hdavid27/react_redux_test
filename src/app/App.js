import React, { Component } from 'react';
import { Router, Switch } from "react-router";
import {BrowserRouter, HashRouter, Route} from "react-router-dom";
import {Provider} from 'react-redux';

import { Root } from './components/Root';
import { Home2 } from './components/Home2';
import { User } from './components/User';
import Posts from './components/Posts/Posts';

import appStore from './store'

class App extends Component{

    render() {

        return (
            <Provider store={appStore}>
                <HashRouter>
                    <Switch>
                        <Route exact path={"/"} component={Root}></Route>
                        <Route path={"/home"} component={Home2}/>
                        <Route path={"/user/:id"} component={User}/>
                        <Route path={"/posts"} component={Posts}></Route>
                    </Switch>
                </HashRouter>
            </Provider>
        );
    }
}


export default App;