import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Crew from "./pages/Crew/Crew";
import Home from "./pages/Home/Home";
import Technology from "./pages/Technology/Technology";
import Destination from "./pages/Destination/Destination";

function App() {
  return (
    <div className="app">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="destination" element={<Destination />} />
        <Route path="/crew" element={<Crew />} />
        <Route path="technology" element={<Technology />} />
      </Routes>
    </div>
  );
}

export default App;
