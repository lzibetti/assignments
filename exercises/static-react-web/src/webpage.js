import React from "react";
import Article from "./article.js";

class Webpage extends React.Component {
    constructor() {
        super();
        this.articleInfo={
            words: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris facilisis venenatis maximus. Duis sagittis porttitor mauris. Sed leo odio, dictum eget est in, ullamcorper lobortis nunc. In auctor ac est et sodales. Proin tempor iaculis sagittis. Aliquam erat volutpat. Maecenas eleifend pulvinar felis, ac feugiat dui mollis quis. Nam porta massa id turpis vestibulum ultrices. Ut at enim a metus interdum pulvinar et vitae magna.
            
            Nam a aliquam elit, at maximus dui. Praesent gravida quis lectus eget dapibus. Etiam quis malesuada nunc, sed suscipit elit. Sed eget dui ut augue aliquam maximus eget nec lectus. Nunc eget sem erat. Ut consequat lorem orci, vel laoreet quam sollicitudin tincidunt. Proin dignissim mauris a nibh condimentum blandit in et mi. Quisque id odio at tortor gravida luctus finibus laoreet est. Proin massa neque, scelerisque vel tincidunt nec, feugiat eu nisl. Donec in fringilla ante. Nunc ac massa luctus, efficitur ipsum ac, condimentum mi. Morbi laoreet ligula tempus turpis pulvinar interdum. Nam id euismod nisi, eget consequat velit. Aliquam et nisi at mi cursus porta.
            
            Aenean lorem elit, dignissim quis enim at, cursus ultrices lorem. Integer nec felis vel magna gravida ornare eget id eros. Praesent ex turpis, hendrerit id augue sit amet, maximus sagittis erat. Vivamus porta arcu sit amet dolor interdum, faucibus pharetra odio eleifend. Etiam venenatis elementum turpis, sit amet porta orci laoreet in. Fusce blandit vulputate tellus sollicitudin venenatis. Nulla tincidunt sapien risus, ut molestie felis cursus quis. Integer id orci vitae felis commodo maximus.
            
            Nam venenatis suscipit dolor vel finibus. Proin rutrum, enim tempus laoreet pharetra, nulla sapien tristique libero, sit amet vestibulum felis neque ut libero. Aenean a mauris eu ex elementum auctor. Donec condimentum libero id ultrices ultricies. Suspendisse porta dapibus tincidunt. Quisque vel elementum elit. Etiam lobortis eleifend elit id blandit. Fusce in ligula cursus, ultricies sem at, aliquam ex. Etiam nec convallis purus, sit amet molestie turpis.
            
            Aliquam suscipit porttitor eros, ut accumsan magna dapibus vitae. Proin at gravida odio. Ut sed feugiat lectus. Etiam elementum sed lectus fringilla porta. Nulla luctus mauris congue ex cursus, eu posuere sem molestie. Nulla semper volutpat congue. Nam congue porta sem in auctor. Ut lacinia, metus ut venenatis sodales, risus orci mollis ex, id venenatis enim ipsum a leo. Duis eget pharetra tellus, ac pharetra magna. Vestibulum laoreet pretium sem vitae efficitur.`,
            picture: "https://cdn.pixabay.com/photo/2017/01/06/19/15/soap-bubble-1958650_960_720.jpg"
        }
        this.articleInfo1={
            words: "blah blahblah blahblah blahblah blahblah blahblah blah",
            picture: ""
        }
    }
    render() {
        return (
            <div className="page-content">
            <Article info={this.articleInfo}/>
            <Article info={this.articleInfo1}/>
            
            </div>
        )
    }
};


export default Webpage;