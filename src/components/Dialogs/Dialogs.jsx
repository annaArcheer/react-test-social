import styles from './Dialogs.module.css'
import {NavLink} from "react-router-dom";
import DialogItems from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {sendMessageActionCreator, updateNewMessageTextActionCreator} from "../../redux/dialogs-reducer";

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

    // const sendMessageActionCreator = (body) => {
    //     const SEND_MESSAGE = 'SEND-MESSAGE';
    //     return {
    //         type: SEND_MESSAGE,
    //         newMessagesBody: body
    //     }
    // }
    //
    // const updateNewMessageTextActionCreator = (body) => {
    //     const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY';
    //
    //     return {
    //         type: UPDATE_NEW_MESSAGE_BODY,
    //         newMessagesBody: body
    //     }
    // }

    let onSendMessageClick = () => {
        props.store.dispatch(sendMessageActionCreator());
        console.log(sendMessageActionCreator())
    }
    let onNewMessageChange = (e) => {
        let body = e.target.value;
        console.log(body);
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