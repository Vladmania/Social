

const ADD_POST = "ADD_POST"
const APP_DATE_NEW_POST_TEXT = "APP-DATE-NEW-POST-TEXT"

export const initState = {
    postData: [
        {messege: 'Привет', id: 1, like: 4, niks: 'Vlad'},
        {messege: 'Как дела', id: 2, like: 92, niks: "Sergei"},
        {messege: 'Что делаеши', id: 3, like: 0, niks: "Dinis"},
    ],
    newTextPost: ''
}
export const ProfilReduser = (store = initState, action) =>{
    switch(action.type){
        case ADD_POST:{ 
        let itemPost = {
            messege: store.newTextPost,
            id: Math.random(),
            like: 0,
            niks: "Vlad"
        }
        let newStore = {...store}
        newStore.postData = [...store.postData]
        newStore.postData.push(itemPost)
        newStore.newTextPost = ""
        return newStore
    }
      
      case APP_DATE_NEW_POST_TEXT:{
        let newStore = {...store}
        newStore.newTextPost = action.payload
        return newStore
    }
        default: return store
    }


}

export const addPostProfil = () => ({type: ADD_POST})
export const addDateNewPostText = (payload) => ({type: APP_DATE_NEW_POST_TEXT , payload: payload})