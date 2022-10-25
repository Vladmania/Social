const ADD_POST = "ADD_POST"
const APP_DATE_NEW_POST_TEXT = "APP-DATE-NEW-POST-TEXT"
const APP_DATE_LIKE = "APP_DATE_LIKE"
const SET_PROFIL = "SET_PROFIL"

export const initState = {
    postData: [],
    newTextPost: '',
    profil: null,
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
    case APP_DATE_LIKE:{
        return{ 
            ...store ,
             postData: store.postData.map(p => {
                if(p.id === action.postId){
                    return{...p , like: p.like +1}
                }
                return p
             })} 
    }
    case SET_PROFIL:{
        return{
            ...store, profil: action.profil
        }
    }
        default: return store
    }


}

export const addDateLike = (postId) =>({type: APP_DATE_LIKE, postId})
export const addPostProfil = () => ({type: ADD_POST})
export const addDateNewPostText = (payload) => ({type: APP_DATE_NEW_POST_TEXT , payload: payload})
export const setTotalUserProfil = (profil) =>({type: SET_PROFIL, profil})