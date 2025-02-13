import PropTypes from 'prop-types';

const Blog = ({blog}) => {
    return (
        <div>
            <h1>Title : {blog.title}</h1>
        </div>
    );
};

Blog.propTypes = {
    blog: PropTypes.object
};

export default Blog;