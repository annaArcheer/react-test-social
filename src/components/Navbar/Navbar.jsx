import s from './Navbar.module.css';
import {NavLink} from "react-router-dom";

const Navbar = () => {
    return (
        <nav className={s.nav}>
            <ul>
                <li className={s.item} >
                    <NavLink to='/profile' activeClassName={s.activeLink}>Profile</NavLink>
                </li>
                <li className={s.item}>
                    <NavLink to='/dialogs' activeClassName={s.activeLink}>Messages</NavLink>
                </li>
                <li className={s.item} >
                    <NavLink to='/news' activeClassName={s.activeLink}>News</NavLink>
                </li>
                <li className={s.item} >
                    <NavLink to='/users' activeClassName={s.activeLink}>Users</NavLink>
                </li>
                <li className={s.item}>
                    <a href='/music'>Music</a>
                </li>
                <li className={s.item}>
                    <a href='/settings'>Settings</a>
                </li>
            </ul>
        </nav>
    );
}

export default Navbar;