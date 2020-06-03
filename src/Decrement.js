import React, { Component } from "react";
import PropTypes from "prop-types";

class Decrement extends Component {
    constructor(props) {
        super(props);
        this.state = { CountDown: props.start };
        
    }

    handleDecrement = (state) => {
        if (state.CountDown === 0) {
            return alert("Cannot be less than zero!");
        }
        this.setState({ CountDown: state.CountDown - 1 });
    };

    render() {
         return (
            <center>
            <h1>Let's count this Number Down</h1>
            <button onClick = { () => this.handleDecrement(this.state)  } >decrement </button> 
            <br></br>
            <div > { this.state.CountDown } { " " }
            </div >

        </center>
    
        );
    }
}

Decrement.propTypes = {
    start: PropTypes.number.isRequired,
};

export default Decrement;