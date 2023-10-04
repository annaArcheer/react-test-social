import s from './Profile.module.css';
import MyPosts from './../Profile/MyPosts/MyPosts'
import ProfileInfo from './ProfileInfo/ProfileInfo'


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

    return (
        <div className={s.content}>
            {/*debugger;*/}
            <ProfileInfo/>
            <MyPosts posts={props.posts}
                     // newPostText={props.profilePage.newPostText}
                     dispatch = {props.dispatch}
            />
        </div>
    );
}

export default Profile;