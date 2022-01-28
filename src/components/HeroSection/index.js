import React, { useState, useEffect } from "react";
import { ethers } from "ethers";
import contract from "../../contracts/psychpunks.json";
import img from "../../images/bg.png";
import logo from "../../images/logo.png";
import {
  HeroContainer,
  HeroBg,
  ImageBg,
  HeroContent,
  HeroLogo,
  HeroP,
  HeroP1,
  HeroBtnWrapper,
  ArrowForward,
  ArrowRight,
  Button,
  Input,
  HeroDiv,
} from "./HeroElements";

const contractAddress = "0xab89D55822768F9eA1A6FFbe3f0eE10D676cA752";
const abi = contract.abi;

const HeroSection = () => {
  const [hover, setHover] = useState(false);
  const [currentAccount, setCurrentAccount] = useState(null);
  const [amount, setAmount] = useState("");
  const [feedback, setFeedback] = useState("");

  const onHover = () => {
    setHover(!hover);
  };

  const checkIfWalletIsConnected = async () => {
    const { ethereum } = window;

    if (!ethereum) {
      console.log("Make sure you have Metamask installed!");
      return;
    } else {
      console.log("Metamask is isntalled! We're ready to go!");
    }

    const accounts = await ethereum.request({ method: "eth_accounts" });

    if (accounts.length !== 0) {
      const account = accounts[0];
      console.log("Found an authorized account:", account);
      setCurrentAccount(account);
    } else {
      console.log("no authorized accounts");
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

        const mintNft = await nftContract.mint(accounts[0], _amount, {
          value: ethers.utils.parseEther(ethAmount),
        });
        setFeedback("Minting your NFT!!!");
        await mintNft.wait();
        setFeedback("Finished! Check it out on Opensea!");
      } else {
        console.log("Ethereum object does not exist!");
      }
    } catch (err) {
      setFeedback("Not enough ETH!");
    }
  };

  useEffect(() => {
    checkIfWalletIsConnected();
  }, []);

  return (
    <HeroContainer>
      <HeroBg>
        <ImageBg autoPlay loop muted src={img} type="img" />
      </HeroBg>
      <HeroContent>
        <HeroLogo src={logo}></HeroLogo>
        <HeroP>Mint your PsychPunk today!</HeroP>
        <HeroP1>0.042 Ξ</HeroP1>
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
        <HeroDiv value={feedback} onChange={(e) => setFeedback(e.target.value)}>
          {feedback}
        </HeroDiv>
      </HeroContent>
    </HeroContainer>
  );
};

export default HeroSection;
