import axios from "axios";
import React from "react";
import Users from "./Users";
import Preloader from "../Preloader/Preloader";

class UsersAPIComponent extends React.Component {
    componentDidMount() {
        this.props.toggleIsFetching(true);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
            .then(response => {
                // debugger;
                this.props.toggleIsFetching(false);
                this.props.setUsers(response.data.items);
                this.props.setTotalUsersCount(response.data.totalCount);
                console.log(response.data);

            })
    }

    onPageChanged = (pageNumber) => {
        this.props.setCurrentPage(pageNumber);
        this.props.toggleIsFetching(true);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
            .then(response => {
                debugger;
                this.props.toggleIsFetching(false);
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


        return <>
            {this.props.isFetching ? <Preloader/> : null}
            <Users totalUsersCount={this.props.totalUsersCount}
                   pageSize={this.props.pageSize}
                   currentPage={this.props.currentPage}
                   onPageChanged={this.onPageChanged}
                   users={this.props.users}
                   follow={this.props.follow}
                   unfollow={this.props.unfollow}
                   getUsers={this.getUsers}
            />
        </>

    }
}

export default UsersAPIComponent;