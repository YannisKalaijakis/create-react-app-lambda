import React, {VFC} from 'react';
import './VideoBackground.css';
;

const VIDEO_WIDTH = 1920;
const VIDEO_HEIGHT = 1080;

export const VideoBackground: VFC = () => {
    return <div className="video-background">
        <iframe
            width={VIDEO_WIDTH}
            height={VIDEO_HEIGHT}
            src="https://www.youtube.com/embed/CNSeq9p3gaM?autoplay=1&controls=0&mute=1&loop=1&modestbranding=1&showinfo=0"
            //src="https://www.youtube.com/embed/CNSeq9p3gaM?autoplay=1&controls=0&mute=1&loop=1&modestbranding=1&showinfo=0&start=50&enablejsapi=1&&widgetid=3"
            //https://youtu.be/CNSeq9p3gaM
            
            // src="https://player.vimeo.com/video/726487348?background=1&autoplay=1&loop=1&byline=0&title=0"
            // src="./v_site.mp4"
            // src="https://vimeo.com/726487348"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"/>
    </div>;
};
