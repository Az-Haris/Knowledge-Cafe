import { useEffect } from "react";
import { useState } from "react";
import Blog from "./Blog";

const Blogs = () => {
    const [blogs, setBlogs] = useState([]);
    useEffect(()=>{
        fetch("blogs.json")
        .then(res => res.json())
        .then(data => setBlogs(data))
    },[]);
    return (
        <div className="col-span-2">
            {
                blogs.map(blog => <Blog key={blog.id} blog={blog}></Blog>)
            }
        </div>
    );
};

export default Blogs;