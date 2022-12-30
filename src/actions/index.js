import axios from 'axios';

export const GET_JOKE = "GET_JOKE"
export const GET_JOKE_SUCCESS = "GET_JOKE_SUCCESS"
export const GET_JOKE_FAILURE = "GET_JOKE_FAILURE"
export const SET_IS_FETCHING = "SET_IS_FETCHING"

export const getJoke = () => dispatch => {
    dispatch(setIsFetching(true))
    axios.get('https://official-joke-api.appspot.com/random_joke')
    .then(res => {
        const joke = res.data
        console.log(res)
        dispatch(getJokeSuccess(joke))
    }, (error) => {
        const message = error.message
        dispatch(getJokeFailure(message))
        // res.status
        // res.statusText
    })
    .catch(err => console.log(err))
}

const setIsFetching = (isFetching) => {
    return {type: SET_IS_FETCHING, payload: isFetching}
}

const getJokeSuccess = (joke) => {
    return {type: GET_JOKE_SUCCESS, payload: joke}
}

const getJokeFailure = (message) => {
    return {type: GET_JOKE_FAILURE, payload: message}
}