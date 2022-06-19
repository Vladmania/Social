import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { Provider } from 'react-redux';
import { store } from './Store/Store';

let dialogsItemData =[
    {name: 'Сергей', id: '1'},
    {name: 'Dinis', id: '2'},
    {name: 'Nastia', id: '3'},
    {name: 'Vlad', id: '4'},
    {name: 'Vlad', id: '5'},
] 

let postData =[
    {messege: 'Привет', id: '1', like: '4', niks: 'Vlad'},
    {messege: 'Как дела', id: '2', like: "92", niks: "Sergei"},
    {messege: 'Что делаеши', id: '3', like: '0', niks: "Dinis"},
]

let messegeItemData =[
    {messege: 'Привет', id: '1'},
    {messege: 'Как дела', id: '2'},
    {messege: 'Что делаеши', id: '3'},
    {messege: 'Как дела', id: '4'},
    {messege: 'Что делаеши', id: '5'},
]

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Provider store={store}>
    <App dialogUser ={dialogsItemData} postData={postData} messegesUser={messegeItemData} />
    </Provider>
);
