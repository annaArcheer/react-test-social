import s from './Profile.module.css';
import MyPosts from './../Profile/MyPosts/MyPosts'
import ProfileInfo from './ProfileInfo/ProfileInfo'
import MyPostsContainer from "./MyPosts/MyPostsContainer";


// let postsData = [
//     {id:1, message: 'Hi, how are you?', likeCount: 12},
//     {id:1, message: 'It\'s my first post', likeCount: 36},
//     {id:1, message: 'Some message', likeCount: 0},
// ]
const Profile = (props) => {

    // let posts = [
    //     {id: 1, message: 'Hi, how are you?', likeCount: 12},
    //     {id: 1, message: 'It\'s my first post', likeCount: 36},
    //     {id: 1, message: 'Some message', likeCount: 0},
    // ]
    // debugger;

    return (
        <div className={s.content}>
            {/*debugger;*/}
            <ProfileInfo/>
            <MyPostsContainer store={props.store}/>
        </div>
    );
}

export default Profile;