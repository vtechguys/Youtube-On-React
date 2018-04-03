import React from 'react';

import Aux from '../../hoc/Auxillary';
import UpNext from './UpNext/UpNext';



const UpNexts = ( props ) => {

    return(
        <Aux>
            <h3>Up Next</h3>
			{
				props.upNext.map(
					(upnext,index)=>{
						return(
							<UpNext key={index}
							img={"http://127.0.0.1:5500/images/r1.jpg"} title={'Titile'} views={'views'} channel={'channelName'} id={'1'} channelId={'34'}/>
						);
					}
				)
			}
						
					
        </Aux>



    )
}
export default UpNexts;