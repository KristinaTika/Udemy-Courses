import React from 'react';
import { connect } from 'react-redux';

const DelName = ({ delName }) => (
    <button type="button"
        onClick={delName}>DELETE</button> // whenever its clicked on a button, we'll use delName prop, which is a function that dispatches an action to delete that name
);

const mapDispatchToProps = (dispatch, ownProps) => ( // gets 2 parameters, DISPATCH and PROPS of THAT Component ; RETURNS an Object, the KEYS of the object are what props you want to pass to the component, and VALUES are functions( invokes dispatch with an action )
    {
        delName: () => (dispatch({
            type: "DEL_NAME"
        }))
    }
);

export default
    connect(null, mapDispatchToProps)(DelName);