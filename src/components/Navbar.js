import logo from "../images/cheesecake-logo.svg";
import hamburger from "../images/icon-hamburger.svg";

function Navbar() {
    return (
        
        <header>
            <div className="nav-wrapper container-all">
                <a href="#"><img src={ logo } alt=""/></a>

                <nav className="nav-menu | display-bg">
                    <ul className="nav-list">
                        <li className="active"><a href="/">Home</a></li>
                        <li><a href="/About Us">About Us</a></li>
                        <li><a href="/Menu">Menu</a></li>
                        <li><a href="/Contact">Contact</a></li>
                    </ul>
                </nav>

                <button className="btn | display-bg" type="button">sign up</button>
                <button className="hamburger-icon" type="button"><img src={hamburger} /></button>
            </div>
        </header>
      
    );};

export default Navbar;