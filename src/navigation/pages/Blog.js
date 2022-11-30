import "./Blog.css";
import Card from "../../components/Card";
import BlogData from "../../Data";

function Blog() {
    return (
        <div className="blogGrid">
            {BlogData.map((obj, index) => {
                return (
                    <Card key={index} url={obj.img_url} title={obj.title} id={obj.id} />
                );
            })}
        </div>
    );
}
export default Blog;