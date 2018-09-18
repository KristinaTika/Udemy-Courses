import React from 'react';

const EpisodeItem = (props) => {

    const { name, air_date, episode } = props.episode;

    return (
        <li>
            <p>Name: {name} </p>
            <p>Air Date: {air_date}</p>
            <p>Episode: {episode}</p>
        </li>
    );
};

export default EpisodeItem;