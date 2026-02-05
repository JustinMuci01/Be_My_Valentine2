import { useState, useEffect, useRef } from 'react'
import './Start.css'

function Final() {

      const audioRef = useRef(null);


      useEffect(() => {
        if (audioRef.current) {
          audioRef.current.play().catch(error => {
            console.error("Audio playback failed:", error);
          });
        }
      }, []);



  return (
    <> 
    <div className = 'final'>
    <audio ref={audioRef} src="../sounds/es.mp3" type="audio/mpeg" />
    <h1 className="fade-in"> Started:Valentine's Day  </h1>
    <div className = 'heart-row'>
        <img className = 'small' src="../img/heart.png" alt="" />
        <img className = "photo" src="../img/us.JPG" alt="" />
        <img className = 'small' src="../img/heart.png" alt="" />
        </div>
    </div>
    </>
  );
}

export default Final;
