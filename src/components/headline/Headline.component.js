import React, { Component } from 'react';
import './Headline.styles.css'

class Headline extends Component {

    // eslint-disable-next-line no-useless-constructor
    constructor(props) {
        super(props);
    }
    
    render() {
        const { header, desc } = this.props;

        if (!header) return null

        return(
            <div data-test='headlineComponent'>
                <h1 data-test='header'>{header}</h1>
                <p data-test='desc'>
                    {desc}
                </p>
            </div>
        )
    }


}

export default Headline