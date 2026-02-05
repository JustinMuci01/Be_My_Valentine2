import { useState, useEffect, useRef } from 'react'

function Info({setState}) {
  const [idx, setIdx] = useState(0);
  const [noPressed, setNoPressed] = useState(0);
  const audioRef = useRef(null);
  const catRef = useRef(null);
  const fazRef = useRef(null);


  const decision = idx === 9 || idx ===10;
  const [isNo, setIsNo] =useState(false);
  const [accepted, setIsAccepted] = useState(false);

  const lines = [
    "Salutations, or should I say...                   Meow",
    "It is I, Perceus the wise",
    "I may have met you about 6 seconds ago but I am tasking you with the most important mission anyone has ever been tasked with in all of history...",
    "I am looking for my lost mentor from days past",
    "According to legend,             some would call her,                fartgirl3000.                   She is supposedly in sole posession of the legendary elder bowl",
    "The elder bowl grants powers inconceivable to all kitty kind; the power for a cat to feed THYSELF instead of crying by the closet where the food is and then waiting for someone else to feed them like we mere mortal cats have done for ages",
    "With the elder bowl in my posession, I will be able to ascend beyond the realm of the rest of kitty-kind.                     I will be feline incarnate, and rule over all living beings.....                        and then I will probably eat really fast and puke on a rug            :)",
    "The plan is simple: Basically you must go to Kiften and within the Library of Blaze you must study the VIII chronicles of CAT-kind thorougly. After that you must travel to the highest peak in all of the Cat-dom and spread the catnip of queen Ellie the blasphemous in a ritual as outlined by the great meowening, specifically involving live sacrifice. Once this first step is complete, you must then transcend to the kitty realm and make contact with the first felines and then and only then you must fight to the death with the transcendental cat board. After that, provided all steps have been followed with absolute spiritual feline accuracy, fartgirl will be released from her confinement!!",
    "yea that's the basic jist of it though",
    "DO YOU ACCEPT THIS MISSION ON BEHALF OF I, PERCEUS THE WISE?",
    ".................try ..... again......",
    "",
    "hm, wait a minute",
    "you look an awfully lot like my master ms.fartgirl.             And you have her signature scent too!                    Only she can drop toots to this magnitude!",
    "I've got something I'm supposed to deliver -- your hands only.                                  and pls give me the elder bowl pls pls I was joking about the whole ruling over all living beings thing earlier ;( "
  ];

  const useTypewriter = (text, speed) => {

    const [displayText, setDisplayText] = useState('');

    useEffect(() => {
      setDisplayText('');
      let i = 0;

      const typeCharacter = () => {
        if (i < text.length) {
          setDisplayText(text.substring(0, i + 1));
          i++;
          setTimeout(typeCharacter, speed);
        }
      };

      typeCharacter();
    }, [text, speed]);

    return displayText;
  };

  console.log(idx);
  const speed = idx === 7 ? 5 : 30;
  const displayedText = useTypewriter(lines[idx] || "", speed);

  useEffect(() => {
    if (accepted && audioRef.current) {
      audioRef.current.play().catch(error => {
        console.error("Audio playback failed:", error);
      });
    }
  }, [accepted]);

  const playMeow = () => {
    if (catRef.current) {
      catRef.current.play().catch(error => {
        console.error("Meow playback failed:", error);
      });
    }
  };

    const playfaz = () => {
    if (fazRef.current) {
      fazRef.current.play().catch(error => {
        console.error("Meow playback failed:", error);
      });
    }
  };

  const handleNext = () => {
    if (idx == 14)
    {
      setState('question');
    }
    if (idx < lines.length - 1) {
      setIdx(idx + 1);
    }
  };

  function handleNo()
  {
    setIdx(10);
    setIsNo(true);
    setNoPressed(noPressed+1);

  }

  function handleYes()
  {
    setIsAccepted(true);
    setIdx(11);

    setIsNo(false);
  }

    const yesButtonStyle = {
    fontSize: `${1 + noPressed * 0.3}rem`,
    padding: `${0.5 + noPressed * 0.2}rem ${1 + noPressed * 0.3}rem`,
    width: `${100 + noPressed * 30}px`,
    height: `${50 + noPressed * 15}px`,
    };

  return (
    <div className="fullScene">
      <audio ref={catRef} src="../sounds/meow.mp3" type="audio/mpeg" />
      <audio ref={fazRef} src="../sounds/jma.mp3" type="audio/mpeg" />

      {accepted && <audio ref={audioRef} src="../sounds/es.mp3" type="audio/mpeg" />}
      <div className="textBubble">
          {accepted && <h1 className="fade-in">  Started: find fartgirl3000  </h1>}
        <div className="typewriter">
          <div className="dialogue">
            <p>{displayedText}</p>
          </div>
        </div>
        {!decision &&<button className="text-button" onClick={handleNext}>continue</button>}
        {decision && <>
        <div className = "button-row">
          <button className="text-button" onClick={handleNo}>NO</button>
          <button className="text-button" style={yesButtonStyle} onClick={handleYes}>Yes</button>
          </div>
        </>
        }

      </div>

      <div className="percy-body">
        {!isNo &&<img src="./img/pb.png" onClick = {playMeow} alt="" />}
        {isNo &&<img src="./img/jem.jpg" onClick = {playfaz}alt="" />}
      </div>
    </div>
  );
}

export default Info;