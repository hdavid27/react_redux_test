import React, { Component } from 'react';
import { Router, Switch } from "react-router";
import {BrowserRouter, HashRouter, Route} from "react-router-dom";

import { Root } from './components/Root';
import { Home2 } from './components/Home2';
import { User } from './components/User';



class App extends Component{

    render() {

        return (
            <HashRouter>
                <Switch>
                    <Route path={"/"} component={Root}></Route>
                    <Route path={"/home"} component={Home2}/>
                    <Route path={"/user"} component={User}/>
                </Switch>
            </HashRouter>
        );
    }
}


export default App;