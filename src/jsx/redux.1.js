import React from 'react';
import ReactDOM from 'react-dom';
import { Helmet } from 'react-helmet';
import { Navigation } from './component/navigation';

import { createStore } from 'redux';

//https://www.youtube.com/watch?v=ucd5x3Ka3gw Redux Tutorial

//tutorial basic --
//REDUCER
const reducer = function(state, action) {
    switch (action.type) {
        case "INC":
            return state + action.payload;
        case "DEC":
            return state - action.payload;
        default:
            return state;
    }
};

//STORE 
//Connect to browser dev tool add this > window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
const store = createStore(reducer, 0, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

store.subscribe(() => {
    console.log("store changed", store.getState());
});

store.dispatch({type: "INC", payload: 1});
store.dispatch({type: "INC", payload: 2});
store.dispatch({type: "INC", payload: 22});
store.dispatch({type: "DEC", payload: 10});

console.log('store = ' + store.getState());
//--tutorial basic//

class Redux extends React.Component {
    constructor(props) {
        super(props);
    }

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