import React from 'react';
import { Component } from 'react';

import Layout from './Containers/Layout/Layout';

import { BrowserRouter } from 'react-router-dom';




import 'font-awesome/css/font-awesome.min.css';

//import './App.css';
class App extends Component{
    state={
        appName:'videoTube',
        companyName:'Youtube',
        companyLogo:'http://icons.iconarchive.com/icons/dakirby309/simply-styled/128/YouTube-icon.png',
    }





    render(){
        return (
            <BrowserRouter basename="http://vtechguys.github.io/">
                <div id={this.state.appName}>
                    <Layout {...this.state}/>
                </div>
            </BrowserRouter>
        );
    }


}
export default App;
