import {DiscussionEmbed} from 'disqus-react';
import React, {useEffect, useState} from 'react';
import ReactMarkdown from 'react-markdown';
import {useSelector} from 'react-redux';
import {MagicSpinner} from 'react-spinners-kit';
import {postHeaderRegex} from '../constants';
import CodeBlockRenderer from '../components/renderers/CodeBlockRenderer';

const POST_BASE_URL =
    process.env.NODE_ENV === 'production'
        ? 'https://raw.githubusercontent.com/kursat/kursat.github.io/master/blog-content'
        : '/blog-content';

const Post = ({
    match: {
        params: {name},
    },
}) => {
    const [content, setContent] = useState(false);

    const postMetadata = useSelector((state) =>
        state.posts.find((i) => i.fileName === name),
    );

    useEffect(() => {
        fetch(`${POST_BASE_URL}/${name}`)
            .then((res) => res.text())
            .then((text) => text.replace(postHeaderRegex, ''))
            .then((res) =>
                setTimeout(() => {
                    setContent(res);
                }, 0),
            );
    }, [name]);

    return (
        <>
            {content ? (
                <>
                    <h1>{postMetadata && postMetadata.title}</h1>
                    <ReactMarkdown
                        renderers={{code: CodeBlockRenderer}}
                        source={content}
                    />
                    <DiscussionEmbed
                        shortname={'kursat-github-io'}
                        config={{
                            url: window.location.href.replace('#', ''),
                            identifier: window.location.href.replace('#', ''),
                            title: name,
                        }}
                    />
                </>
            ) : (
                <div className={'center-flex'}>
                    <MagicSpinner size={100} color="#5c7080" loading={true} />
                </div>
            )}
        </>
    );
};

Post.propTypes = {};

export default Post;
