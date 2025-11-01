import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Homepage from "./Components/Homepage.js";
import Signup from "./Components/Signup.js";
import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/signup" element={<Signup/>}/>
           
            {/* Add a route for handling unmatched paths (404 page) */}
            <Route path="*" element={<div>Page Not Found</div>} />
          </Routes>
      </Router>
    </div>
  );
}

export default App;
