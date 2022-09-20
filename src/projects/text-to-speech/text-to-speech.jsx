import { useState } from "react";
import { useSpeechSynthesis } from "react-speech-kit";
import Dialog from "./dialog.component";

const TextToSpeech = () => {
  const [showSpeechSettings, setShowSpeechSettings] = useState(false);
  const [text, setText] = useState("");
  const [voiceIndex, setVoiceIndex] = useState(null);
  const [pitch, setPitch] = useState(1);
  const [rate, setRate] = useState(1);

  const { speak, cancel, speaking, supported, voices } = useSpeechSynthesis();

  const voice = voices[voiceIndex] || null;

  return (
    <div className="app">
      <h1>Text to Speech</h1>

      <textarea
        onChange={(e) => {
          setText(e.target.value);
        }}
      ></textarea>

      {supported && (
        <div className="speechMenu">
          {!speaking ? (
            <button onClick={() => speak({ text: text, voice, rate, pitch })}>
              Convert
            </button>
          ) : (
            <button onClick={cancel}>Cancel</button>
          )}
          <button onClick={() => setShowSpeechSettings(true)}>Settings</button>
        </div>
      )}

      <Dialog
        open={showSpeechSettings}
        onClose={() => setShowSpeechSettings(false)}
      >
        <div className="speechSettings">
          {/* Voices -- browser dependent */}
          <select
            name="voice"
            value={voiceIndex || ""}
            onChange={(e) => {
              setVoiceIndex(e.target.value);
            }}
          >
            {voices.map((option, index) => (
              <option key={option.voiceURI} value={index}>
                {`${option.lang} - ${option.name} ${
                  option.default ? "- Default" : ""
                }`}
              </option>
            ))}
          </select>
          <div className="rangeContainer">
            <div>
              <label htmlFor="rate">Rate: </label>
              <span>{rate}</span>
            </div>
            <input
              type="range"
              min="0.5"
              max="2"
              step="0.1"
              value={rate}
              onChange={(e) => {
                setRate(e.target.value);
              }}
            />
          </div>
          <div className="rangeContainer">
            <div>
              <label htmlFor="pitch">Pitch: </label>
              <span>{pitch}</span>
            </div>
            <input
              type="range"
              min="0"
              max="2"
              step="0.1"
              value={pitch}
              id="pitch"
              onChange={(event) => {
                setPitch(event.target.value);
              }}
            />
          </div>
        </div>
      </Dialog>
    </div>
  );
};

export default TextToSpeech;
