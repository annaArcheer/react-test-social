import {sendMessageActionCreator, updateNewMessageTextActionCreator} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";


let mapStateToProps = (state) => {
    return {
        dialogsPage: state.dialogsPage
    }
};
let mapDispatchToProps = (dispatch) => {
    return {
        sendMessage: (body) => {
            dispatch(sendMessageActionCreator(body))
            debugger;
        },
        updateNewMessageBody: (body) => {
            dispatch(updateNewMessageTextActionCreator(body))
        }
    }
};

const DialogsContainer =
    connect(mapStateToProps, mapDispatchToProps)(Dialogs);


export default DialogsContainer;