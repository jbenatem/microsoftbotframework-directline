import React, { Component } from 'react';

class Chatheader extends Component{
    render(){
        return(
            <div className="chatheader">
                <div className="chatheader-text">
                    <p>React Webchat Sample</p>
                </div>
                <div className="chatheader-hidebutton">
                    <p>X</p>
                </div>
            </div>
        );
    }
}
export default Chatheader;