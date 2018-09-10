import React from 'react';
import ListItem from './ListItem';

const VideoList = (props) => {

    let videos = props.videos.map((v) => {
        return <ListItem video={v} key={v.etag} handleSelect={props.handleSelect} />
    })

    return (
        <div className="col-md-4 list-group">
            {videos}
        </div>
    );
};

export default VideoList;