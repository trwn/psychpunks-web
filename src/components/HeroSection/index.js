import React, { useState, useEffect } from "react";
import { ethers } from "ethers";
import contract from "../../contracts/psychpunks.json";
import img from "../../images/bg.png";
import filter from "./filter.png"
import {
  HeroContainer,
  HeroBg,
  VideoBg,
  VideoBg2,
  HeroContent,
  HeroLogo,
  HeroP,
  HeroBtnWrapper,
  ArrowForward,
  ArrowRight,
  Button,
  Input,
  
} from "./HeroElements";
import logo from './logo.png'

const contractAddress = "0xab89D55822768F9eA1A6FFbe3f0eE10D676cA752"; // rinkby testnet address
const abi = contract.abi;

const HeroSection = () => {
  const [hover, setHover] = useState(false);
  const [currentAccount, setCurrentAccount] = useState(null);
  const [amount, setAmount] = useState("");

  const onHover = () => {
    setHover(!hover);
  };
  const checkIfWalletIsConnected = async () => {
    const { ethereum } = window;

    if (!ethereum) {
      console.log("Make sure you have Metamask installed!");
      return;
    } else {
      console.log("Wallet exists! We're ready to go!");
    }

    const accounts = await ethereum.request({ method: "eth_accounts" });

    if (accounts.length !== 0) {
      const account = accounts[0];
      console.log("Found an authorized account:", account);
      setCurrentAccount(account);
    } else {
      console.log("No authorized accounts.");
    }
  };

  const mintNft = async (_amount) => {
    try {
      const { ethereum } = window;

      if (ethereum) {
        const provider = new ethers.providers.Web3Provider(ethereum);
        const signer = provider.getSigner();
        const nftContract = new ethers.Contract(contractAddress, abi, signer);
        const accounts = await ethereum.request({ method: "eth_accounts" });
        let ethAmount = (0.042 * _amount).toString();

        await nftContract.mint(accounts[0], _amount, {
          value: ethers.utils.parseEther(ethAmount),
        });
      } else {
        console.log("Ethereum object does not exist");
      }
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    checkIfWalletIsConnected();
  }, []);

  return (
    <HeroContainer>
      <HeroBg>
        <VideoBg autoPlay loop muted src={img} type="img" />
        <VideoBg2 src={filter} type="img" />
      </HeroBg>
      <HeroContent>
        <HeroLogo src={logo}></HeroLogo>
        <HeroP>
          Mint a psychpunks today! And still have a change to get a Psychpunks
          hoodie!
        </HeroP>
        <HeroBtnWrapper>
          <Button
            onMouseEnter={onHover}
            onMouseLeave={onHover}
            onClick={mintNft}
            primary="true"
            dark="true"
            onClick={(e) => {
              e.preventDefault();
              mintNft(amount);
            }}
          >
            Mint
            {hover ? <ArrowForward /> : <ArrowRight />}
          </Button>
          <Input
            type="number"
            max="10"
            min="1"
            placeholder="ex.1"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          />
        </HeroBtnWrapper>
      </HeroContent>
    </HeroContainer>
  );
};

export default HeroSection;
