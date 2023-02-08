import { BrowserRouter, Routes, Route } from 'react-router-dom'

// Pages and Components
import Navbar from "./components/Navbar"
import Home from "./pages/Home"

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <div className="cv-container">
          <Routes>
            <Route
              path="/"
              element={<Home />}
            />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
