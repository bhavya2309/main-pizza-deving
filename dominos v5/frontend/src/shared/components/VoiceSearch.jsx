import React, { useState, useEffect, useRef } from 'react';
import { Mic, MicOff } from 'lucide-react';

const VoiceSearch = ({ onSearch }) => {
  const [transcript, setTranscript] = useState('');
  const [isListening, setIsListening] = useState(false);
  const [recognition, setRecognition] = useState(null);

  // Create refs for audio elements
  const startSoundRef = useRef(null);
  const stopSoundRef = useRef(null);

  useEffect(() => {
    if (!('webkitSpeechRecognition' in window)) {
      alert("This browser doesn't support the Web Speech API.");
      return;
    }
    const SpeechRecognition = window.webkitSpeechRecognition || window.SpeechRecognition;
    const recognitionInstance = new SpeechRecognition();
    recognitionInstance.continuous = false;
    recognitionInstance.interimResults = true;
    recognitionInstance.lang = 'en-US';

    recognitionInstance.onresult = (event) => {
      const currentTranscript = Array.from(event.results)
        .map(result => result[0].transcript)
        .join('');
      setTranscript(currentTranscript);
      if (event.results[0].isFinal) {
        onSearch(currentTranscript);
        // Play stop sound when recognition finishes
        stopSoundRef.current.play();
        setIsListening(false);
      }
    };

    recognitionInstance.onerror = (event) => {
      console.error(event.error);
      // Ensure stop sound is played on error
      if (isListening) {
        stopSoundRef.current.play();
      }
      setIsListening(false);
    };

    setRecognition(recognitionInstance);
  }, [onSearch, isListening]);

  const toggleListening = () => {
    if (recognition) {
      if (isListening) {
        stopSoundRef.current.play(); // Play stop sound
        recognition.stop();
      } else {
        startSoundRef.current.play(); // Play start sound
        recognition.start();
      }
      setIsListening(!isListening);
    }
  };

  return (
    <div>
      <button onClick={toggleListening} style={{ background: 'none', border: 'none', cursor: 'pointer' }}>
        {isListening ? <MicOff size={24} /> : <Mic size={24} />}
      </button>
      {isListening && (
        <div style={{
          position: 'fixed',
          bottom: '20px',
          right: '20px',
          backgroundColor: '#333',
          color: 'white',
          padding: '15px',
          borderRadius: '10px',
          boxShadow: '0 4px 8px rgba(0, 0, 0, 0.3)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '10px',
          maxWidth: '300px',
          wordWrap: 'break-word'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <Mic size={24} color="white" />
            <p>Listening...</p>
          </div>
          <p style={{ margin: 0 }}>{transcript}</p>
        </div>
      )}
      {/* Audio elements for sound effects */}
      <audio ref={startSoundRef} src="/start-sound.mp3" />
      <audio ref={stopSoundRef} src="/stop-sound.mp3" />
    </div>
  );
};

export default VoiceSearch;
