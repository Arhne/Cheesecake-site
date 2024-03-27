import Heroimg from "../images/home-img.png";

function Hero() {
    return (
      <div className="container-all">
       <div className="hero">

            <div className="hero-Writeup | flow">
                <h1>Bite the world of cheesecake wonders</h1>
                <p>We always make our customers happy by providing<br/>as many choices aspossible.</p>
                <button className="btn btnGap | " type="button" data-type="inverted">Get Started</button>
                <button className="btn" type="button"><span></span>Watch Demo</button>
            </div>

            <div className="hero-img">
                <img className="width-full" src={Heroimg} alt=""/>
            </div>

        </div>
      </div>
    );
  }
  
  export default Hero;