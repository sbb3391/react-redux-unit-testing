import React from "react";
import PropTypes from 'prop-types';

const ListItem = (props) => {
    const { title, desc } = props

    if (!title) {
        return null
    }

    return(
        <div data-test="listItemComponent">
            <h2 data-test='title'>{title}</h2>
            <p data-test='desc'>{desc}</p>
        </div>
    )
};

ListItem.propTypes = {
    title: PropTypes.string,
    desc: PropTypes.string
}

export default ListItem;