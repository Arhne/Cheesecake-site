import Blogdata from "../Blogdata";
import Blog from "./blog";

function BlogList() {
    return (
      <div className="blog-bg">
        <div className="container-all">
          <h2 className="blogTitle" style={{fontSize: "3rem"}}>Our Blog</h2> 
          <p className="blogTitle" style={{fontSize: ".9rem"}}>Our Recent Post</p>
          <div className="flex">
          {Blogdata.map((eachitem) => {
            return (
                <Blog
                  key = {eachitem.id}
                  blogimg = {eachitem.blogimg}
                  timestamp = {eachitem.timestamp}
                  title = {eachitem.title}
                  content = {eachitem.content}
                />
            );
          })} 
          </div>

        </div>       
     </div>
    );
};
  
export default BlogList;