import { BrowserRouter, Routes, Route } from 'react-router-dom'

// Pages and Components
import Navbar from './components/Navbar'
import Home from './pages/Home'
import AddCV from './pages/AddCV';
import EditCV from './pages/EditCV';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <div className="pages">
          <Routes>
            <Route 
              path='/'
              element={<Home />}
            />
            <Route 
              path='/AddCV'
              element={<AddCV />}
            />
            <Route
              path='/EditCV'
              element={<EditCV />}
            />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
