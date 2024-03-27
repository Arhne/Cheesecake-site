import Navbar from "./components/Navbar";
import Background from "./images/home-bg.png";
import Hero from "./components/Hero";
import About from "./components/About";
import MenuList from "./components/MenuList";
import BlogList from "./components/blogList";
import Footer from "./components/footer";

function Home() {
    return (
      <div>
      <div style={{
        backgroundImage: `url(${Background})`, 
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundSize: "cover"
      }}>
      <Navbar />
      <Hero />
      </div>
      <About />
      <MenuList />
      <BlogList />
      <Footer />
      </div>
    );
  }
  
  export default Home;