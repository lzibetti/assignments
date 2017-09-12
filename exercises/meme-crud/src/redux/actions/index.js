// write my global functions to export
export function addPost(meme){
    return {
        type: "ADD_POST",
        meme
    }
}