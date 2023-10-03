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
        props.addPost(text)
        // newPostElement.current.value = '';
        // props.updatePost('');
    }

    let onPostChange = () => {
        let text = newPostElement.current.value;
        console.log(text);
        props.updatePost(text);
    }

    // debugger;

    return (
        <div className={s.postsBlock}>
            <h3>my posts</h3>
            <div>
                <div>
                     <textarea ref={newPostElement}
                               value={props.testA}
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