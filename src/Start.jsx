import { useState } from 'react'
import './Start.css'

function Start({setState}) {

    const [hovered, setHovered] = useState(false);
  return (
    <> 
    <img src={hovered ? "../img/pi7_Dbhand.webp" : "../img/Dbhand.webp"} 
    alt=""
    onMouseEnter={() => setHovered(true)} 
    onMouseLeave={() => setHovered(false)}
    onClick = {() => setState('info')}/>
    </>
  );
}

export default Start;
