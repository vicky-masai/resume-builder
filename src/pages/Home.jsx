import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { Player, Controls } from "@lottiefiles/react-lottie-player";
import styles from "../css/home.module.css"
import { useNavigate } from "react-router-dom";
const Home = () => {
  const navigate = useNavigate();
  const handleClick =()=>{
    navigate("/build-resume");
  }

  return (
    <div className={styles.main}>
      <div>
        <h1>Build Your Winning Resume Today</h1>
        <p>We Create your job winnig resume with our tools, we are providing industry selected formate that working</p>
        <button onClick={handleClick}>Get Started</button>
      </div>
      <div>
        <Player
          autoplay
          loop
          src="https://assets1.lottiefiles.com/packages/lf20_cxCtsKKkFK.json"
          style={{ height: "auto", width: "100%" }}
        >
          <Controls
            visible={false}
            buttons={["play", "repeat", "frame", "debug"]}
          />
        </Player>
      </div>
    </div>
  );
};

export default Home;
