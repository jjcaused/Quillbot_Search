import "./App.css";
import { Homepage } from "./components/Homepage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Searchpage } from "./components/Searchpage";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/search" element={<Searchpage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
