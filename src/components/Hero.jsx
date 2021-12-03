import "./Hero.css";
const Hero = () => {
  return (
    <div className="hero">
      <div className="hero-left">
        <div className="hero-left-heading">
          <p>Welcome to</p>
          <p>
            My<span>Jobs</span>
          </p>
        </div>
        <button className="hero-btn">Get Started</button>
      </div>
      <div className="hero-right"></div>
    </div>
  );
};

export default Hero;
