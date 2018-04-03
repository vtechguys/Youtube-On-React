import React,{ Component } from 'react';
//import './Body.css';




import { Route , Switch } from 'react-router-dom';


import Home from './Home/Home';


import asyncComponent from '../../../hoc/asyncComponent';
// import SRContainer from './SearchResultsContainer/SRContainer';
// import SearchResults from '../../../Components/SearchResults/SearchResults';

// import SearchResults from '../../../Components/SearchResults/SearchResults'

const AsyncWatch = asyncComponent(
    ()=>{
        return import ('./Watch/Watch');
    }
);
const AsyncUpload = asyncComponent(
    ()=>{
        return import ('../../../Components/Upload/Upload');
    }
);
const AsyncSearchResults = asyncComponent(
    ()=>{
        return import ('../../../Components/SearchResults/SearchResults');
    }
);



class Body extends Component{
   render(){
        return (
            <div className="col-sm-12 main">
                <Switch>
                    <Route path='/watch/:id/:title' exact component={AsyncWatch} />
                    <Route path='/Upload/' exact component={AsyncUpload} />
                    <Route path='/channel/:id' exact render={()=><h1>channel component No data avialable? so incomplete?</h1>} />
                    <Route path='/results/:query' exact component={AsyncSearchResults} />
                    <Route path='/' exact component={Home}/>
                </Switch>
            </div>
              
        )

    }

}
export default Body;