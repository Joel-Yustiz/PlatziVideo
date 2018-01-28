import React, { Component } from 'react'
import './video.css'
class Video extends Component {
    togglePlay() {
        if (this.props.pause) {
            this.video.play()
        } else {
            this.video.pause()
        }
        this.video.Play;
    }
    componentWillReceiveProps(nextProps){
        if (nextProps.pause !== this.props.pause) {
            this.togglePlay()
        }
    }

    setRef = element => {
        this.video = element;
    }
    render(){
        const {
            handleLoadedMetaData
        } = this.props;
        
        return(
            <div className="Video">
                <video              
                     autoPlay={this.props.autoplay}
                     src={this.props.src}
                     ref={this.setRef}
                     onLoadedMetadata={}
                 />
            </div>
            
        )
    }
}

export default Video;
