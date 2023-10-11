import {addPostActionCreator, updateNewMessageBodyActionCreator} from "../../../redux/profile-reducer";
import MyPosts from "./MyPosts";
import {connect} from "react-redux";

let mapStateToProps = (state)=>{
    return {
        posts: state.profilePage.posts,
        newPostText: state.profilePage.newPostText
    }
}
let mapConnectToProps = (dispatch)=>{
    return {
        updateNewPostText: (text)=>{
            let action = {type: 'UPDATE-NEW-POST-TEXT', newText: text};
            dispatch(action);
        },
        addPost: ()=>{
            dispatch(addPostActionCreator())
        }
    }
}

const MyPostsContainer =
    connect(mapStateToProps, mapConnectToProps)(MyPosts);

export default MyPostsContainer;