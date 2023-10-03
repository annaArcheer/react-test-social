import s from './Post.module.css';

const Post = (posts) => {
    return ( 
        <div className={s.item}>
            <div>
                <img src='https://variety.com/wp-content/uploads/2021/04/Avatar.jpg?w=800&h=533&crop=1' alt='avatar' />
                    <div className={s.message}>
                        {posts.message}
                    </div>
                    <span>Like {posts.likesCounter}</span>
            </div>
        </div>

    );
}

export default Post;