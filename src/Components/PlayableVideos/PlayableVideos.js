import React from 'react';
//import './PlayableVideos.css'

import PlayableVideo from './PlayableVideo/PlayableVideo';
import { Link } from 'react-router-dom';

const PlayableVideos = (props) =>{


    return (
        <div className="recommended ">
					<div className="recommended-grids">
						<div className="recommended-info">
                            <h3>
                                <Link className='link' to={'/channel/' + props.playableVideosId}>
                                    <img src={props.channelArt} className='channelArt' alt={props.playableVideosTitle}/>
                                    &nbsp;&nbsp;
                                    {props.playableVideosTitle}
                                </Link>

                                <button className={props.suscribers?'btn btn-danger suscribePlayableVideo':'invisible'}>{props.suscribers?('Suscribe '+props.suscribers):null}</button>
                            </h3>
						</div>
						
						<div  id="top" className="callbacks_container ">
							<ul className="rslides row" id="slider3">
                            
                               {
                                   props.playableVideos.map(
                                    playableVideo=> {
                                        return (
                                            <li key={playableVideo.id} className='col-md-3 col-sm-12'>
                                                <div className="animated-grids">
                                                    <PlayableVideo 
                                                        channelId={props.playableVideosId}
                                                        id={playableVideo.id}
                                                        title={playableVideo.title}
                                                        duration={playableVideo.duration}
                                                        img={playableVideo.img}
                                                        channel={props.playableVideosTitle}
                                                        views={playableVideo.views}
                                                        time={playableVideo.time}
                                                    />
                                                </div>
                                            </li>
                                        )
                                    }
                                   )
                               }
								
							</ul>
						</div>
					</div>
				</div>
    );

}
export default PlayableVideos;