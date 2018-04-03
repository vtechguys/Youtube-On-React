

import React,{ Component } from 'react';

import SearchResult from './SearchResult/SearchResult';



import { connect } from 'react-redux';

import Aux from '../../hoc/Auxillary';

class SearchResults extends Component{
    

    componentWillMount(){
        console.log('Component will ount',this.props.results)
    }
    render(){

        let resultsJSX=null;




        return (
            <Aux>
               Your Search results:
                {   
                    this.props.results.map(result=>{
                        return <SearchResult key={result.id.videoId || result.id.channelId}result={result}/>
                    })
                    
                        
                }
            </Aux>
        )
    }
    


}



const mapStateToProps = state =>{
    return {
        results:state.searchResults
    }
}
export default connect(mapStateToProps)(SearchResults);