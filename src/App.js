import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Cameras from './main/cameras';
import SideBar from './main/sideBar';
import React from "react";
import Camera1 from './detail/camera1';

function App() {
  return (
    <Router>
      <div>
        <SideBar />
        <Routes>
          <Route path="/camera/1" element={<Camera1 />} />
          <Route path="/" element={<Cameras />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
