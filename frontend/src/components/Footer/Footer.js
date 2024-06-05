import React from "react";
import Logo from "../Logo/Logo";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer-main">
      <div className="footer-body1">
        <div className="footer-left">
          <Logo className="footer-logo" logoImage="logo3.png" />
          <p className="footer-intro">
            Hello there, welcome to TradeGlobaX! TradeGlobaX is your go-to
            crypto simulation platform designed for both beginners and
            experienced traders to hone their skills in a risk-free environment.
            Whether you're looking to explore the exciting world of
            cryptocurrencies or refine your trading strategies, TradeGlobaX
            offers the perfect sandbox for you.
          </p>
        </div>

        <div className="footer-col">
          <div className="col-header"> About TradeGlobaX </div>
          <div className="col-list">
            <a href="">hello</a>
            <a href="">hello</a>
            <a href="">hello</a>
            <a href="">hello</a>
          </div>
        </div>

        <div className="footer-col">
          <div className="col-header"> Resources </div>
          <div className="col-list">
            <a href="">hello</a>
            <a href="">hello</a>
            <a href="">hello</a>
          </div>
        </div>

        <div className="footer-col">
          <div className="col-header"> Support</div>
          <div className="col-list">
            <a href="">hello</a>
            <a href="">hello</a>
            <a href="">hello</a>
          </div>
        </div>
      </div>
      <hr />

      <div className="footer-body2">
        <div className="footer-body2-left">
          <div className="footer-line1">
            Interested to stay up-to-date with cryptocurrencies?
          </div>
          <div className="footer-line2">
            Get the latest crypto news, updates, and reports by subscribing to
            our free newsletter.
          </div>
        </div>
        <div className="footer-body2-right">
          <div className="email-button-container">
            <input
              type="email"
              placeholder="Enter your email address"
              className="footer-body2-email"
            />
            <button className="footer-body2-button">Subscribe</button>
          </div>
        </div>
      </div>

      <div className="footer-body3">
        <div className="rights">© 2024 TradeGlobaX. All Rights Reserved.</div>
        <div className="disclaimer">IMPORTANT DISCLAIMER: </div>
        <div className="disclaimer-info">
          All content provided herein our website, hyperlinked sites, associated
          applications, forums, blogs, social media accounts and other platforms
          (“Site”) is for your general information only, procured from third
          party sources. We make no warranties of any kind in relation to our
          content, including but not limited to accuracy and updatedness. No
          part of the content that we provide constitutes financial advice,
          legal advice or any other form of advice meant for your specific
          reliance for any purpose. Any use or reliance on our content is solely
          at your own risk and discretion. You should conduct your own research,
          review, analyse and verify our content before relying on them. Trading
          is a highly risky activity that can lead to major losses, please
          therefore consult your financial advisor before making any decision.
          No content on our Site is meant to be a solicitation or offer.
        </div>
      </div>
    </div>
  );
};

export default Footer;
