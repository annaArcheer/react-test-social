import styles from './users.module.css';
import axios from "axios";
import userPhoto from "../../assets/images/user.png";
import React from "react";

class Users extends React.Component {
    componentDidMount() {
        axios.get('https://social-network.samuraijs.com/api/1.0/users')
            .then(response => {
                // debugger;
                this.props.setUsers(response.data.items);
                console.log(response.data);

            })
    }

    getUsers = () => {
        if (this.props.users.length === 0) {

        }
        console.log('button');
    }
    render() {
        return <div>
            <div>
                <span>1</span>
                <span className={styles.selectedBtn}>2</span>
                <span>3</span>
                <span>4</span>
                <span>5</span>
            </div>
            <button onClick={this.getUsers}>Get USERS</button>
            {this.props.users.map(u => <div key={u.id}>
                <div>
                    <div><img src={u.photos.small != null ? u.photos.small : userPhoto} className={styles.userPhoto}
                              alt=""/></div>
                    <div>
                        {u.followed
                            ? <button onClick={() => {
                                this.props.unfollow(u.id)
                            }}>Unfollow</button>
                            : <button onClick={() => {
                                this.props.follow(u.id)
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
}

export default Users;