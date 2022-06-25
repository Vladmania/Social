import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { Provider } from 'react-redux';
import { store } from './Store/Store';
import { state } from './componentc/Redux/State';
import { addPost } from "./componentc/Redux/State"
import { appdateNewPostText } from './componentc/Redux/State';


export const rerender = (state) =>{
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    
    <App state={state} addPost={addPost} appdateNewPostText ={appdateNewPostText} />
    
);}

rerender(state)
