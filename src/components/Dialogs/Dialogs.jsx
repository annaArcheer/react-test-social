import styles from './Dialogs.module.css'
import {NavLink} from "react-router-dom";
import DialogItems from "./DialogItem/DialogItem";
import Message from "./Message/Message";

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

const Dialogs = ( props ) => {
    // debugger;

    let dialogsElements = props.dialogs.map(d => (
        <DialogItems key={d.id} name={d.name} id={d.id} />
    ));
    let messagesElements = props.messagess.map(m => (
        <Message key={m.id} message={m.message} />
    ));

    return (
        <div className={styles.dialogs}>
            <div className={styles.dialogsItem}>
                { dialogsElements }
            </div>
            <div className={styles.messages}>
                { messagesElements }
            </div>
        </div>
    )
}

export default Dialogs;