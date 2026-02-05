import { useState, useRef } from 'react'
import './Start.css'

function Question({setState}) {
    const [isNo, setNo] = useState(false);


    const fazRef = useRef(null);
    const playfaz = () => {
    if (fazRef.current) {
      fazRef.current.play().catch(error => {
        console.error("Meow playback failed:", error);
      });
    }
  };

  return (
    <> 
    <div className = 'fullScene'>
        <audio ref={fazRef} src="../sounds/jma.mp3" type="audio/mpeg" />
        <div className = "letter">
            <div className = 'button-row'>
                <img src="../img/Dbhand.webp" className = 'small-hand' alt="" />
                <p className = 'signature'>Dear Anna</p>
        </div>
        <div className = 'left'>
            <p className = 'letter-text'>My apologies for the delay, I just received word via messenger pigeon that you do not have a Valentine ! It is a cruel injustice that THEE Anna Jung has nobody to share that special day with! For someone as talented as a level 80 khajit such as yourself, and for someone whose love I have felt dearly in every moment we've shared, this should be a more than settled arrangement! I bestowed Perceus the wise to deliver you this official letter ASAP and made up some lie called the 'elder bowl' for him to do so, but my offer is as follows: </p>
        </div>
        <p className = 'question'> Anna: WILL YOU BE MY VALENTINE ?</p>
        <div className = 'button-row'>
            {!isNo && <p className = 'signature'>NO</p>}
            {isNo && <p className = 'letter-text'>what I am literally a letter</p>}

            {!isNo && <p className = 'box' onClick = {() => {
                playfaz();
                setNo(true)}}>
                    &#9633;</p>}
            <p className = 'signature'>              YES</p>
            <p className = 'box' onClick = {() => setState('final')}>&#9633;</p>
        </div>
        </div>
    </div>
    </>
  );
}

export default Question;
