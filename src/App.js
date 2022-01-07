import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { connect } from "./redux/blockchain/blockchainActions";
import { fetchData } from "./redux/data/dataActions";
import head from './rcs/new.png';
import disp from './rcs/Untitled-1.png';
import roadmap from './rcs/roadmap.png';
import qsc from './rcs/qsteam.png';
import tr from './rcs/trteam.png';
import dr from './rcs/deteam.png';
import twit from './rcs/twit.png';
import filter from './rcs/filter.png'
import disclogo from './rcs/disclogo.png'
import openlogo from './rcs/openlogo.png'
import logo from './rcs/logo.png'

const filterr ={
  height: '70%',
  width: '400px',
  position: 'absolute',
  right: '16%',
  top: '18%'
}

const mystyle = {
  margin: "0px",
  
  color: "red",
  background: "black",
  height: "75px",
  textAlign: 'center'
}

const p1 ={
  color:"white",
  position: 'relative',
  top: '40px',
  lineHeight: '1.55',
  fontSize: '15px',
  wordWrap: 'break-word',
  marginLeft: '50%'
}

const p2 ={
  color:"white",
  position: 'relative',
  top: '60px',
  lineHeight: '1.55',
  fontSize: '15px',
  wordWrap: 'break-word',
  marginLeft: '50%'
  
}

const h2={
  marginLeft: "50%",
  color:"white",
  marginBottom: "25px",
  paddingTop: "0%",
  fontSize: '20px'
  
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
  height: "350px",
  width: '100%',
  position: 'relative',
  borderBottom: '4px solid white'

}

const div3={
  display: 'inline-block',
  verticalAlign: 'top',
  position: 'relative'
}


