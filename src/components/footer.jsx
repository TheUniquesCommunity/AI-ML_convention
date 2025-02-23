import React from "react";

const handleScroll = (id) => {
  const element = document.getElementById(id);
  if (element) {
    element.scrollIntoView({ behavior: "smooth", block: "start" });
  }
};

const NavigationLinks = () => {
  return (
    <div className="content">
      <div className="cE" onClick={() => handleScroll('mission')}>Our Mission</div>
      <div className="cE" onClick={() => handleScroll('what-we-do')}>What We Do</div>
      <div className="cE" onClick={() => handleScroll('connecting')}>Connecting Markets & Companies</div>
      <div className="cE" onClick={() => handleScroll('team')}>Meet Our Team</div>
    </div>
  );
};

const Footer = () => {
  return (
    <div>
      <NavigationLinks />
      <div id="mission">
        <h2>Our Mission</h2>
        <p>...</p>
      </div>

      <div id="what-we-do">
        <h2>What We Do</h2>
        <p>...</p>
      </div>

      <div id="connecting">
        <h2>Connecting Markets & Companies</h2>
        <p>...</p>
      </div>

      <div id="team">
        <h2>Meet Our Team</h2>
        <p>...</p>
      </div>
    </div>
  );
};

export default Footer;