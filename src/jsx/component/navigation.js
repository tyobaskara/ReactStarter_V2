import React from 'react';
import ReactDOM from 'react-dom';
import { NavLink } from 'react-router-dom';

export class Navigation extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            NavList: ['Home', 'About', 'Ajax']
        }
    }

    render(){
        let NavList = this.state.NavList;
        NavList = NavList.map( (item,index) => {
            return (
                <li key={index}>
                    <NavLink
                        to={index == 0 ? '/' : '/'+item }
                        id={item}
                        activeClassName= ''
                    >{item}</NavLink>
                </li>
            );
        });

        return (
            <nav>
                <div className="container">
                    <ul className="navMenu">
                        {NavList}
                    </ul>
                </div>
            </nav>
        );
    }

    componentDidMount() {
        document.getElementById(this.props.active).setAttribute('class', 'active');
    }
};