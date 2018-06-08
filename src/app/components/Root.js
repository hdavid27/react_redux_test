import React, { Component } from 'react';
import { Home } from './Home';
import { Header } from './Header';

export class Root extends Component{

    constructor(props){
        super(props);

        this.state = {
            homeLink: "Home",
            homeMounted: true
        }
    }

    onGreet(){
        alert("Hello");
    }

    onChangeLinkName(newName){
        this.setState({
            homeLink: newName
        })
    }

    onChangeHomeMounted() {
        this.setState({
            homeMounted: !this.state.homeMounted
        })
    }

    render() {

        var user = {
            name: "Hugo",
            hobbies: ["Sports", "Reading"] 
        }

        let homeComp = "";

        if(this.state.homeMounted) {
            homeComp = <Home 
                            name={"Hugo David"} 
                            initialAge={27} 
                            user={user} 
                            greetFunc={this.onGreet.bind(this)}
                            changeLink={this.onChangeLinkName.bind(this)}
                            initialLinkName={this.state.homeLink} >
                            <p>Home paragraph</p>
                        </Home>;
        }

        return (
            <div className="container">
                <div className="row">
                    <Header homeLink={this.state.homeLink}></Header>
                </div>
                <div className="row">
                    <div className=" col-xs-10 col-xs-offset-1">
                        {homeComp}
                    </div>
                </div>
                <hr/>
                <div className="row">
                    <div className=" col-xs-10 col-xs-offset-1">
                        <button className="btn btn-danger" onClick={this.onChangeHomeMounted.bind(this)}>(Un)Mount Component</button>
                    </div>
                </div>
                <hr/>
                <div className="row">
                    <div className=" col-xs-10 col-xs-offset-1">
                        {this.props.children}
                    </div>
                </div>
            </div>
        )
    }
}