import React from 'react';

import { Link } from 'react-router-dom';



const SearchResult = ( props ) =>{
    return (
        <div className='animated-grids row'>
            <div className='col-sm-12 resent-grid recommended-grid slider-first'>
               <div className='row'>
               <div className='col-sm-12 col-md-4 resent-grid-img recommended-grid-img '>
                    <Link to={'/watch/'+ props.result.id.videoId + '/' +props.result.snippet.title}>
                        <img src={props.result.snippet.thumbnails.medium.url} />
                    </Link>
                </div>
                <div className='col-sm-12 col-md-8 resent-grid-info  '>
                    <h5>
                        <Link to={'/watch/'+ props.result.id.videoId + '/' +props.result.snippet.title} className='title'>
                            {props.result.snippet.title}
                        </Link>
                    </h5>
                    
                    <div className='slid-bottom-grids'>
                        <div className='slid-bottom-grid'>
                            <p className='author author-info'>
                                <Link to={'/channel/'+props.result.snippet.channelId} className='author'>
                                    {props.result.snippet.channelTitle}
                                </Link>
                            </p>
                        </div>
                        <div className='slid-bottom-grid slid-bottom-right'>
                            <Link to={'/watch/'+ props.result.id.videoId + '/' +props.result.snippet.title}>
                                <p className='views views-info'>views</p>
                                <p className='views views-info'>todayTime-publishTime</p>
                            </Link>
                        </div>
                    </div>
                </div>
               </div>
                <div className='clearfix'> </div>
            </div>
        </div>
            
        
    )
}
export default SearchResult;


