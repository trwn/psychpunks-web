import "./App.css";
import React from "react";
import { injected } from "./components/wallet/connectors";
import { useWeb3React } from "@web3-react/core";

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
    <div>
      <button onClick={connect}>Connect to metamask</button>
      {active ? (
        <span>
          Connected with <b>{account}</b>
        </span>
      ) : (
        <span>not connected</span>
      )}
      <button onClick={disconnect}>disconnect</button>
    </div>
  );
}

export default App;
