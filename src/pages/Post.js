import {DiscussionEmbed} from 'disqus-react';
import React, {useEffect, useState} from 'react';
import ReactMarkdown from 'react-markdown';
import {useSelector} from 'react-redux';
import {MagicSpinner} from 'react-spinners-kit';
import {postHeaderRegex} from '../constants';
import CodeBlockRenderer from '../components/renderers/CodeBlockRenderer';

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
        fetch(`/blog-content/${name}`)
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
                        shortname={window.location.href}
                        config={{
                            url: window.location.href,
                            identifier: window.location.href,
                            title: window.location.href,
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
