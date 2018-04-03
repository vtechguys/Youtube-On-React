import React from 'react';



const withClassHOC=(WrappedComponent,Classes)=>{
    return (props)=>(
                <div className={Classes}>
                    <WrappedComponent {...props}/>
                </div>
            );

}
export default withClassHOC;