import React from 'react';
import './assets/css/frontpage.css';
import logo from './assets/img/fellowship.svg';

class FrontPage extends React.Component{
    render(){
        return(
            <div className='frontpage' >
                <div className="container">
                <h1><u>Open Sourced<br/>Olaf</u></h1>
                <img src={logo} alt="MLH logo"></img>
                </div>
            </div>
        )
    }
}

export default FrontPage