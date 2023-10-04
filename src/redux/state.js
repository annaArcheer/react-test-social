const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY';
const SEND_MESSAGE = 'SEND-MESSAGE';

let store = {
    _state: {
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
                {id: 2, message: 'Lorem!'},
                {id: 3, message: 'YO!'},
                {id: 4, message: 'YO!'},
            ],
            newMessagesBody: 'message'
            // newMessagesText: 'message'
        }
    },
    getState() {
        // debugger;
        return this._state;
    },
    _callSubscriber() {
        console.log('State changed');
    },


    subscribe(observer) {
        this._callSubscriber = observer;
    },
    dispatch(action){//{type: 'EXAMPLE'}
        if (action.type === ADD_POST){
            let newPost = {
                id: 5,
                message: this._state.profilePage.newPostText,
                likeCount: 0
            }
            this._state.profilePage.posts.push(newPost);
            this._state.profilePage.newPostText = '';
            this._callSubscriber(this._state);
        } else if (action.type === UPDATE_NEW_POST_TEXT){
            this._state.profilePage.newPostText = action.newText;
            this._callSubscriber(this._state);
        } else if (action.type === UPDATE_NEW_MESSAGE_BODY) {
            this._state.messagessPage.newMessagesBody = action.body;
            this._callSubscriber(this._state);
        } else if (action.type === SEND_MESSAGE) {
            let newMessagesBody = action.body;
            let body = this._state.messagessPage.newMessagesBody;
            console.log(body + ' body')
            this._state.messagessPage.messagess.push({id: 6, message: body});
            this._state.messagessPage.newMessagesBody = '';

            this._callSubscriber(this._state);
        }
    }
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

export const sendMessageActionCreator = (body) => {

    return {
        type: UPDATE_NEW_MESSAGE_BODY,
        newMessagesBody: body
    }
}

export const updateNewMessageTextActionCreator = (body) => {

    return {
        type: SEND_MESSAGE,
        newMessagesBody: body
    }
}

export default store;