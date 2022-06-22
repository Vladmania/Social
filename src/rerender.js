import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { Provider } from 'react-redux';
import { store } from './Store/Store';
import { addPost } from "./componentc/Redux/State"


export const rerender = (props) =>{
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Provider store={store}>
    <App state={props.state} addPost={addPost} />
    </Provider>
);}
