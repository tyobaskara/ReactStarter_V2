import React from 'react';
import ReactDOM from 'react-dom';
import { Helmet } from 'react-helmet';
import { Navigation } from './component/navigation';
import {Title, SubTitle} from './home';

class Ajax extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            posts: []
        }
    }
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
                        <ul className="list-ajax">
                            <li>Loading...</li>
                            {
                                this.state.posts.map(post =>
                                <li key={post.id}>
                                    <div>name: {post.name}</div>
                                    <div>email: {post.email}</div>
                                    <div>comment: {post.body.replace(/\n/g, ' ')}</div>
                                </li>
                            )}
                        </ul>
                    </div>
                </div>
            </div>
        )
    }

    componentDidMount(){
        const _this = this;
        const url = 'https://jsonplaceholder.typicode.com/posts/1/comments';
    
        fetch(url).then(response => {
            if (response.ok) {
                return response.json();
            }
            throw new Error('Request failed!');
        }, networkError => {
            toAppend.innerHTML = networkError.message;
            console.log(networkError.message);
        }
        ).then(jsonResponse => {
            setTimeout(function(){
                const block = document.getElementsByClassName('list-ajax')[0];
                const list = block.getElementsByTagName('li');
                block.removeChild(list[0]);

                const posts = jsonResponse;
                _this.setState({posts}, function () {
                    //console.log(_this.state.posts);
                });
            },1000)
        });
    }
};

export default Ajax;