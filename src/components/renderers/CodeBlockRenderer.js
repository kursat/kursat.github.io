import {Intent} from '@blueprintjs/core';
import React, {useContext} from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter';
import {anOldHope} from 'react-syntax-highlighter/dist/esm/styles/hljs';
import {AppContext} from '../../contexts/AppContext';

const copyToClipboard = (str) => {
    const el = document.createElement('textarea');
    el.value = str;
    document.body.appendChild(el);
    el.select();
    document.execCommand('copy');
    document.body.removeChild(el);
};

const CodeBlockRenderer = ({language, value}) => {
    const {toaster} = useContext(AppContext);

    if (language === 'embed') {
        return (
            <div
                className={'embed'}
                dangerouslySetInnerHTML={{__html: value}}
            />
        );
    }

    return (
        <div
            onContextMenu={(e) => {
                e.preventDefault();
                e.stopPropagation();
                copyToClipboard(value);

                toaster.show({
                    intent: Intent.PRIMARY,
                    message: `Copied to clipboard!`,
                    timeout: 1000,
                    icon: 'clipboard',
                });
            }}>
            <SyntaxHighlighter
                showLineNumbers={true}
                language={language}
                style={anOldHope}>
                {value}
            </SyntaxHighlighter>
        </div>
    );
};

export default CodeBlockRenderer;
