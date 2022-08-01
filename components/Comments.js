// coffeeclass.io uses giscus for comments. https://giscus.app/

import React, { Component } from "react";
export default class Comments extends Component {
    constructor(props) {
        super(props);
        this.commentBox = React.createRef();
    }

    componentDidMount() {
        let scriptEl = document.createElement("script");
        scriptEl.setAttribute("src", "https://giscus.app/client.js");
        scriptEl.setAttribute("data-repo", "tolem/nextjs-blog");
        scriptEl.setAttribute("data-repo-id", "R_kgDOHkNMXg");
        scriptEl.setAttribute("data-category", "Website Comments");
        scriptEl.setAttribute("data-category-id", "DIC_kwDOHkNMXs4CQhDl");
        scriptEl.setAttribute("data-mapping", "title");
        scriptEl.setAttribute("data-emit-metadata", "0");
        scriptEl.setAttribute("data-input-position", "bottom");
        scriptEl.setAttribute("data-reactions-enabled", "1");
        scriptEl.setAttribute("data-lang", "en");
        scriptEl.setAttribute("data-theme", "preferred_color_scheme");
        scriptEl.setAttribute("crossorigin", "anonymous");
        scriptEl.setAttribute("async", true);
        this.commentBox.current.appendChild(scriptEl);
    }

    render() {
        return (
            <div style={{ width: '100%' }} id="comments">
                <div ref={this.commentBox} />
            </div>
        );
    }
}
