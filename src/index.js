import './index.css';
import reportWebVitals from './reportWebVitals';
import store from "./redux/redux-store";
import ReactDOM from "react-dom/client";
import React from "react";
import {BrowserRouter} from "react-router-dom";
import App from "./App";
import StoreContext from "./StoreContext";

const root = ReactDOM.createRoot(document.getElementById('root'));
let rerenderedEntireTree = (state) => (
    root.render(
        <React.StrictMode>
            <BrowserRouter>
                <StoreContext.Provider value={store}>
                    <App state={state}
                         dispatch={store.dispatch.bind(store)}
                         store={store}/>
                </StoreContext.Provider>
            </BrowserRouter>
        </React.StrictMode>
    )
)


rerenderedEntireTree(store.getState());
store.subscribe(rerenderedEntireTree);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
