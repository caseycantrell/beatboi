import React, { useEffect, useState } from 'react'

const firstSoundsGroup = [
  {
    keyCode: 49,
    key: '1',
    id: 'Ride',
    url: '../drums/TR808/808ride.wav'
  },
  {
    keyCode: 50,
    key: '2',
    id: 'Clave',
    url: '../drums/TR808/808clave.wav'
  },
  {
    keyCode: 51,
    key: '3',
    id: 'Rimshot',
    url: '../drums/TR808/808rimshot.wav'
  },
  {
    keyCode: 52,
    key: '4',
    id: 'Scratch',
    url: '../drums/TR808/808scratch.wav'
  },
  {
    keyCode: 81,
    key: 'Q',
    id: 'Low Tom',
    url: '../drums/TR808/808lowtom.wav'
  },
  {
    keyCode: 87,
    key: 'W',
    id: 'Mid Tom',
    url: '../drums/TR808/808medtom.wav'
  },
  {
    keyCode: 69,
    key: 'E',
    id: 'High Tom',
    url: '../drums/TR808/808hightom.wav'
  },
  {
    keyCode: 82,
    key: 'R',
    id: "Cowbell",
    url: '../drums/TR808/808cowbell.wav'
  },
  {
    keyCode: 65,
    key: 'A',
    id: 'Snare',
    url: '../drums/TR808/808snare.wav'
  },
  {
    keyCode: 83,
    key: 'S',
    id: 'Clap',
    url: '../drums/TR808/808clap.wav'
  },
  {
    keyCode: 68,
    key: 'D',
    id: 'Closed Hi-Hat',
    url: '../drums/TR808/808closedhat.wav'
  },
  {
    keyCode: 70,
    key: 'F',
    id: 'Open Hi-Hat',
    url: '../drums/TR808/808openhat.wav'
  },
  {
    keyCode: 90,
    key: 'Z',
    id: 'Kick 1',
    url: '../drums/TR808/808kick1.wav'
  },
  {
    keyCode: 88,
    key: 'X',
    id: 'Kick 2',
    url: '../drums/TR808/808kick2.wav'
  },
  {
    keyCode: 67,
    key: 'C',
    id: 'Kick 3',
    url: '../drums/TR808/808kick3.wav'
  },
  {
    keyCode: 86,
    key: 'V',
    id: 'Shaker',
    url: '../drums/TR808/808shaker.wav'
  }
];

const secondSoundsGroup = [
  {
    keyCode: 81,
    key: 'Q',
    id: 'Chord-1',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Chord_1.mp3'
  },
  {
    keyCode: 87,
    key: 'W',
    id: 'Chord-2',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Chord_2.mp3'
  },
  {
    keyCode: 69,
    key: 'E',
    id: 'Chord-3',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Chord_3.mp3'
  },
  {
    keyCode: 65,
    key: 'A',
    id: 'Shaker',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Give_us_a_light.mp3'
  },
  {
    keyCode: 83,
    key: 'S',
    id: 'Open-HH',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Dry_Ohh.mp3'
  },
  {
    keyCode: 68,
    key: 'D',
    id: 'Closed-HH',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Bld_H1.mp3'
  },
  {
    keyCode: 90,
    key: 'Z',
    id: 'Punchy-Kick',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/punchy_kick_1.mp3'
  },
  {
    keyCode: 88,
    key: 'X',
    id: 'Side-Stick',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/side_stick_1.mp3'
  },
  {
    keyCode: 67,
    key: 'C',
    id: 'Snare',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Brk_Snr.mp3'
  },
  {
    keyCode: 67,
    key: 'C',
    id: 'Snare',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Brk_Snr.mp3'
  },
  {
    keyCode: 67,
    key: 'C',
    id: 'Snare',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Brk_Snr.mp3'
  },
  {
    keyCode: 67,
    key: 'C',
    id: 'Snare',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Brk_Snr.mp3'
  },
  {
    keyCode: 67,
    key: 'C',
    id: 'Snare',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Brk_Snr.mp3'
  },
  {
    keyCode: 67,
    key: 'C',
    id: 'Snare',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Brk_Snr.mp3'
  },
  {
    keyCode: 67,
    key: 'C',
    id: 'Snare',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Brk_Snr.mp3'
  },
  {
    keyCode: 67,
    key: 'C',
    id: 'Snare',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Brk_Snr.mp3'
  }
];

const soundsName = {
  TR808Kit: "TR-808 Kit",
  smoothPianoKit: "Smooth Piano Kit"
};

