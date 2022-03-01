import React from 'react';

const RelatedVideos = (({ props, selected, Icon, title}) => {
    console.log(props.relatedVideo)         
        return props.relatedVideo.map((video) => {
            <Icon className={'sidebarrow__icon'>{Icon} >
                <div className={`sidebarrow_selected ${selected.side ? 'selected' : ''}`}>
                <div className='sidebarrow__title'>{title} </div>
                    
                </div>
                
                
        }/>})})
export default RelatedVideos;
