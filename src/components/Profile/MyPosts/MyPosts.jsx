import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';
import {addPostActionCreator, updateNewMessageBodyActionCreator} from "../../../redux/profile-reducer";

const MyPosts = (props) => {

    const postsElements = props.posts.map(p => (
        <Post key={p.id} message={p.message} likesCounter={p.likeCount}/>
    ));

    let newPostElement = React.createRef();

    let addPost = () => {
        // debugger;
        let text = newPostElement.current.value;
        props.dispatch(addPostActionCreator())
    }

    let onPostChange = () => {
        let text = newPostElement.current.value;
        console.log(text);
        let action = {type: 'UPDATE-NEW-POST-TEXT', newText: text};
        props.dispatch(updateNewMessageBodyActionCreator(text));

    }

    // debugger;

    return (
        <div className={s.postsBlock}>
            <h3>my posts</h3>
            <div>
                <div>
                     <textarea ref={newPostElement}
                               onChange={onPostChange}/>
                </div>
                <div>
                    <button onClick={addPost}>Add Post</button>
                    <button>Remove Post</button>
                </div>
            </div>
            <div className='myPosts'>
                {postsElements}
            </div>
        </div>
    );
}

export default MyPosts;