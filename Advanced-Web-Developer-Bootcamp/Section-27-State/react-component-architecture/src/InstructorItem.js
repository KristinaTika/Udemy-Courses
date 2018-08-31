import React from 'react';
import PropTypes from "prop-types";

const InstructorItem = (props) => {

    return (
        <li>
            <h3>{props.name} </h3>
            <h4>
                Hobbies: {props.hobbies.join(", ")}
            </h4>
        </li>
    );
}

InstructorItem.propTypes = {
    name: PropTypes.string,
    hobbies: PropTypes.arrayOf(PropTypes.string)
}

export default InstructorItem;