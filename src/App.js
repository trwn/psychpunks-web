import "./App.css";
import React from "react";
import { injected } from "./components/wallet/connectors";
import { useWeb3React } from "@web3-react/core";
import head from './rcs/new.png';
import disp from './rcs/PsychPunk.png';

const mystyle = {
  margin: "0px",
  fontFamily: "Press Start 2P",
  color: "red",
  background: "black",
  height: "75px",
};

const mystyle2 = {
  margin: "0px",
  fontFamily: "Press Start 2P",
  color: "red",
  background: "green",
  height: "75px",
paddingBottom: "5px"
};

const img ={
width: "100%",
display: "flex",
alignSelf: "center",
border: "5px solid white"
}

const p1 ={
  marginLeft: "50%",
  marginTop: "-12%",
  color:"white",
  marginRight: "20%"
  
}

const p2 ={
  marginLeft: "50%",
  color:"white",
  marginRight: "20%"
  
}

const h2={
  marginLeft: "50%",
  color:"white",
  marginBottom: "25px",
  paddingTop: "0%"
  
}

const img1 ={
  width: "15%",
  display: "flex",
  alignSelf: "left",
  marginLeft: "15%",
  marginRight:  "0px",
  marginTop: "-3%",
  height: "auto",
  marginBottom: "0"
}

const div1={
  background: "black",
  paddingBottom: "50px",
  paddingTop: "15px",
  height: "30%"
}

const h3={
  size: "20%",
  background: null,

}

const centered= {
  position: "relative",
  top: "50%",
  left: "50%",
  transform: "translate(-50%,-50%)",
  color: "white",
  textShadow: "4px 4px black",
  fontSize: "50px"

}

const container ={
  position: "relative",
  textAlign: "center",
  color: "white",

}

const button={
  size: "25px"
}
function App() {
  const { active, account, library, connector, activate, deactivate } =
    useWeb3React();

  async function connect() {
    try {
      await activate(injected);
    } catch (e) {
      console.log(e);
    }
  }

  async function disconnect() {
    try {
      deactivate();
    } catch (e) {
      console.log(e);
    }
  }
//<p style={swag}>PsychPunks</p>

  return (
    <div>

      <h1 style={mystyle} >
      <button onClick={connect} style={button}>Connect to metamask</button>
      {active ? (
        <span>
          Connected with <b>{account}</b>
        </span>
      ) : (
        <span>not connected</span>
      )}
      <button onClick={disconnect}>disconnect</button>
      </h1>

  <box style={container}>
  <img style={img} src={head} alt="punks">
    </img>
  </box>

    <div style={div1}>
    <h2 style={h2}>What are PsychPunks?</h2>
      <img style={img1} src={disp} alt="PsychPunk"></img>
      <p style={p1}>PsychPunks is a collection of 10,000 randomly-generated Punks on the Ethereum network. There are 110 unique traits and 5 different types of Punks.
Each Punk gets a Psychedelic DNA that refers to its own attributes and makes them trippy af! Not all Punks are created equal as some are much rarer than others.
</p>

<div></div>

<p style={p2}>Upon completion of the project, the team will donate 10Ξ to Johns Hopkins Center for Psychedelic & Consciousness Research.</p>
    
    </div></div>
    );
  }

export default App;
