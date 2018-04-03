import React ,{ Component } from 'react';



import PlayableVideos from '../../../../Components/PlayableVideos/PlayableVideos'


class Home extends Component {
    state={
        
        playableVideosArr:[
            {    playableVideosId:'UC0vBXGSyV14uvJ4hECDOl0Q',
                 playableVideosTitle:'Techquickie',
                
                channelArt:'https://yt3.ggpht.com/-cBZXCm7J_G0/AAAAAAAAAAI/AAAAAAAAAAA/rA8JBdv_Q6U/s88-c-k-no-mo-rj-c0xffffff/photo.jpg',
                suscribers:'256K',
                playableVideos:[
                    {id:"cw0jRD7mn1k",title:'The History of Social Media',img:'https://i.ytimg.com/vi/bcVBqwlnmlM/default.jpg',duration:'7:40',views:'3M',time:'1 year ago'},
                    {id:"bcVBqwlnmlM",title:'CPU Shopping Tips as Fast As Possible',img:'https://i.ytimg.com/vi/bcVBqwlnmlM/default.jpg',duration:'7:40',views:'3M',time:'1 year ago'},
                    {id:"hM8gZzSDKrw",title:'Tri Band WiFi as Fast As Possible',img:'https://i.ytimg.com/vi/hM8gZzSDKrw/default.jpg',duration:'7:40',views:'3M',time:'1 year ago'},
                    {id:"DAvDpYR7oEI",title:'Steam As Fast As Possible',img:'https://i.ytimg.com/vi/DAvDpYR7oEI/default.jpg',duration:'7:40',views:'3M',time:'1 year ago'}
                ]
            },
            {   playableVideosTitle:'DesignCourse',

                playableVideosId:'UCVyRiMvfUNMA1UPlDPzG5Ow',
                channelArt:'https://yt3.ggpht.com/-aG9Fhs8oDSs/AAAAAAAAAAI/AAAAAAAAAAA/FgPzEXHXIOQ/s88-c-k-no-mo-rj-c0xffffff/photo.jpg',
                suscribers:'171K',

                playableVideos:[
                    {id:"PhggNGsSQyg",title:'Learn RxJS in 60 Minutes for Beginners - Free Crash Course',img:'https://i.ytimg.com/vi/PhggNGsSQyg/default.jpg',duration:'7:40',views:'3M',time:'1 year ago'},
                    {id:"1reiWRYb2bU",title:"Let's merge Angular 5 with Electron! Muwahaha!",img:'https://i.ytimg.com/vi/1reiWRYb2bU/default.jpg',duration:'7:40',views:'3M',time:'1 year ago'},
                    {id:'gOSdZJ7gpOc',title:'Build an App using Angular Material (Tutorial)',img:'https://i.ytimg.com/vi/gOSdZJ7gpOc/default.jpg',duration:'7:40',views:'3M',time:'1 year ago'},
                    {id:"kHbMm7psBag",title:'Customizing Angular 5 Material Themes',img:'https://i.ytimg.com/vi/kHbMm7psB',duration:'7:40',views:'3M',time:'1 year ago'}
                ]
            }

            
        ]
    }



    render(){



        return (
            <div className="main-grids">
                    
                    {
                        this.state.playableVideosArr.map(
                            playableVideos=>{
                                return(
                                    
                                    <PlayableVideos 
                                    key={playableVideos.playableVideosId}
                                    playableVideosId={playableVideos.playableVideosId}
                                    channelArt={playableVideos.channelArt}
                                    playableVideosTitle={playableVideos.playableVideosTitle}
                                    suscribers={playableVideos.suscribers}
                                    playableVideos={playableVideos.playableVideos}
                                    />
                                     
                                    
                                )
                        })
                    
                    }
                </div>
        );
    }
}
export default Home;