import React from 'react'
import BuildResume from '../pages/BuildResume'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from '../pages/Home';

const Allroutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/build-resume" element={<BuildResume />} />
      <Route path="*" element={"404 Page not found "} />
    </Routes>
  )
}

export default Allroutes