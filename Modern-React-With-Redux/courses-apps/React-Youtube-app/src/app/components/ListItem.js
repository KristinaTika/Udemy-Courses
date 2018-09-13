import React from 'react';

const ListItem = ({ video, onVideoSelect }) => {

    console.log(video);

    const imageUrl = video.snippet.thumbnails.medium.url;

    return (
        <li className="list-group-item" onClick={() => onVideoSelect(video)}>
            <div className="video-list media">
                <div className="media-left">
                    <img className="media-object" src={imageUrl} />
                </div>
                <div className="video-info">
                    <h3>{video.snippet.title} </h3>
                    <span>{video.snippet.channelTitle}</span>
                </div>
            </div>
            {/* <div className="media-body">
                <div className="media-heading"> </div>
            </div> */}
        </li>
    );
};

export default ListItem;