const button4= {
  padding: '16px 42px',
  boxShadow: '0 0 25px 2px #000000',
  boxShadow: '0 0 25px 2px #000000',
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

const divv={
  background: 'black'
}

const bigpic={
  backgroundImage: `url(${head})`,
  backgroundSize: 'cover',
  height: '400px',
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat',
  textAlign: 'center',
  borderBottom: '4px solid white'
  

}

const roadmapimg={
  display: 'block',
  marginLeft: 'auto',
  marginRight: 'auto',
  width: '40%',
  height: '50%',
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
  left: '44%',
  marginTop: '85px'
}

const dee={
  height: '250px',
  position: 'absolute',
  width: 'auto',
  left: '17%',
  marginTop: '85px'
}

const quick={
  height: '250px',
  position: 'absolute',
  width: 'auto',
  left: '69%',
  marginTop: '85px'
}

const team={
  background: 'black',
  position: 'relative',
  height: '380px',
  borderBottom: '4px solid white',
  textAlign: 'center'
}

const teamH={
  color: 'white',
  left: '48%',
  position: 'absolute',
  textAlign: 'center',
  fontSize: '20px',
  top: '10px'
}

const ttwit={
height: '25px',
width:'auto',
position: 'absolute',
left: '49.5%',
top: '350px'
}

const qtwit={
  height: '25px',
width:'auto',
position: 'absolute',
left: '74.5%',
top: '350px'
}

const dtwit={
  height: '25px',
width:'auto',
position: 'absolute',
left: '22.5%',
top: '350px'

}

const div4={
  height: '75px',
  color: 'black',
  position:'relative'
}

const contract={
  
  left: '50px',
  position: 'absolute',
  top: '40%'
}

const twitter={
  position: 'absolute',
  color: 'white',
  marginTop: '41px'
  
}
const opensea={
  position: 'absolute',
  color: 'white',
  marginTop: '19px'

}
const discord={
  position: 'absolute',
  color: 'white',
  marginTop: '-1px'

}
const socials={
  position: 'absolute',
  right: '15%',
  top: '10%'
  
}

const twitl={
  position: 'absolute',
  right: '10%',
  top: '3%',
  height: '40px',
  width: 'auto',
  marginLeft: '5px',
  marginRight: '5px'
}
const openl={
  position: 'absolute',
  right: '5%',
  top: '3%',
  height: '40px',
  width: 'auto',
  marginLeft: '5px',
  marginRight: '5px'
}
const discordl={
  position: 'absolute',
  right: '15%',
  top: '3%',
  height: '40px',
  width: 'auto',
  marginLeft: '5px',
  marginRight: '5px'
}
const logo1={
  position: 'absolute',
  left: '4%',
  top: '2%',
  height: '50px',
  width: 'auto'
}

const connectb={
  position: 'absolute',
  right: '20%',
  top: '3%',
  height: '40px',
  width: '80px',
  padding: '10px 5px 5px 3px ',
  boxShadow: '0 0 25px 2px #000000',
  boxShadow: '0 0 25px 2px #000000',
  lineHeight: '1.25',
  background: '#FC6E51',
  color: 'white',
  fontSize: '14px',
  letterSpacing: '.08em',
  textTransform: 'uppercase',
  transition: 'background-color .6s ease',
  overflow: 'hidden',
  textAlign: 'center'

}

const inputbox={
  position: 'absolute',
  left: '50%',
  top: '350px',
  width: '50px',
  transform: 'translate(-50%, -50%)',
  border: '2px solid white',
  boxShadow: '0 0 25px 2px #000000',
  boxShadow: '0 0 25px 2px #000000',
  background: '#FC6E51',
  textAlign: 'center'
  
}

const q={
  position: 'absolute',
  left: '50%',
  top: '370px',
  fontSize: '10px',
  color: 'white',
  margin: 'auto',
  textAlign: 'center',
  transform: 'translate(-50%, -50%)',
  
}


function App() {
  const dispatch = useDispatch();
  const blockchain = useSelector((state) => state.blockchain);
  const data = useSelector((state) => state.data);
  const [feedback, setFeedback] = useState(
    "🢃🢃 Please input how many PsychPunks 🢃🢃 you would like to mint."
  );
  const [claimingNft, setClaimingNft] = useState(false);
  const [inputValue, setInputValue] = useState("");

  const claimNFTs = (_amount) => {
    if (_amount <= 0) {
      return;
    }
    setFeedback("Minting your PsychPunk...");
    setClaimingNft(true);
    blockchain.smartContract.methods
      .mint(blockchain.account, _amount)
      .send({
        gasLimit: "285000",
        from: blockchain.account,
        value: blockchain.web3.utils.toWei(
          (0.042 * _amount).toString(),
          "ether"
        ),
      })
      .once("error", (err) => {
        console.log(err);
        setFeedback("Sorry, something went wrong please try again later.");
        setClaimingNft(false);
      })
      .then((receipt) => {
        setFeedback(
          "WOW, you now own a PsychPunk. go visit Opensea.io to view it."
        );
        setClaimingNft(false);
        dispatch(fetchData(blockchain.account));
      });
  };

  const getData = () => {
    if (blockchain.account !== "" && blockchain.smartContract !== null) {
      dispatch(fetchData(blockchain.account));
    }
  };

  useEffect(() => {
    getData();
  }, [blockchain.account]);

  return (
        <div style={divv}>

      <h1 style={mystyle} >

      <button
      style={connectb}
        onClick={(e) => {
          e.preventDefault();
          dispatch(connect());
          getData();
        }}
      >
        Connect
      </button>

        <img src={logo} style={logo1}></img>
      <a href={"https://opensea.io/collection/psych-punks"}>
        <img src={openlogo} style={openl}>

        </img>
      </a>
      <a href={"https://twitter.com/psychpunks"}>
        <img src={twit} style={twitl}>
          
        </img>
      </a>
      <a href={"https://discord.gg/wZeUXjsZrP"}>
        <img src={disclogo} style={discordl}>
          
        </img>
      </a>
      </h1>

  <div style={bigpic}>
  
  {/* <img style={background} responsive src={head} alt="punks"></img> */}
  <button style={button4} disabled={claimingNft ? 1 : 0}
        onClick={(e) => {
          e.preventDefault();
          claimNFTs(inputValue);
          getData();
        }}
      >
        {claimingNft ? "BUSY" : "MINT"} </button>
        
        <input
        style={inputbox}
        value={inputValue}
        placeholder='ex. 1'
        onChange={(e) => setInputValue(e.target.value)}></input>

        {/* <h1 style={q}>Quantity</h1> */}
      
  
  </div>
    <div style={div1} >
    <h2 style={h2}>What are PsychPunks?</h2>
      <img style={img1} src={disp} alt="PsychPunk"></img>
      <img style={filterr} src={filter}></img>
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
    <div style={div4}>
        <p style={contract}>
          <a href={"https://etherscan.io/address/0x26582b17c733bbc60fa41c833c9d814fc9cc4b03"}>
            Contract
          </a>
        </p>
        <p style={socials}>
          <a href={"https://discord.gg/wZeUXjsZrP" }style={discord}>
          Discord
          </a>
          <a href={"https://opensea.io/collection/psych-punks"}style={opensea}>
            OpenSea
          </a>
          <a href={"https://twitter.com/psychpunks"}style={twitter}>
            Twitter
          </a>

        </p>
      </div>
      <div>
      
    </div>
    
    </div>




  );
}

export default App;
