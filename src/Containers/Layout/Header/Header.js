import React from 'react';


import Nav from '../../../Components/Nav/Nav';

const Header = (props)=>{
    return (
        <Nav 
            companyName={props.companyName} 
            companyLogo={props.companyLogo}
            user={props.user}            
        />
        
        );
    
}
export default Header;