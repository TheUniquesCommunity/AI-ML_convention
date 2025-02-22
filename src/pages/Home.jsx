

import profilePic from "../assets/profile.jpg"; // Add your image in src/assets/

const Home = () => {
  return (
    <div className="hero">
      <div className="hero-text">
        <h1>Professional <span className="highlight">consulting</span> for your app & software.</h1>
        <p>Hey there! i'm John Parker. Coding consultant focused on coding and deployment solutions.</p>
        <div className="hero-buttons">
          <button className="btn-primary">Let's Talk</button>
          <button className="btn-secondary">See Case Studies</button>
        </div>
      </div>
      <div className="hero-image">
        <img src={profilePic} alt="John Parker" />
      </div>
    </div>
  );
};

export default Home;
