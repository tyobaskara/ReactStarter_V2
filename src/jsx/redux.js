import React from 'react';
import ReactDOM from 'react-dom';
import { Helmet } from 'react-helmet';
import { Navigation } from './component/navigation';

import { createStore } from 'redux';

//https://www.youtube.com/watch?v=ucd5x3Ka3gw Redux Tutorial

//tutorial basic --
//REDUCER
const reducer = function(state, action) {
    if(action.type === "INC") {
        return state+action.payload;
    }
    if(action.type === "DEC") {
        return state-action.payload;
    }
    return state;
}

//STORE
const store = createStore(reducer, 0);

store.subscribe(() => {
    console.log("store changed", store.getState());
});

store.dispatch({type: "INC", payload: 1});
store.dispatch({type: "INC", payload: 2});
store.dispatch({type: "INC", payload: 22});
store.dispatch({type: "DEC", payload: 10});
//--tutorial basic//

class Redux extends React.Component {

    render() {
        return (
            <div>
                <Helmet>
                    <meta name="description" content="Prasetya Aji Baskara who accidently in love with front end technology and decided to explore more with it" />
                    <title>Redux - Prasetya Aji Baskara</title>
                </Helmet>

                <Navigation active="Redux"/>
                
            </div>
        )
    }
};

export default Redux;