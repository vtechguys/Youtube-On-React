import React,{ Component } from 'react';

import { Link } from 'react-router-dom';
//import './PlayableVideo.css';
class PlayableVideo extends Component {



    render(){


        return(
            <div className="col-sm-12 resent-grid recommended-grid slider-first">
				<div className="resent-grid-img recommended-grid-img">
					<Link to={ '/watch/' +this.props.id+'/' + this.props.title}>
					<img src={this.props.img} alt={this.props.title} /></Link>
						<div className="time small-time slider-time">
						    <p>{this.props.duration}</p>
						</div>
						<div className="clck small-clck">
				    		<span className="glyphicon glyphicon-time" aria-hidden="true"></span>
						</div>
				</div>
				<div className="resent-grid-info recommended-grid-info">
					<h5>
						<Link to={ '/watch/' +this.props.id+'/' + this.props.title } className="title">
							{this.props.title}
						</Link>
					</h5>
						<div className="slid-bottom-grids">
							<div className="slid-bottom-grid">
								<p className="author author-info">
									<Link to={'/channel/' + this.props.channelId} className="author">{this.props.channel}</Link>
								</p>
							</div>
							<div className="slid-bottom-grid slid-bottom-right">
								<Link to={'/watch/' +this.props.id+'/' + this.props.title }>
									<p className="views views-info">{this.props.views} views</p>
									<p className="views views-info">{this.props.time}</p>
								</Link>
							</div>
					    <div className="clearfix"> </div>
					</div>
				</div>
			</div>

        );
    }
}
export default PlayableVideo;