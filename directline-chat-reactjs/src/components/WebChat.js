import React, { Component } from 'react';
import Chatbutton from './chatbutton';
import Chatbox from './chatbox';

class Webchat extends Component{
    state = {
        show : false,
        title : "React Webchat Sample",
        secret : "",
        imageUrl : "https://i.pinimg.com/originals/c8/c0/1d/c8c01d94b7ffe4073ae847acdca693de.png",
        buttonColor : "#FF0000",
        headerColor : "#FF0000"
    }
    
    openChat = () => {
        let show = this.state.show;
        show = true;
        this.setState({show});
    }

    closeChat = () => {
        let show = this.state.show;
        show = false;
        this.setState({show});
    }
    
    render(){
        return(
            <div className="webchat">
                {
                    this.state.show?
                        <Chatbox 
                            closeChat = {this.closeChat}
                            title = {this.state.title}
                            secret = {this.state.secret}
                            headerColor = {this.state.headerColor}
                        />
                    :null
                }
                {
                    !this.state.show?
                        <Chatbutton 
                            openChat = {this.openChat}
                            imageUrl = {this.state.imageUrl}
                            buttonColor = {this.state.buttonColor}
                        />
                    :null
                }
                
            </div>
        );
    }
}
export default Webchat;