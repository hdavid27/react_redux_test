
import { FETCH_POSTS, NEW_POSTS } from './../actions/types';

const initialState = {
    items: [],
    item: {}
};

export default function(state = initialState, action) {
    switch(action.type){
        case FETCH_POSTS:
            return {
                item: state.item,
                items: action.payload,
            };

        case NEW_POSTS:
            return {
                item: action.payload,
                items: state.items
            };

        default:
            return state;
    }
}
