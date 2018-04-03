import React,{ Component } from 'react';


import { Link } from 'react-router-dom';

class UpNext extends Component{

    render(){


        return (
            <div className="single-right-grids upnext row">
				<div className="col-md-6 col-lg-6 single-right-grid-left">
					<Link to={'/watch/' +this.props.id+'/' + this.props.title}>
					<img src={this.props.img} className='upnextImg' alt="" />
					</Link>
				</div>
	            <div className="col-md-6 col-lg-6 single-right-grid-right upnextInfo">
					<Link to={'/watch/' +this.props.id+'/' + this.props.title} className="title">
						{this.props.title}
					</Link>
					<p className="author">
						<Link to={'/channel/' + this.props.channelId} 
							className="author">
							{this.props.channel}
						</Link>
					</p>
					<p className="views">{this.props.views}</p>
				</div>
				<div className="clearfix"> </div>
			</div>
        );
    }
}
export default UpNext;