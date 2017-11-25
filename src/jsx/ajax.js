import React from 'react';
import ReactDOM from 'react-dom';
import { Helmet } from 'react-helmet';
import { Navigation } from './component/navigation';
import {Title, SubTitle} from './home';

const fetchComments = () => {
    let url = 'https://jsonplaceholder.typicode.com/posts/1/comments';
    let toAppend = document.getElementsByClassName('list-ajax')[0];

    fetch(url).then(response => {
        if (response.ok) {
            return response.json();
        }
        throw new Error('Request failed!');
    }, networkError => {
        toAppend.innerHTML = networkError.message;
        console.log(networkError.message)
    }
    ).then(jsonResponse => {
        toAppend.innerHTML = '';
        for(let i=0;i<jsonResponse.length;i++){
            var markup = `
                <div>name: ${jsonResponse[i].name}</div>
                <div>email: ${jsonResponse[i].email}</div>
                <div>comment: ${jsonResponse[i].body.replace(/\n/g, ' ')}</div>`;
            var node = document.createElement('li');
            node.innerHTML = markup;

            toAppend.append(node);
        }
    });
}

class Ajax extends React.Component {
    render() {

        return (
            <div>
                <Helmet>
                    <meta name="description" content="Prasetya Aji Baskara who accidently in love with front end technology and decided to explore more with it" />
                    <title>Ajax - Prasetya Aji Baskara</title>
                </Helmet>

                <Navigation active="Ajax"/>

                <div className="container-fluid wrapper-outside">
                    <div className="container">
                        <h1>This is Ajax..</h1>
                        <ul className="list-ajax">Loading...</ul>
                    </div>
                </div>
            </div>
        )
    }

    componentDidMount(){
        setTimeout(function(){
            fetchComments();
        },500);
    }
};

export default Ajax;