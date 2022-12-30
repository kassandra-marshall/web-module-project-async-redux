import { GET_JOKE, GET_JOKE_FAILURE, GET_JOKE_SUCCESS, SET_IS_FETCHING } from "../actions";

const initialState = {
   joke: {type: "programming", setup: "Where do programmers like to hangout?", punchline: "The Foo Bar"},
   isFetching: false,
   error: ""
}

export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_IS_FETCHING:
            return {...state, isFetching: action.payload}
        case GET_JOKE_SUCCESS:
            return {...state, isFetching: false, joke: action.payload}
        case GET_JOKE_FAILURE:
            return {...state, isFetching: false, error: action.payload}
        default:
            return state
    }  
}

