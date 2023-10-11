import React from "react";

import {sendMessageActionCreator, updateNewMessageTextActionCreator} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import StoreContext from "../../StoreContext";


const DialogsContainer = () => {

    let onSendMessageClick = () => {
        // store.dispatch(sendMessageActionCreator())
    }
    let onNewMessageChange = (body) => {
        // store.dispatch(updateNewMessageTextActionCreator(body))
    }
    return (
        <StoreContext.Consumer>
            {
                (store) => {

                    debugger;

                    return <Dialogs updateNewMessageBody={onNewMessageChange}
                                    sendMessage={onSendMessageClick}
                                    dialogsPage={store.getState().messagessPage}/>
                }
            }

        </StoreContext.Consumer>
    )


}

export default DialogsContainer;