// BackgroundVideo.js

// Using react-html5video
import React from 'react';
import { DefaultPlayer as Video } from 'react-html5video';
import './BackgroundVideo.css'; // Import the CSS file for styling
import vid from './vedio.mp4'

const BackgroundVideo = () => {
  return (
    <div className="background-video">
      <Video
        autoPlay
        loop
        muted
        controls={['PlayPause', 'Seek', 'Time', 'Volume', 'Fullscreen']}
      >
        <source src={vid} type="video/mp4" />
      </Video>
    </div>
  );
};

export default BackgroundVideo;