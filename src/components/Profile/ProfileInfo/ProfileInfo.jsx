import s from './ProfileInfo.module.css';

const ProfileInfo = () => {
    return (
        <div className={s.content}>
            <img alt=""
                 src="https://images.unsplash.com/photo-1694874436150-af85b920e7eb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1172&q=80"/>
            <div className={s.descriptionBlock}>
                ava + descript
            </div>
        </div>
    );
}

export default ProfileInfo;