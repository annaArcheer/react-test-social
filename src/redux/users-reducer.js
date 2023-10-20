const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';

let initialState = {
    users: [],
    newPostText: '',
    testABC: 'testText'
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
            return {...state, users: [ ...state.users, ...action.userId]}
        }
        default:
            return state;
    }

}

export const followAC = (userId) => {return {type: FOLLOW, userId}}
export const unfollowAC = (userId) => {return {type: UNFOLLOW, userId}}
export const setUsersAC = (userId) => {return {type: SET_USERS, userId}}

export default usersReducer;