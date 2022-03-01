const SideBarRow = ({selected, Icon, title}) => {
    return (
        <div className={`sidebarrow ${selected ? 'selected': ''}`}>
            <Icon className='sidebarrow__icon'/>
            <h2 className='sidebarrow__title'>{title}</h2>
        </div>
    )
}

export default SideBarRow;
import React from 'react';

const RelatedVideos = (props) => {
    console.log(props.relatedVideo)        
    function videoLinks() {
        // props.getRelatedVideos()
        return props.relatedVideo.map((video) => {
            return (
                    <li><a href={`http://www.youtube.com/watch?v=${video.videoId}`}>{video.videoTitle}</a> </li>
                    );
        });
    }
        return (
            <div>
                {videoLinks()}
            </div>
        );
}
 
export default RelatedVideos;
