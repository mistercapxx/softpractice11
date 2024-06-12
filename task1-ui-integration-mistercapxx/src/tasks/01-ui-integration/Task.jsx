import React, {Component} from "react";

import PostsList from "./PostsList";
import NewPostForm from "./NewPostForm";
// import ReactMarkdown from 'react-markdown';
import gfm from 'remark-gfm';


export default class UIIntegrationTask extends Component {
    render() {
        return (
            <div>
                <h3>UI Integration</h3>
                <PostsList />
                <NewPostForm />
                {/* <ReactMarkdown plugins={[gfm]}  /> */}
            </div>
        )
    }
}
