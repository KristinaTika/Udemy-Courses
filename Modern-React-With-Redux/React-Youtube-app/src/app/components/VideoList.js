import React from 'react';
import ListItem from './ListItem';

const VideoList = (props) => {

    let videos = props.videos.map((v) => {
        return <ListItem video={v} key={v.etag} onVideoSelect={props.onVideoSelect} />
    })

    return (
        <ul className="col-md-4 list-group">
            {videos}
        </ul>
    );
};

export default VideoList;