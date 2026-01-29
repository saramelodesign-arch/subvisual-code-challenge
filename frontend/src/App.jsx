import { useState } from "react";
import "./App.css";

function App() {
  const [walletAddress, setWalletAddress] = useState(null);
  const [amount, setAmount] = useState("");
  const [balance, setBalance] = useState(0);
  const [isLoading, setIsLoading] = useState(false);

  // Simulated wallet connection (UX-focused)
  const connectWallet = () => {
    // Fake address just to demonstrate flow
    setWalletAddress("0xFAKE...LOCALHOST");
  };

  // Simulated mint action (no blockchain tx)
  const mintTokens = async () => {
    if (!amount) return;

    setIsLoading(true);

    // Simulate async blockchain delay
    setTimeout(() => {
      setBalance((prev) => prev + Number(amount));
      setAmount("");
      setIsLoading(false);
    }, 800);
  };

  return (
    <div className="app">
  <div className="card">
    <h1>SimpleToken</h1>
    <p className="subtitle">
      Local demo – simulated token mint (no real transactions)
    </p>

    {!walletAddress ? (
      <button className="primary" onClick={connectWallet}>
        Connect wallet
      </button>
    ) : (
      <>
        <p className="address">{walletAddress}</p>

        <input
          type="number"
          placeholder="Amount to mint"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />

        <button
          className="primary"
          onClick={mintTokens}
          disabled={isLoading || !amount}
        >
          {isLoading ? "Minting…" : "Mint"}
        </button>

        <p className="balance">
          Current balance: <strong>{balance}</strong>
        </p>
      </>
    )}
  </div>
</div>


  );
}

export default App;
