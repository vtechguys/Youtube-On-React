const initialState={
    searchResults:null,
    searchQuery:null
}

export const rootReducer =(state=initialState,action)=>{




    switch(action.type){
        case 'SearchResultsUpdate':
            console.log("updating store=>SearchResultsUpdate");
            let newState={...state};
            newState.searchResults=action.payload.searchResults;
            newState.searchQuery=action.payload.searchQuery;


            console.log('my store',newState,state);
            return newState;
     
       

        default : 
            return state;



    }
    
}
