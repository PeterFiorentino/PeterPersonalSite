import React from 'react';
import YouTube from 'react-youtube'


class Music extends React.Component{
    constructor(){
        super()
        this.state = {
       
        }
    }


    render() {
        return (
            <div id="music">
                <YouTube videoId = "hxPLwb8z7sI" className="musicVideo"/>
                <YouTube videoId = "76PRw0s886w" className="musicVideo"/>
                <YouTube videoId = "IGxhfyRWWX4" className="musicVideo"/>
                <YouTube videoId = "bCyqXFBvYms" className="musicVideo"/>
                <YouTube videoId = "MSWRgTIy9kc" className="musicVideo"/>
                <YouTube videoId = "0qZhBM73Ls8" className="musicVideo"/>
                <YouTube videoId = "-4l_T-vA9ac" className="musicVideo"/>           
            </div>
        )
    }
}

export default Music