import styles from './Dialogs.module.css'
import {NavLink} from "react-router-dom";
import DialogItems from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {sendMessageActionCreator, updateNewMessageTextActionCreator} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";

const DialogsContainer = (props) => {
    // debugger;
    let state = props.store.getState().messagessPage;

    let onSendMessageClick = () => {
        props.store.dispatch(sendMessageActionCreator());
        console.log(sendMessageActionCreator())
    }
    let onNewMessageChange = (body) => {
        props.store.dispatch(updateNewMessageTextActionCreator(body));
    }

    return <Dialogs updateNewMessageBody={onNewMessageChange}
                    sendMessage={onSendMessageClick}
                    dialogsPage={state} />
}

export default DialogsContainer;