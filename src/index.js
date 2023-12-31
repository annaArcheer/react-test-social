
import './index.css';
import reportWebVitals from './reportWebVitals';
import state, {addPost, subscribe, updateNewPostText} from "./redux/state";
import ReactDOM from "react-dom/client";
import React from "react";
import {BrowserRouter} from "react-router-dom";
import App from "./App";



const root = ReactDOM.createRoot(document.getElementById('root'));
export let rerenderedEntireTree = (state) => {
    root.render(
        <React.StrictMode>
            <BrowserRouter>
                <App state={state} addPost={addPost} updatePost={updateNewPostText} />
            </BrowserRouter>
        </React.StrictMode>
    );
}
rerenderedEntireTree(state);
subscribe(rerenderedEntireTree);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
