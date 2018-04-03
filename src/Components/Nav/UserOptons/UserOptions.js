import React,{ Component } from 'react';
import './UserOptions.css'
class UserOptions extends Component{



    render(){



        return (
            <div className="header-top-right ">
                <div className="file">
                    <i className="fa fa-video"></i>
                </div>	
                <div className="signin">SIGN IN</div>
                <div className="clearfix"> </div>
            </div>
        );
    }
}
export default UserOptions; 

