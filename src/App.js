import React, { useState } from "react";
import { ReactComponent as HomeIconComponent } from "./icons/Home.svg";
import { ReactComponent as PlayIconComponent } from "./icons/Play.svg";
import { ReactComponent as GroupIconComponent } from "./icons/Group.svg";
import { ReactComponent as HelpIconComponent } from "./icons/HELP.svg";
import SearchIcon from "./icons/search.svg";
import NotificationIcon from "./icons/notification.svg";
import CoinIcon from "./icons/coin.svg";
import UpCoinIcon from "./icons/upcoin.svg";
import EducationIcon from "./icons/Education.svg";
import image1 from "./images/image1.png";
import image2 from "./images/image2.png";
import image3 from "./images/image3.png";
import image4 from "./images/image4.png";
import image5 from "./images/image5.png";
import image6 from "./images/image6.png";
import image7 from "./images/image7.png";
import image8 from "./images/image8.png";
import ProfileImage from "./images/sidebar/profile1.png";
import { ReactComponent as ArrowLeftIcon } from "./icons/arrow-left.svg";
import { ReactComponent as ArrowRightIcon } from "./icons/arrow-right.svg";


const images = [image1, image2, image3, image4, image5, image6, image7, image8];

function Tab({ tabName, activeTab, setActiveTab }) {
  return (
    <div
      className={`tab ${activeTab === tabName ? "active" : ""}`}
      onClick={() => setActiveTab(tabName)}
    >
      {tabName}
    </div>
  );
}

function Card({ image, cardNumber, handleExpand, index, isExpanded }) {
  return (
    <div className="playlist-card" onClick={() => handleExpand(index)}>
      <img src={image} alt={`Card ${cardNumber}`} className="card-image" />
      {!isExpanded && (
        <>
          <div className="card-top-icons">
            <div className="coin-icon-container">
              <img src={CoinIcon} alt="Coin" />
              <img src={UpCoinIcon} alt="UpCoin" className="upcoin-overlay" />
            </div>
            <img src={EducationIcon} alt="Education" />
          </div>
          <div className="card-text">
            <p>Line 1 of Text</p>
          </div>
        </>
      )}
    </div>
  );
}

function App() {
  const [activeTab, setActiveTab] = useState("All");
  const [expandedSection, setExpandedSection] = useState(null);
  const [hoveredIcon, setHoveredIcon] = useState(null);

  const handleExpand = (index) => {
    if (expandedSection !== index) {
      setExpandedSection(index);
    } else {
      setExpandedSection(null);
    }
  };

  return (
    <div
      className={`app-container ${
        expandedSection !== null ? "expanded-background" : ""
      }`}
    >
      <div className="overlay-background"></div>
      <aside className="sidebar">
        <div className="parent-element-class">
          <div className="notification-icon-container">
            <img src={NotificationIcon} alt="Notifications" />
          </div>
          <div className="profile">
            <img src={ProfileImage} alt="Profile" />
          </div>
        </div>
        <div className="search-bar">
          <input type="text" placeholder="Search" />
          <img src={SearchIcon} alt="Search" className="search-icon" />
        </div>
        <div className="top-menu-items">
          <div className="menu-item">
            <HomeIconComponent
              className="icon"
              alt="Home"
              style={
                hoveredIcon === "home" ? { fill: "#fff" } : { fill: "#999" }
              }
              onMouseEnter={() => setHoveredIcon("home")}
              onMouseLeave={() => setHoveredIcon(null)}
            />{" "}
            Home
          </div>
          <div className="menu-item">
            <PlayIconComponent
              className="icon"
              alt="Play"
              style={
                hoveredIcon === "play" ? { fill: "#fff" } : { fill: "#999" }
              }
              onMouseEnter={() => setHoveredIcon("play")}
              onMouseLeave={() => setHoveredIcon(null)}
            />{" "}
            Watch
          </div>
          <div className="menu-item">
            <GroupIconComponent
              className="icon"
              alt="Group"
              style={
                hoveredIcon === "group" ? { fill: "#fff" } : { fill: "#999" }
              }
              onMouseEnter={() => setHoveredIcon("group")}
              onMouseLeave={() => setHoveredIcon(null)}
            />{" "}
            Community
          </div>
        </div>

        <div className="bottom-menu-items">
          <div style={{ flexGrow: 1 }}></div>

          <div className="menu-item">
            <HelpIconComponent
              className="icon help-icon"
              alt="Help"
              style={
                hoveredIcon === "help" ? { fill: "#fff" } : { fill: "#999" }
              }
              onMouseEnter={() => setHoveredIcon("help")}
              onMouseLeave={() => setHoveredIcon(null)}
            />{" "}
            Help
          </div>
        </div>
      </aside>
      <div className="main-content">
        <header className="academy-header">
          <div className="academy-title-container">
            <ArrowLeftIcon className="arrow-left-icon" alt="Back" />
            <h2>Academy</h2>
          </div>
          <div className="tabs">
            {["All", "Stocks", "ETFs", "Crypto", "NFTs"].map((tabName) => (
              <Tab
                key={tabName}
                tabName={tabName}
                activeTab={activeTab}
                setActiveTab={setActiveTab}
              />
            ))}
          </div>
        </header>
        <section className="content">
          {[
            [1, 2, 3, 4],
            [5, 6, 7, 8],
          ].map((cardGroup, index) => (
            <div
              key={index}
              className={`card-section ${
                expandedSection === index ? "expanded" : ""
              }`}
            >
              <h3 className="section-subtitle">
                {index === 0 ? "New Playlist" : "Trending"}
              </h3>
              <div className="card-content">
                <div className="card-row">
                  {cardGroup.map((card) => (
                    <Card
                      key={card}
                      image={images[card - 1]}
                      cardNumber={card}
                      handleExpand={handleExpand}
                      index={index}
                      isExpanded={expandedSection === index}
                    />
                  ))}
                </div>
              </div>
              {expandedSection === null || expandedSection === index ? (
                <button
                  className="expand-button"
                  onClick={() => handleExpand(index)}
                >
                  {expandedSection === index ? "Skip" : "See All"}
                  {expandedSection !== index && (
                    <ArrowRightIcon className="arrow-right-icon" alt="Expand" />
                  )}
                </button>
              ) : null}
            </div>
          ))}
        </section>
      </div>
    </div>
  );
}

export default App;
