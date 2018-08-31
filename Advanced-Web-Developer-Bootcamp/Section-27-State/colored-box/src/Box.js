import React from 'react';

const Box = ({ color }) => {
    const style = {
        width: '180px',
        height: '180px',
        display: 'inline-block',
        backgroundColor: color
    }
    return <div style={style} />;
};

export default Box;