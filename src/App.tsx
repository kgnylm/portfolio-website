import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import ResumePage from "./pages/ResumePage";

function App() {
  return (
    <Router>
      <div className="min-h-screen relative">
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Navbar />
                <Home />
              </>
            }
          />
          <Route path="/resume" element={<ResumePage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
