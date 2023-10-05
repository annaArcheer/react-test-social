import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";

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

        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.messagessPage = dialogsReducer(this._state.messagessPage, action);

        this._callSubscriber(this._state);

    }
}


export default store;