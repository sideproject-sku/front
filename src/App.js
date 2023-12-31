import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Cameras from './main/cameras';
import SideBar from './main/sideBar';
import React from "react";
import Cam1 from './detail/detailCam1';
import Check from './detail/check';

function App() {
  return (
    <Router>
      <div>
        <SideBar />
        <Routes>
          <Route path="/camera/1" element={<Cam1 />} />
          <Route path="/" element={<Cameras />} />
          <Route path="/check" element={<Check />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
