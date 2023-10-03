import styles from './../Dialogs.module.css'
import {NavLink} from "react-router-dom";
const DialogItems = (dialog) => {

    return (
        <div className={styles.dialog + ' ' + styles.active}>
            <NavLink to={"/dialogs/" + dialog.id}>{dialog.name}</NavLink>
        </div>
    )
}
export default DialogItems;