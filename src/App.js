import EE from "./components/EE";
import GI from "./components/GI";
import Navbar from "./components/Navbar";
import PE from "./components/PE";

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="cv-container">
        <GI />
        <hr />
        <PE />
        <hr />
        <EE />
      </div>
    </div>
  );
}

export default App;
