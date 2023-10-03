import s from './Header.module.css';

const Header = () => {
    return (
        <header className={s.header}>
            <nav className="w-full bg-white border-gray-200 dark:bg-gray-900">
                <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                    <a href="https://flowbite.com/" className="flex items-center">
                        <img src="https://flowbite.com/docs/images/logo.svg" class="h-8 mr-3" alt="Flowbite Logo"/>
                        <span
                            className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Flowbite</span>
                    </a>
                    <div class="flex items-center md:order-2">
                        <div type="button"
                             className="flex mr-3 text-sm bg-gray-800 rounded-full md:mr-0 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600"
                             id="user-menu-button" aria-expanded="false" data-dropdown-toggle="user-dropdown"
                             data-dropdown-placement="bottom">
                            <span className="sr-only">Open user menu</span>
                            <img className="w-8 h-8 rounded-full" src="/docs/images/people/profile-picture-3.jpg"
                                 alt="userPhoto"/>
                        </div>

                   </div>

                </div>
            </nav>
        </header>
    );
}

export default Header;