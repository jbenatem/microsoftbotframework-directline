import React, { Component } from 'react';
import Chatbody from './chatbody';
import Chatheader from './chatheader';

class Chatbox extends Component{
    render(){
        return(
            <div className="chatbox">
                <Chatheader/>
                <Chatbody/>
            </div>
        );
    }
}
export default Chatbox;