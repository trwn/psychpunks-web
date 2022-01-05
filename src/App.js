import "./App.css";
import React from "react";
import { injected } from "./components/wallet/connectors";
import { useWeb3React } from "@web3-react/core";
import head from './rcs/new.png';
import disp from './rcs/Untitled-1.png';
import roadmap from './rcs/roadmap.png';
import qsc from './rcs/qsteam.png';
import tr from './rcs/trteam.png';
import dr from './rcs/deteam.png';
import twit from './rcs/twit.png';


const mystyle = {
  margin: "0px",
  fontFamily: "Press Start 2P",
  color: "red",
  background: "black",
  height: "75px",
}

const p1 ={
  marginLeft: "50%",
  color:"white",
  marginRight: "20%",
  position: 'relative',
  top: '0px'
  
}

const p2 ={
  marginLeft: "50%",
  color:"white",
  marginRight: "20%",
  position: 'relative',
  top: '0px',
  width: 'auto'
  
}

const h2={
  marginLeft: "50%",
  color:"white",
  marginBottom: "25px",
  paddingTop: "0%"
  
}

const img1 ={
  left: '10%',
  top: '10%',
  height: "auto",
  width: '550px',
  position: 'absolute'
}

const div1={
  background: "black",
  paddingBottom: "50px",
  paddingTop: "15px",
  height: "30%",
  width: '100%',
  position: 'relative',
  borderBottom: '4px solid white'

}

const div3={
  display: 'inline-block',
  verticalAlign: 'top',
  position: 'relative'
}


const button={
  size: "25px",
  left: '90%',
  top: '20px',
  position: 'absolute'
}

const button2={
  size: "25px",
  left: '92.2%',
  top: '45px',
  position: 'absolute'
}

const button4= {
  padding: '16px 42px',
  boxShadow: '0px 0px 12px -2px rgba(0,0,0,0.5)',
  lineHeight: '1.25',
  background: '#FC6E51',
  textDecoration: 'none',
  color: 'white',
  fontSize: '16px',
  letterSpacing: '.08em',
  textTransform: 'uppercase',
  position: 'relative',
  transition: 'background-color .6s ease',
  overflow: 'hidden',
  alignSelf: 'center',
  position: 'absolute',
  left: '50%',
  top: '300px',
  transform: 'translate(-50%, -50%)',

}

const span={
  fontSize: '10px',
  left: '92.4%',
  top: '2px',
  position: 'absolute',
  color: 'white'
}

const divv={
  background: 'black'
}

const bigpic={
  backgroundImage: `url(${head})`,
  backgroundSize: 'cover',
  height: '400px',
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat',
  

}

const rd={
  height: '500px',
  background: 'white',
  position: 'relative'

}

const roadmapimg={
  display: 'block',
  marginLeft: 'auto',
  marginRight: 'auto',
  width: '40%',
  height: '50%',
}

const p3={
  left: '50%',
  top: '20%',
  position: 'absolute',
  verticalAlign: 'center',
  width: 'auto'
}

const newdiv={
  background: '#060606',
  borderBottom: '4px solid white'
}

const spacer={
  background: '#060606',
  height: '25px'
}


const trwn={
  height: '250px',
  position: 'absolute',
  width: 'auto',
  left: '43%',
  marginTop: '85px'
}

const dee={
  height: '250px',
  position: 'absolute',
  width: 'auto',
  left: '23%',
  marginTop: '85px'
}

const quick={
  height: '250px',
  position: 'absolute',
  width: 'auto',
  left: '63%',
  marginTop: '85px'
}

const team={
  background: 'black',
  position: 'relative',
  height: '380px'
}

const teamH={
  color: 'white',
  left: '45%',
  position: 'absolute',
  alignSelf: 'center'
}

const ttwit={
height: '25px',
width:'auto',
position: 'absolute',
left: '48.5%',
top: '350px'
}

const qtwit={
  height: '25px',
width:'auto',
position: 'absolute',
left: '68.5%',
top: '350px'
}

const dtwit={
  height: '25px',
width:'auto',
position: 'absolute',
left: '28.5%',
top: '350px'

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

  return (
    <div style={divv}>

      <h1 style={mystyle} >
      <button onClick={connect} style={button}>Connect to metamask</button>
      {active ? (
        <span>
          Connected with <b>{account}</b>
        </span>
      ) : (
        <span style={span}>not connected</span>
      )}
      <button style={button2} onClick={disconnect}>disconnect</button>
      </h1>

  <div style={bigpic}>
  
  {/* <img style={background} responsive src={head} alt="punks"></img> */}
  <button style={button4}>Mint</button>
  
  </div>
    <div style={div1}>
    <h2 style={h2}>What are PsychPunks?</h2>
      <img style={img1} src={disp} alt="PsychPunk"></img>
      <div style={div3}>

      <p style={p1}>PsychPunks is a collection of 10,000 randomly-generated Punks on the Ethereum network.
       There are 110 unique traits and 5 different types of Punks.
Each Punk gets a Psychedelic DNA that refers to its own attributes and makes them
 trippy af! Not all Punks are created equal as some are much rarer than others.
</p>

</div>

<div></div>

<p style={p2}>Upon completion of the project, the team will donate 10Ξ to Johns Hopkins Center for Psychedelic & Consciousness Research.</p>
    



    </div>
    <div style={newdiv}>
      <div style={spacer}></div>
      <img src={roadmap} style={roadmapimg}></img>
      <div style={spacer}></div>
    </div>

    <div style={team}>
    <h1 style={teamH}>Our Team</h1>

    <img src={qsc} style={quick}></img>
    <img src={dr} style={dee}></img>
    <img src={tr} style={trwn}></img>
    <a href={"https://twitter.com/quickscopeNFT"}>
    <img  src={twit} style={qtwit}></img>
    </a>
    <a href={"https://twitter.com/trwn__"}>
    <img  src={twit} style={ttwit}></img>
    </a>
    <a href={"https://twitter.com/deeerab"}>
    <img  src={twit} style={dtwit}></img>
    </a>

    </div>
    
    </div>
    
    );
  }

export default App;
