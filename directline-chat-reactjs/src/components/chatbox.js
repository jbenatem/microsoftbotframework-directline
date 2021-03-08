import React, { Component } from 'react';
import Chatbody from './chatbody';
import Chatheader from './chatheader';

class Chatbox extends Component{
    render(){
        return(
            <div className="chatbox">
                <Chatheader
                    closeChat = {this.props.closeChat}
                    title = {this.props.title}
                    headerColor = {this.props.headerColor}
                />
                <Chatbody
                    secret = {this.props.secret}
                />
            </div>
        );
    }
}
export default Chatbox;