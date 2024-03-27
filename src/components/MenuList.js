import Datamenu from "../Datamenu";
import Menu from "./Menu";
import arrow from "../images/Green Arrow BTN.png"

function MenuList() {
    return (
      <div className="menu-bg">
        <div className="container-all | flow">
          <h2>Our Menu</h2> 
          <div className="flex">
          {Datamenu.map((item) => {
            return (
                <Menu
                  key = {item.id}
                  picture = {item.picture}
                  cakeTitle = {item.cakeTitle}
                  caption = {item.caption}
                  price = {item.price}
                />
            );
          })} 
          </div>

         <p style={{display: "flex", color: "#FFF8E1", marginLeft: "auto"}}><a style={{display: "flex"}}className="menu-link">View More<img style={{width: ".6rem", marginLeft: "5px"}} src={arrow}/></a></p>
        </div>     
         
     </div>
    );
};
  
export default MenuList;