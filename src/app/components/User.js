import React from 'react';
import { Component } from 'react';

export class User extends Component{


    constructor(props){
        super(props);
    }

    onGoHome(){
        this.props.history.push("/");
    }

    render() {
        
        return (
            <div>
                <h3>USER: {this.props.match.params.id} </h3>

                <hr/>

                <button className="btn btn-primary" onClick={this.onGoHome.bind(this)} >Go Home!</button>

            </div>
        );
    }

}