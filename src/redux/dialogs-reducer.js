const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY';
const SEND_MESSAGE = 'SEND-MESSAGE';

let initialState = {
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
    // newMessagesBody: ' '
    newMessagesText: 'message'
};
const dialogsReducer = (state = initialState, action) => {

    // let stateCopy;

    // debugger;

    switch (action.type) {
        case UPDATE_NEW_MESSAGE_BODY:
            return {
                ...state,
                newMessagesBody: action.body
            };
            debugger;
        case SEND_MESSAGE:
            let body = state.newMessagesBody;
            console.log(body + ' body')
            return {
                ...state,
                newMessagesBody: '',
                messagess: [...state.messagess, {id: 6, message: body}]
            };

            debugger;
        default:
            return state;
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

export default dialogsReducer;