import {Classes} from '@blueprintjs/core';
import dayjs from 'dayjs';
import React from 'react';
import {useSelector} from 'react-redux';
import {Link} from 'react-router-dom';

const Blog = () => {
    const posts = useSelector((state) => state.posts);

    return (
        <ul className={Classes.LIST_UNSTYLED}>
            {posts.map((post) => {
                return (
                    <li>
                        <Link to={`/post/${post.fileName}`}>{post.title}</Link>
                        <span> {dayjs(post.date).format('DD-MM-YYYY')}</span>
                    </li>
                );
            })}
        </ul>
    );
};

Blog.propTypes = {};

export default Blog;
