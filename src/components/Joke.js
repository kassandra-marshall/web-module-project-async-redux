import React from 'react';
import { connect } from 'react-redux';

import { getJoke } from '../actions';

const Joke = (props) => {
    if (props.error) {
        return <h2>We got an error: {props.error}</h2>
    } if (props.isFetching) {
        return <h2>Fetching Joke for ya!</h2>
    }

    return (
        <>
            <div className='joke-setup'>
                <h2>Setup: {props.joke.setup}</h2>
                <h3>Punchline: {props.joke.punchline}</h3>
                <p>Type: {props.joke.type}</p>
            </div>
            <button onClick={() => props.getJoke()}>Get new Joke</button>
            <div>
                <img src='https://i.scdn.co/image/ab67616d0000b273c900d2a325c725297bd87ff2'/>
            </div>
        </>
    )
}

const mapStateToProps = state => {
    return {
        joke: state.joke,
        isFetching: state.isFetching,
        error: state.error
    }
}

export default connect(mapStateToProps, {getJoke})(Joke);