const soundsGroup = {
  TR808Kit: firstSoundsGroup,
  smoothPianoKit: secondSoundsGroup
};

const KeyboardKey = ({ play, sound: { id, key, url, keyCode } }) => {

  const handleKeyDown = (e) => {
    if (e.keyCode === keyCode) {
      play(key, id);
    }
  };

  useEffect(() => {
    document.addEventListener("keydown", handleKeyDown);
  }, []);

  return <button id={keyCode} className='drum-pad' onClick={() => play(key, id)}>
      <audio className='clip' id={key} src={url} />
        {key} 
    </button>
};

const Keyboard = ({ id, power, play, sounds }) => (
  <div className='keyboard-wrapper'>
    <div className='keyboard'>
      {power ? sounds.map((sound) => <KeyboardKey play={play} sound={sound} />) : sounds.map((sound) => <KeyboardKey play={play} sound={{...sound, url: "#"}} />)}
    </div>
  </div>

);

const Screen = ({ name, volume }) => (
  <div className='screen'>
    <h2 id='sound-display'>{name}</h2>
    <h2 id='volume-display'>Volume: {Math.round(volume * 100)}%</h2>
  </div>
);
 
const Volume = ({ volume, handleVolumeChange }) => (
  <div className='volume'>
    
     <input
      max="1"
      min="0"
      step='0.01'
      type="range"
      value={volume}
      onChange={handleVolumeChange}
      orient="vertical"
      />
      <h4>Master Volume</h4>
  </div>
);

const SwitchBank = ({ switchBank }) => (
  <div className='switch-bank'>
    <button onClick={switchBank}>Switch Bank</button>
  </div>
);

const Power = ({ stop, power }) => (
  <div className='power'>
    <button id="powerbutton" onClick={stop}>POWER</button>
    <button id="on-off" style={power ? { backgroundColor: "#B3EA7B"} : {backgroundColor: "#B41717"}}></button>
  </div>
);

const Dummies = () => (
  <>
    <div className='dummy-buttons1'>
      <button id="dummy1"></button>
      <button id="dummy1"></button>
      <button id="dummy1"></button>  
      <button id="dummy1"></button>
      <button id="dummy1"></button>
    </div>
    <div className='dummy-buttons2'>
      <button id="dummy" style={{ backgroundColor: "red"}}></button>
      <button id="dummy" style={{ backgroundColor: "red"}}></button>
      <button id="dummy"></button>
      <button id="dummy"></button>
      <button id="dummy"></button>
    </div>
  </>  
);

function App() {
  const [power, setPower] = useState(true)
  const [volume, setVolume] = useState(1);
  const [soundType, setSoundType] = useState("TR808Kit");
  const [sounds, setSounds] = useState(soundsGroup[soundType]);
  const [soundName, setSoundName] = useState("");

  const stop = () => {
    setPower(!power);
  };

  const handleVolumeChange = (e) => {
    setVolume(e.target.value);
  };

  const styleActiveKey = (audio) => {
    audio.parentElement.style.backgroundColor = "#000000"
    audio.parentElement.style.color = "#ffffff"
  };

  const deactivateAudio = (audio) => {
    setTimeout(() => {
      audio.parentElement.style.backgroundColor = "#ffffff"
      audio.parentElement.style.color = "#000000"
    }, 300)
  };
 

  const play = (key, sound) => {
    setSoundName(sound);
    const audio = document.getElementById(key);
    styleActiveKey(audio);
    audio.currentTime = 0;
    audio.play();
    deactivateAudio(audio);
  };

  const switchBank = () => {
    setSoundName("");
    if (soundType === "TR808Kit") {
      setSoundType("smoothPianoKit");
      setSounds(soundsGroup.smoothPianoKit);
    } else {
      setSoundType("TR808Kit");
      setSounds(soundsGroup.TR808Kit);
    }
  };

  const setKeyVolume = () => {
    const audios = sounds.map(sound => document.getElementById(sound.key));
    audios.forEach(audio => {
      if (audio) {
        audio.volume = volume;
      }
    })
  };

  return (
    <div id="drum-machine">
      {setKeyVolume()}
      <div className='wrapper'>
        <Keyboard power={power} play={play} sounds={sounds} />
        <div className='right-side'>
          <Power stop={stop} power={power} />
          <Screen stop={stop} volume={volume} name={soundName || soundsName[soundType]} switchBank={switchBank} />
          <SwitchBank switchBank={switchBank} />
          <Volume volume={volume} handleVolumeChange={handleVolumeChange} />
          <Dummies />
        </div>
      </div>
    </div>
  )
};

export default App;
