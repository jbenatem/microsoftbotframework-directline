import React, { Component } from 'react';

class Chatbutton extends Component{
    render(){
        return(
            <div className="chatbutton" onClick={this.props.openChat}>
                <img className="imagebutton" src={this.props.imageUrl} alt="chatbutton"></img>
            </div>
        );
    }
}
export default Chatbutton;