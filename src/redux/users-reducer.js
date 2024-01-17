const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT';
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';

let initialState = {
    users: [],
    newPostText: '',
    testABC: 'testText',
    pageSize: 2,
    totalUsersCount: 20,
    currentPage: 4,
    isFetching: false
}
const usersReducer = (state = initialState, action) => {

    switch (action.type) {
        case FOLLOW: {
              return {
                  ...state,
                  users: state.users.map(u => {
                      if (u.id === action.userId){
                        return {...u, folowed: true}
                      }
                      return u;
                  })
              }
        }
        case UNFOLLOW: {
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId){
                        return {...u, folowed: false}
                    }
                    return u;
                })
            }
        }
        case SET_USERS: {
            // debugger;
            return {...state, users: action.users }
        }
        case SET_CURRENT_PAGE: {
            // debugger;
            return {...state, currentPage: action.currentPage}
        }
        case SET_TOTAL_USERS_COUNT: {
            // debugger;
            return {...state, totalUsersCount: action.count}
        }
        case TOGGLE_IS_FETCHING: {
            // debugger;
            return {...state, isFetching: action.isFetching}
        }
        default:
            return state;
    }

}

export const follow = (userId) => {return {type: FOLLOW, userId}}
export const unfollow = (userId) => {return {type: UNFOLLOW, userId}}
export const setUsers = (userId) => {return {type: SET_USERS, userId}}
export const setCurrentPage = (currentPage) => {return {type: SET_CURRENT_PAGE, currentPage}}
export const setTotalUsersCount = (totalUsersCount) => {return {type: SET_TOTAL_USERS_COUNT, count: totalUsersCount}}
export const toggleIsFetching = (isFetching) => {return {type: TOGGLE_IS_FETCHING, isFetching}}
export default usersReducer;