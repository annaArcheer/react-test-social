import styles from './Dialogs.module.css'
import {NavLink} from "react-router-dom";
import DialogItems from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {sendMessageActionCreator, updateNewMessageTextActionCreator} from "../../redux/state";

// let dialogs = [
//     {id: 1, name: 'Dimych1'},
//     {id: 2, name: 'Dimych2'},
//     {id: 3, name: 'Dimych3'},
//     {id: 4, name: 'Dimych4'},
//     {id: 5, name: 'Dimych5'},
//     {id: 6, name: 'Dimych6'},
// ]
//
// let messagess = [
//     {id: 1, message: 'Hi!'},
//     {id: 1, message: 'Lorem!'},
//     {id: 1, message: 'YO!'},
//     {id: 1, message: 'YO!'},
// ]

const Dialogs = (props) => {
    // debugger;
    let state = props.store.getState().messagessPage;

    let dialogsElements = state.dialogs.map(d => (
        <DialogItems key={d.id} name={d.name} id={d.id}/>
    ));
    let messagesElements = state.messagess.map(m => (
        <Message key={m.id} message={m.message}/>
    ));
    let newMessageBody = props.newMessagesBody;

    const sendMessageActionCreator = (body) => {
        const SEND_MESSAGE = 'SEND-MESSAGE';
        return {
            type: SEND_MESSAGE,
            newMessagesBody: body
        }
    }

    const updateNewMessageTextActionCreator = (body) => {
        const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY';

        return {
            type: UPDATE_NEW_MESSAGE_BODY,
            newMessagesBody: body
        }
    }

    let onSendMessageClick = () => {
        props.store.dispatch(sendMessageActionCreator());
        console.log(sendMessageActionCreator())
    }
    let onNewMessageChange = (e) => {
        let body = e.target.value;
        console.log(body);
        // console.log(updateNewMessageTextActionCreator(body));
        props.store.dispatch(updateNewMessageTextActionCreator(body));
    }

    return (
        <div className={styles.dialogs}>
            <div className={styles.dialogsItem}>
                {dialogsElements}
            </div>
            <div className={styles.messages}>
                <div>{messagesElements}</div>
                <div>
                    <div><textarea value={newMessageBody}
                                   onChange={onNewMessageChange}
                                   placeholder='Enter your message'/></div>
                    <div>
                        <button onClick={onSendMessageClick}>Send</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Dialogs;