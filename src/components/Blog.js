import React from 'react';
import {Link} from 'react-router-dom';

const Blog = () => {
    return (
        <div>
            <p>Blog</p>
            <Link to={'/'}>Home</Link>
        </div>
    );
};

Blog.propTypes = {};

export default Blog;
