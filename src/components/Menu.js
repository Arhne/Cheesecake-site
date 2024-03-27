import dollarSign from "../images/dollerSign.png";
import stars from "../images/STARS.png";

function Menu(props) {
    return (
            <div className="menu-showcase">
                
                
                    <img className="menuimg" src={props.picture} alt=""/>
                
                
                <div className="flow">
                    <figure>
                        <h4>{props.cakeTitle}</h4>
                        <figcaption>{props.caption}</figcaption>
                    </figure>

                    <div class="price">
                        <div>
                        <img className="dollarimg" src={dollarSign} alt="dollar sign" />
                        {props.price}
                        </div>
                        <img className="starimg" src={stars} alt="star rating"/>
                    </div>
                </div>

            </div>

    );
};
  
export default Menu;