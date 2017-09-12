import React from "react";

class Article extends React.Component {
    render() {
        return (
            <div className="article-wrapper">
            <img className="pict" src={this.props.info.picture}/>
            <p>{this.props.info.words}</p>
        </div>
        )
    }
}


export default Article;