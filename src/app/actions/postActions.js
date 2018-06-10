import { FETCH_POSTS, NEW_POSTS } from './types';

export function fetchPosts(){
    console.log('fetching posts');
    return function(dispatch){
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res => res.json())
        .then(posts => dispatch({
            type: FETCH_POSTS,
            payload: posts
        }));
    }
}

export function createPost(postData){
    console.log('creating post', postData);
    return function(dispatch){
        fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'POST',
            headers: {
                'content-type': 'aplication/json'
            },
            body: JSON.stringify(postData)
        })
        .then(res => res.json())
        .then(data => dispatch({
            type: NEW_POSTS,
            payload: data
        }))
    }
}