import {connect} from "react-redux";
import {
    follow,
    setCurrentPage,
    setTotalUsersCount,
    setUsers,
    toggleIsFetching,
    unfollow
} from "../../redux/users-reducer";
// import UsersC from "./UsersC";
import UsersAPIComponent from "./UsersC";

let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching
    }
}

// let mapDispatchToProps = (dispatch) => {
//     return {
//         follow: (userId) => {
//             dispatch(follow(userId));
//         },
//         unfollow: (userId) => {
//             dispatch(unfollow(userId));
//         },
//         setUsers: (users) => {
//             dispatch(setUsers(users));
//         },
//         setCurrentPage: (pageNumber)=>{
//             dispatch(setCurrentPage(pageNumber));
//         },
//         setTotalUsersCount: (totalCount)=>{
//             dispatch(setTotalUsersCount(totalCount));
//         },
//         toggleIsFetching : (isFetching) => {
//             dispatch(toggleIsFetching(isFetching));
//         }
//     }
// }
export default connect(mapStateToProps,
    follow, unfollow, setUsers,
    setCurrentPage, setTotalUsersCount, toggleIsFetching
)(UsersAPIComponent);