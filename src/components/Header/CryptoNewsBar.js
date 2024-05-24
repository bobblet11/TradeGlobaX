import "./Header.css";
export default function CryptoNewsBar() {
  return (
    <div className="left-bar crypto-news-bar">
      <div className="crypto-news-component">Coins: 14,438</div>
      <div className="crypto-news-component">Exchanges: 1,101</div>
      <div className="crypto-news-component">Market Cap: $2.636T 3.7%</div>
      <div className="crypto-news-component">24h Vol:$159.195B</div>
      <div className="crypto-news-component">Dominance: BTC 50.2%</div>
      <div className="crypto-news-component">ETH 16.7%</div>
      <div className="crypto-news-component">Gas: 13 GWEI</div>
    </div>
  );
}
