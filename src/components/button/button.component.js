import React, { Component } from 'react';
import PropTypes from 'prop-types'

const Button = (props) => {

    const { buttonText } = props

    const submitEvent = () => {
        if(props.emitEvent) {
            props.emitEvent()
        }
    }

    return(
        <button data-test='buttonComponent' onClick={() => submitEvent() }>
            { buttonText }
        </button>
    )
}

Button.propTypes = {
    buttonText: PropTypes.string,
    emitEvent: PropTypes.func
}

export default Button;