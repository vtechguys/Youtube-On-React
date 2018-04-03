import React ,{ Component } from 'react';

import Nav from '../../Components/Nav/Nav';
import Body from './Body/Body'
import Aux from '../../hoc/Auxillary';



class Layout extends Component{
    state={
        userSubscribptions:null,
        user:null

    }
    componentDidMount(){
        console.log('Make request for user subscriptions');
        //make server call and fill data
        
    }
    render(){
        return (
            <Aux>
                <Nav 
                    companyName={this.props.companyName} 
                    companyLogo={this.props.companyLogo}
                    user={this.state.user}            
                />
                <Body playableVideosArr={this.state.userSubscribptions}/>
            </Aux>
        );
    }
}
export default Layout;