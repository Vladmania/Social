import { rerender } from "../../index"


export let state ={
    dialogsItemData: [
        {name: 'Сергей', id: '1'},
        {name: 'Dinis', id: '2'},
        {name: 'Nastia', id: '3'},
        {name: 'Vlad', id: '4'},
        {name: 'Vlad', id: '5'},
    ],
     

    ProfilPage:{
    postData: [
        {messege: 'Привет', id: 1, like: 4, niks: 'Vlad'},
        {messege: 'Как дела', id: 2, like: 92, niks: "Sergei"},
        {messege: 'Что делаеши', id: 3, like: 0, niks: "Dinis"},
    ],
    newTextPost: ""
       },
    
    messegeItemData: [
        {messege: 'Привет', id: '1'},
        {messege: 'Как дела', id: '2'},
        {messege: 'Что делаеши', id: '3'},
        {messege: 'Как дела', id: '4'},
        {messege: 'Что делаеши', id: '5'},
    ]
}

export const addPost = (post) =>{
    let itemPost = {
        id: Math.random(),
        messege: post,
        like: 0,
        niks: "Vlad"
    }

    state.ProfilPage.postData.push(itemPost)
   rerender(state)
}


export let appdateNewPostText = (Text) =>{
    state.ProfilPage.newTextPost = Text
    rerender(state)                      
}

window.state = state.ProfilPage.newTextPost