import React from 'react';

import { Link } from 'react-router-dom';
const CompanyName = (props) => {
    return (
        <div className="navbar-header companyArea  col-md-3" id={props.companyName}>
            <Link className="navbar-brand" to='/'>
                <h1>
                    <img 
                        src={props.companyLogo}
                        alt={props.companyName} 
                        className='logo-icon'
                    />
                </h1>
            </Link>
        </div>
    );
    
}
export default CompanyName;