import { useState } from "react";

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
    <div style={{ padding: "2rem", maxWidth: "420px" }}>
      <h1>SimpleToken dApp</h1>

      {!walletAddress ? (
        <button onClick={connectWallet}>Connect Wallet</button>
      ) : (
        <>
          <p>Connected wallet:</p>
          <code>{walletAddress}</code>

          <div style={{ marginTop: "1rem" }}>
            <input
              type="number"
              placeholder="Amount to mint"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
            />

            <button
              onClick={mintTokens}
              disabled={isLoading}
              style={{ marginLeft: "0.5rem" }}
            >
              {isLoading ? "Minting..." : "Mint"}
            </button>
          </div>

          <p style={{ marginTop: "1rem" }}>
            Current balance: <strong>{balance}</strong>
          </p>
        </>
      )}
    </div>
  );
}

export default App;
