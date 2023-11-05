"use client"
import { useEffect, useRef } from 'react';
import dashjs from 'dashjs';

function VideoPlayer({ src }) {
  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current) {
      const player = dashjs.MediaPlayer().create();

      player.initialize(videoRef.current, src, true);
    }
  }, [src]);

  return (
    <video ref={videoRef} controls className='w-full h-auto max-h-[450px] rounded-xl border-[#707070] border'/>
  );
}

export default VideoPlayer;
