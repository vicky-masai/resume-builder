import React from 'react';
import { ResumeProvider } from './components/ResumeContext';
import Allroutes from './Routes/Allroutes';
import Header from "./components/Navbar";

function App() {
  return (
    <ResumeProvider>
      <Header />
      <Allroutes />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <center>
        <p style={{ fontSize: "11px" }}>Copyright © Reserved 2023
          {" "}<a href='https://iamvicky.dev/'>Iamvicky.dev</a>
        </p>
      </center>
    </ResumeProvider>
  );
}

export default App;
