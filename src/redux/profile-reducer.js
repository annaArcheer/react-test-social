const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

const profileReducer = (state, action) => {

    switch (action.type) {
        case ADD_POST:
            let newPost = {
                id: 5,
                message: state.newPostText,
                likeCount: 0
            }
            state.posts.push(newPost);
            state.newPostText = '';
        case UPDATE_NEW_POST_TEXT:
            state.newPostText = action.newText;
        default:
            return state;
    }

    return state;
}

export const addPostActionCreator = () => {

    return {
        type: ADD_POST
    }
}

export const updateNewMessageBodyActionCreator = (text) => {

    return {
        type: UPDATE_NEW_POST_TEXT,
        newText: text
    }
}

export default profileReducer;