import React,{ Component }  from 'react';
// import  './SearchBar.css';

import { Link } from 'react-router-dom';
class SearchBar extends Component{
    
    render(){
        console.log('ref',this.refs.searchQuery)
        return (
            <div className="top-search ">
                <div className="navbar-form navbar-right col-md-8 searchBar">
                
                    <input type="text" className="form-control" placeholder="Search..." 
                        onKeyDown={(event)=>this.props.search(event)} 
                        
                       
                    />
                <Link to={'/results/'+ this.props.searchQuery}  id='submitSearch'>
                &nbsp;
                </Link>
                    {/* <a href={'/results/' + this.props.searchQuery}>Btn</a> */}
                </div>
            </div>
        );
    }
}
export default SearchBar;