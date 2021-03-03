import React, { Component } from 'react';
import Chatbutton from './chatbutton';
import Chatbody from './chatbody';
import Chatheader from './chatheader';

class Webchat extends Component{
    render(){
        return(
            <div className="webchat">
                <Chatheader/>
                <Chatbody/>
            </div>
        );
    }
}
export default Webchat;