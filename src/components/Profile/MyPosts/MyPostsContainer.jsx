import React from 'react';
import {addPostActionCreator, updateNewMessageBodyActionCreator} from "../../../redux/profile-reducer";
import MyPosts from "./MyPosts";
import StoreContext from "../../../StoreContext";

const MyPostsContainer = () => {
    // debugger;
    // let state = props.store.getState();
    return (
        <StoreContext.Consumer>
            { store => {
                    let state = store.getState();
                    let addPost = () => {
                        store.dispatch(addPostActionCreator())
                    }
                    let onPostChange = (text) => {
                        let action = {type: 'UPDATE-NEW-POST-TEXT', newText: text};
                        store.dispatch(action);
                    }

                    return <MyPosts updateNewPostText={onPostChange}
                                    addPost={addPost}
                                    posts={state.profilePage.posts}
                                    newPostText={state.profilePage.newPostText}/>
                }
            }
        </StoreContext.Consumer>
    );
}

export default MyPostsContainer;