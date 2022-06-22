import { rerender } from "../../rerender"


export let state ={
    dialogsItemData: [
        {name: 'Сергей', id: '1'},
        {name: 'Dinis', id: '2'},
        {name: 'Nastia', id: '3'},
        {name: 'Vlad', id: '4'},
        {name: 'Vlad', id: '5'},
    ] ,
    
    postData: [
        {messege: 'Привет', id: 1, like: 4, niks: 'Vlad'},
        {messege: 'Как дела', id: 2, like: 92, niks: "Sergei"},
        {messege: 'Что делаеши', id: 3, like: 0, niks: "Dinis"},
    ],
    
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

    state.postData.push(itemPost)
    rerender(state)
}

console.log(state.postData);