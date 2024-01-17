import './App.css';
import Header from './components/Header/Header'
import Navbar from './components/Navbar/Navbar'
import DialogsContainer from './components/Dialogs/DialogsContainer'

import {Route, Routes} from "react-router";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";

const App = () => {

    return (

        <div className="app-wrapper">
            <Header/>
            <Navbar/>
            <div className='app-wrapper-content'>

                <Routes>
                    {/*<Route path="/dialogs" element={<Dialogs dialog={{props.dialogs}}/>}/>*/}
                    <Route path="/dialogs" element={
                        <DialogsContainer/>
                    }/>
                    {/*<Route path="/dialogs" render={() => <Dialogs dialogsData={props.dialogsData} />} />*/}
                    <Route path="/profile" element={
                        <ProfileContainer />
                    }/>
                    <Route path="/users" element={
                        <UsersContainer />
                    }/>
                </Routes>

            </div>
            <footer></footer>
        </div>

    );
}

export default App;
