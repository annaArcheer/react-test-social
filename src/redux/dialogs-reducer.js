const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY';
const SEND_MESSAGE = 'SEND-MESSAGE';

const dialogsReducer = (state, action) => {

    switch (action.type) {
        case UPDATE_NEW_MESSAGE_BODY:
            state.newMessagesBody = action.body;
        case SEND_MESSAGE:
            let body = state.newMessagesBody;
            console.log(body + ' body')
            state.messagess.push({id: 6, message: body});
            state.newMessagesBody = '';

        default:
            return state;
    }

    return state;
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