import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
//import { Provider } from 'react-redux';
//import { store } from './Store/Store';
import { store } from './componentc/Redux/State';
//import { addPost } from "./componentc/Redux/State"
//import { appdateNewPostText } from './componentc/Redux/State';

export const rerender = () =>{
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <App state={store.getState()}
         addPost={store.addPost.bind(store)} 
         appdateNewPostText ={store.appdateNewPostText.bind(store)} 
         />
    
);}

rerender()


