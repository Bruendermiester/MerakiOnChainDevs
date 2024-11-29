import React, { useEffect, useRef } from 'react';

const YoutubePlayer = ({ videoId }) => {
  const playerRef = useRef(null);

  useEffect(() => {
    if (!window.YT) {
      // Load the YouTube iframe API if it's not already loaded
      const script = document.createElement('script');
      script.src = 'https://www.youtube.com/iframe_api';
      script.async = true;
      document.body.appendChild(script);

      script.onload = () => {
        window.onYouTubeIframeAPIReady = () => {
          createPlayer();
        };
      };
    } else {
      createPlayer();
    }

    return () => {
      if (playerRef.current) {
        playerRef.current.destroy();
      }
    };
  }, [videoId]);

  const createPlayer = () => {
    if (window.YT && window.YT.Player) {
      playerRef.current = new window.YT.Player('youtube-player', {
        videoId,
        events: {
          onReady: (event) => {
            event.target.mute(); // Mute the video for autoplay
            event.target.playVideo();
          },
        },
        playerVars: {
          autoplay: 1,
          modestbranding: 1,
          rel: 0,
          playsinline: 1, // Allows inline playback on mobile
        },
      });
    }
  };

  return (
    <div className="videoWrapper">
      <div
        id="youtube-player"
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
        }}
      />
    </div>
  );
};

export default YoutubePlayer;
