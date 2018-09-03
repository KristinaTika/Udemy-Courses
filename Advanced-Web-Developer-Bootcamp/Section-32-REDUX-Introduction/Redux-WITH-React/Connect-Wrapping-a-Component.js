import React from 'react';
import { connect } from 'react-redux';
const BoldName = ({ name }) => (
    <strong>{name}</strong>
);

const mapStateToProps = state => (
    { name: state.name }
);

export default
    connect(mapStateToProps, null)(BoldName);