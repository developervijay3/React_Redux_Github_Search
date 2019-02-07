import { SET_REPOS } from '../actions/gitAction';

const initialState = {
    data: [],
};

export default function(state= initialState, action){
    switch(action.type){
        case SET_REPOS:
            return {...state, data: action.payload };
        default:
            return state;
    }
}

