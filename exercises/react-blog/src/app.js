import React from "react";
import Header from "./header.js";
import BlogPost from "./blog-post";
import Footer from "./footer";


class App extends React.Component {
    constructor(){
        super();
        this.
    }
    genPosts() {
        return this.posts.map((posts)=>) {
    
        }
    }   render() {
        return (
            <div className="app-wrapper">
                <Header/>
                {this.genPosts}
                <BlogPost/>
                <Footer/>
            </div>
        )
    }
}


export default App;