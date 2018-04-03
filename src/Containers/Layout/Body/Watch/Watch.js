import React,{ Component } from 'react';


import Video from '../../../../Components/Video/Video';



import UpNexts from '../../../../Components/UpNexts/UpNexts';


class Watch extends Component{

state={
    upNext:[
        {},{},{},{},{},{}
    ]
}


    render(){
        console.log()

        return (
            <div className="show-top-grids">
                <div className="col-sm-8 single-left">
                    <Video videoId={this.props.match.params.id} title={this.props.match.params.title}/>
                    {/* <VideoInfo /> */}
                </div>
                <div className="col-md-4 single-right">
					<UpNexts upNext={this.state.upNext}/>
				</div>
                <div className='clearfix'> </div>

            </div>
        )
    }
}
export default Watch;