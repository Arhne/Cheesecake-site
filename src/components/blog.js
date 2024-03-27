

function Blog(props) {
    return(
        <div className="blog-showcase">
        
        <img style={{marginBottom: "15px"}} className="width-full" src={props.blogimg} alt=""/>
        
           
            <div className="flow">
                <p style={{color: "#BB6939"}}>{props.timestamp}</p>
                <h4 style={{color: "#734B33", fontSize: "1.13rem"}}>{props.title}</h4>
                <p style={{color: "#704B33", fontSize: ".9rem"}}>{props.content}</p>
                <p style={{color: "#734B33"}}><a>Read More</a></p>
            </div>
        </div>
           
    );
};
export default Blog;