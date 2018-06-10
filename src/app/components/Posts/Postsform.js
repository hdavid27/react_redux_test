
import React, { Component } from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';

import { createPost } from './../../actions/postActions';

class Postform extends Component {

    constructor(props){
        super(props);

        this.state = {
            title: '',
            body: ''
        }
    }

    onChange(e){
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    onSubmit(e){
        e.preventDefault();

        const post = {
            title : this.state.title,
            body: this.state.body
        }

        this.props.createPost(post);
    }

    render() {
        return (
            <div>
                <h1>Post Form</h1>
                <form onSubmit={this.onSubmit.bind(this)}>
                    <div>
                        <label>Title: </label>
                        <br/>
                        <input type="text" name="title" value={this.state.title} onChange={this.onChange.bind(this)}/>
                    </div>
                    <br/>
                    <div>
                        <label>Body: </label>
                        <br/>
                        <textarea name="body" value={this.state.body} onChange={this.onChange.bind(this)}/>
                    </div>
                    <br/>
                    <button type="submit">Submit</button>
                </form>
            </div>
        )
    }
}

Postform.protoTypes = {
    createPost: PropTypes.func.isRequired
}

export default connect(null, {createPost} )(Postform);