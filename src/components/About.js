import abtimg from "../images/about-image.png"

function About() {
    return (
        <div className="abt-bg">
        <div className="container-all">
            <div className="abt-story">
                <img className="abt-img | width-full" src={abtimg} alt="a cheesecake with blueberries toppings"/>

                <div className="abt-writeup | flow">
                    <h1>We love Cheesecake</h1>
                    <p>Discover our cheesecake story</p>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Totam, illum pariatur officia sunt vel ex voluptate beatae possimus repudiandae itaque nesciunt, maiores qui veniam repellendus expedita eos provident! Delectus, dolore.</p>
                    <p>We believe in delivering not just desserts but moments of sheer indulgence.</p>

                    <button className="btn" type="button" data-type="inverted">Read More</button>
                </div>
            </div>
        </div>
        </div>
    );
};
export default About;