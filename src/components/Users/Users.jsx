import styles from './users.module.css';
import userPhoto from "../../assets/images/user.png";
import {NavLink} from "react-router-dom";

let Users = (props) => {
    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
    let pages = [];

    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }

    return <div>
        <div>
            {pagesCount}
            {pages.map(p => {
                // debugger;
                return <span className={props.currentPage === p && styles.selectedBtn}
                             onClick={(e) => {
                                 props.onPageChanged(p)
                             }}>{p}</span>
            })}
        </div>
        <button onClick={props.getUsers}>Get USERS</button>
        {props.users.map(u => <div key={u.id}>
            <div>

                <div>
                    <NavLink to={'/propfile/' + u.id}>
                        <img src={u.photos.small != null ? u.photos.small : userPhoto} className={styles.userPhoto}
                             alt=""/>
                    </NavLink>
                </div>
                <div>

                    {u.followed
                        ? <button onClick={() => {
                            props.unfollow(u.id)
                        }}>Unfollow</button>
                        : <button onClick={() => {
                            props.follow(u.id)
                        }}>Follow</button>
                    }
                </div>
            </div>
            <div>
                <div>
                    <div>{u.name}</div>
                    <div>{u.status}</div>
                </div>
                <div>
                    <div>{'u.location.country'}</div>
                    <div>{'u.location.city'}</div>
                </div>
            </div>
        </div>)}
    </div>
}

export default Users;