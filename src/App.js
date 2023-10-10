import './App.css';
import Header from './components/Header/Header'
import Navbar from './components/Navbar/Navbar'
import Profile from './components/Profile/Profile'
import Dialogs from './components/Dialogs/Dialogs'

import {Route, Routes} from "react-router";
import DialogsContainer from "./components/Dialogs/DialogsContainer";

const App = (props) => {
    // let posts = [
    //     {id:1, message: 'Hi, how are you?', likeCount: 12},
    //     {id:1, message: 'It\'s my first post', likeCount: 36},
    //     {id:1, message: 'Some message', likeCount: 0},
    // ]
    // let dialogs = [
    //     {id: 1, name: 'Dimych1'},
    //     {id: 2, name: 'Dimych2'},
    //     {id: 3, name: 'Dimych3'},
    //     {id: 4, name: 'Dimych4'},
    //     {id: 5, name: 'Dimych5'},
    //     {id: 6, name: 'Dimych6'},
    // ]
    // debugger;
    return (

        <div className="app-wrapper">
            <Header/>
            <Navbar/>
            <div className='app-wrapper-content'>

                <Routes>
                    {/*<Route path="/dialogs" element={<Dialogs dialog={{props.dialogs}}/>}/>*/}
                    <Route path="/dialogs" element={
                        <DialogsContainer store={props.store}/>
                    }/>
                    {/*<Route path="/dialogs" render={() => <Dialogs dialogsData={props.dialogsData} />} />*/}
                    <Route path="/profile" element={
                        <Profile store={props.store}/>
                    }/>
                </Routes>

            </div>
            <footer></footer>
        </div>

    );
}

export default App;
