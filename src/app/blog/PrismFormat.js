'use client';

import { useEffect } from "react";
import Markdown from "react-markdown";
import prism from 'prismjs';

require('prismjs/components/prism-javascript')
require('prismjs/components/prism-css')
require('prismjs/components/prism-jsx')

export default function PrismFormat({ content }) {
    useEffect(() => {
        prism.highlightAll();
    }, []);

    return (
        <>
            <Markdown
                className="markdown-content"
                children={content}
            />
        </>
    );
}