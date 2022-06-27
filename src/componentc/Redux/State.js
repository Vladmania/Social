import { rerender } from "../..";

 
export let store = {
    _state: {
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
        newTextPost: ''
           },
        
        messegeItemData: [
            {messege: 'Привет', id: '1'},
            {messege: 'Как дела', id: '2'},
            {messege: 'Что делаеши', id: '3'},
            {messege: 'Как дела', id: '4'},
            {messege: 'Что делаеши', id: '5'},
        ]
    },
    getState(){
        return this._state;
    },
    
    addPost(){
        let itemPost = {
            messege: this._state.ProfilPage.newTextPost,
            id: Math.random(),
            like: 0,
            niks: "Vlad"
        }
        this._state.ProfilPage.postData.push(itemPost)
    
        rerender()
    },

    appdateNewPostText(Text){
        this._state.ProfilPage.newTextPost = Text        
    },
}




window.state = store