import React,{ Component } from 'react';
// import './Nav.css';

import axios from 'axios';
import CompanyName from './CompanyName/CompanyName';
import SerachBar from './SearchBar/SearchBar';
import UserOptions from './UserOptons/UserOptions';


import { connect } from 'react-redux';

class Nav extends Component {
   
  

    magicalClick(){
        document.getElementById('submitSearch').click();

    }
    

    getSearchResults(event){
      
        let searchQuery = event.target.value;
        // console.log(event.keyCode)
        
        if(searchQuery.trim().length >0 && event.keyCode==13){
            // event.preventDefault();
            searchQuery=searchQuery.split(' ');

            
            searchQuery = searchQuery.join('+');
            // this.searchQuery=searchQuery;
            
           
            axios.get('https://www.googleapis.com/youtube/v3/search?part=snippet&q='+searchQuery+'&key=AIzaSyDPU8bA1O6Qu3pgKlHDqgNEzhd84nM1QSE').then(
                response=>{
                    console.log(response.data.items);
                    this.props.searchResultsUpdate(response.data.items,searchQuery);
                    this.magicalClick();
                    
                }
            )
    
    
        }
    }


    render(){
        return (
        <nav className="navbar navbar-inverse navbar-fixed-top">
            <div className="container-fluid navTop">
                <CompanyName
                    companyName={this.props.companyName}
                    companyLogo={this.props.companyLogo}
                />
                <div id="navbar" className="navbar-collapse headerOptions">
                    <SerachBar magicalClick={this.magicalClick.bind(this)}
                    search={this.getSearchResults.bind(this)} searchQuery={this.props.searchQuery} />
                    <UserOptions />
                </div>
                <div className="clearfix"> </div>
            </div>
        </nav>
            
        );  
    }

}

const mapDispatchToProps = dispatch =>{

    return {
        searchResultsUpdate:(searchResults,searchQuery)=>dispatch({
            type:'SearchResultsUpdate',
            payload:{searchResults:searchResults,searchQuery:searchQuery},
        
        }),
        eraseSearch:()=>dispatch({type:'eraseSearch'}),
    }
}
const mapStateToProps = state =>{
    return {
        searchQuery:state.searchQuery
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Nav);