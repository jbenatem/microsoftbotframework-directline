import React, { Component } from 'react';

class Chatheader extends Component{
    render(){
        return(
            <div className="chatheader" style={{backgroundColor: this.props.headerColor}}>
                <div className="chatheader-text">
                    <p>{this.props.title}</p>
                </div>
                <div className="chatheader-hidebutton" onClick={this.props.closeChat}>
                    <p>X</p>
                </div>
            </div>
        );
    }
}
export default Chatheader;