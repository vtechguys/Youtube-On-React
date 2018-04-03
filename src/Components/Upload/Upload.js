import React ,{ Component } from 'react';

class Upload extends Component{




    handleChange(selectorFiles)
    {
        console.log(selectorFiles);
    }
    render(){
        return (
            <div className="upload">
		        <div className="container">
                    <div className="upload-grids">
                        <div className="upload-right">
                            <div className="upload-file">
                                <div className="services-icon">
                                    <span className="glyphicon glyphicon-open" aria-hidden="true"></span>
                                </div>
                                <input type="file" onChange={(e) => this.handleChange(e.target.files) }/>
                            </div>
                            <div className="upload-info">
                                <h5>Select files to upload</h5>
                                <span>or</span>
                                <p>Drag and drop files</p>
                            </div>
                        </div>
                        
                    </div>
                </div>
		    </div>
        )
    }
    
}
export default Upload;