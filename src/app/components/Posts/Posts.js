
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

import { Header } from './../Header';
import PostForm from './Postsform';
import { fetchPosts } from './../../actions/postActions';

class Posts extends Component {

    componentWillMount(){
        this.props.fetchPosts();
    }

    componentWillReceiveProps(nextProps){
        if(nextProps.newPost){
            this.props.posts.unshift(nextProps.newPost);
        }
    }

    render() {

        console.log('PROPS', this.props);
        
        const postItems = this.props.posts.map(post =>(
            <div key={post.id}>
                <h3>{post.title}</h3>
                <p>{post.body}</p>
            </div>
        ));

        return (
            <div className="container">
                <div className="row">
                    <Header></Header>
                </div>
                <div className="row">
                    <div className=" col-xs-10 col-xs-offset-1">
                        <PostForm></PostForm>
                        <h1>Posts</h1>
                        {postItems}
                    </div>
                </div>
            </div>
        )
    }
}

Posts.protoTypes = {
    fetchPosts: PropTypes.func.isRequired,
    posts: PropTypes.array.isRequired,
    newPost: PropTypes.object
}

const mapStateToProps = function(state){
    console.log('STATE', state);
    return {
        posts: state.posts.items,
        newPost: state.posts.item
    }
}

export default connect(mapStateToProps, {fetchPosts} )(Posts);