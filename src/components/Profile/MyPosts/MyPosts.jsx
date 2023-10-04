import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';

// let posts = [
//     {id:1, message: 'Hi, how are you?', likeCount: 12},
//     {id:1, message: 'It\'s my first post', likeCount: 36},
//     {id:1, message: 'Some message', likeCount: 0},
// ]

// const postsElements = postsData.map(p => (
//     <Post key={p.id} message={p.message} likesCounter={p.likeCount} />
// ));

let addPostActionCreator = () => {
    const ADD_POST = 'ADD-POST';
    return {
        type: ADD_POST
    }
}

let updateNewPostTextActionCreator = (text) => {
    const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
    return {
        type: UPDATE_NEW_POST_TEXT,
        newText: text
    }
}

const MyPosts = (props) => {
//     let posts = [
//     {id:1, message: 'Hi, how are you?', likeCount: 12},
//     {id:1, message: 'It\'s my first post', likeCount: 36},
//     {id:1, message: 'Some message', likeCount: 0},
// ]

    const postsElements = props.posts.map(p => (
        <Post key={p.id} message={p.message} likesCounter={p.likeCount}/>
    ));

    let newPostElement = React.createRef();

    let addPost = () => {
        // debugger;
        let text = newPostElement.current.value;
        props.dispatch(addPostActionCreator())
        // newPostElement.current.value = '';
        // props.updatePost('');
    }

    let onPostChange = () => {
        let text = newPostElement.current.value;
        console.log(text);
        let action = {type: 'UPDATE-NEW-POST-TEXT', newText: text};
        props.dispatch(updateNewPostTextActionCreator(text));

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