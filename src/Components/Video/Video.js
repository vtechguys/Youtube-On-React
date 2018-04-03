import React from 'react';


const Video = (props) => {
    
    return(
		<div className="song">
		<div className="song-info">
		<h3>{props.title}</h3>
		</div><div className="video-grid"> 
		
		<iframe id={props.videoId} title={props.title} src={'https://www.youtube.com/embed/' + props.videoId} allowFullScreen="true"></iframe>
		</div></div>

        // <div className="song">
		// 	<div className="song-info">
		// 		<h3>Etiam molestie nisl eget consequat pharetra</h3>	
		// 	</div>
		// 	<div className="video-grid">
		// 	    <iframe src={'https://www.youtube.com/embed/' + props.videoId} allowFullScreen></iframe>
		// 	</div>
		// </div>
    );
}
export default Video;