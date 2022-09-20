import "./App.css";
import { Routes, Route } from "react-router-dom";
import Navigation from "./routes/navigation/navigation.component";
import Home from "./routes/home/home.component";
import TextToSpeech from "./projects/text-to-speech/text-to-speech";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path="text-to-speech" element={<TextToSpeech />} />
      </Route>
    </Routes>
  );
}

export default App;
