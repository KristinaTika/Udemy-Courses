import React from 'react';

const ListItem = ({ video, handleSelect }) => {

    const imageUrl = video.snippet.thumbnails.medium.url;

    return (
        <li className="list-group-item" onClick={() => handleSelect(video)}>
            <div className="video-list media">
                <div className="media-left">
                    <img className="media-right" src={imageUrl} alt={video.snippet.title}/>
                </div>
                <div className="video info">
                    <h3>{video.snippet.title} </h3>
                    <span>{video.snippet.channelTitle}</span>
                </div>
            </div>
        </li>
    );
};

export default ListItem;