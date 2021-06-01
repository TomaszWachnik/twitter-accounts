import React from 'react';
import PropTypes from 'prop-types';
import './ListItem.css';

const ListItem = (props) => (
    <li className="listItem__wrapper">
        <img 
            src={props.image} 
            className="listItem__image"
            alt={props.name}
        />
        <div>
            <h2 className="listItem__name">{props.name}</h2>
            <p className="listItem__description">{props.description}</p>
            <a href={props.link} className="listItem__button">visit twitter page</a>
        </div>
    </li>
);

ListItem.propTypes = {
    image: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    description: PropTypes.string,
    link: PropTypes.string.isRequired
}

ListItem.defaultProps = {
    description: 'One of the React creators',
}

export default ListItem;