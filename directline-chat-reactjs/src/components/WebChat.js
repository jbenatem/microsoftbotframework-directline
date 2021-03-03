import React, { Component } from 'react';
import Chatbutton from './chatbutton';
import Chatbox from './chatbox';

class Webchat extends Component{
    render(){
        return(
            <div className="webchat">
                <Chatbox/>
                <Chatbutton/>
            </div>
        );
    }
}
export default Webchat;