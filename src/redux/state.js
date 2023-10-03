// import {rerenderedEntireTree} from "../render";
let rerenderedEntireTree = () => {
    console.log('State changed');
}

let state = {
    profilePage: {
        posts: [
            {id: 1, message: 'Hi, how are you?', likeCount: 12},
            {id: 1, message: 'It\'s my first post', likeCount: 36},
            {id: 1, message: 'Some message', likeCount: 0},
        ],
        newPostText: '',
        testABC: 'testText'
    },
    messagessPage: {
        dialogs: [
            {id: 1, name: 'Dimych1'},
            {id: 2, name: 'Dimych2'},
            {id: 3, name: 'Dimych3'},
            {id: 4, name: 'Dimych4'},
            {id: 5, name: 'Dimych5'},
            {id: 6, name: 'Dimych6'},
        ],
        messagess: [
            {id: 1, message: 'Hi!'},
            {id: 1, message: 'Lorem!'},
            {id: 1, message: 'YO!'},
            {id: 1, message: 'YO!'},
        ]
    }
}

export const addPost = () => {
    // debugger;
   let newPost = {
       id: 5,
       message: state.profilePage.newPostText,
       likeCount: 0
   }
    state.profilePage.posts.push(newPost);
    state.profilePage.newPostText = '';
    rerenderedEntireTree(state);
}

export const updateNewPostText = (newText) => {
    state.profilePage.newPostText = newText;
    rerenderedEntireTree(state);
}

export const subscribe = (observer) => {
    rerenderedEntireTree = observer;
}
export default state;