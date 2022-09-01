

const SET_USERS = "SET_USERS"
const APP_DATE_NEW_POST_TEXT = "APP-DATE-NEW-POST-TEXT"
const FOLLOW = "FOLLOW"
const UNFOLLOW ="UNFOLLOW"
export const initState = {
    users: []
}
export const UserReduser = (store = initState, action) =>{
    debugger;
    switch(action.type){
        
        case FOLLOW:
        return{
            ...store, 
            users: store.users.map(u => {
                if(u.id === action.userId){
                  return {...u, followid: true}
                }
                return u
            })
        }
    
    case UNFOLLOW:
        return{
            ...store, 
            users: store.users.map(u => {
                if(u.id === action.userId){
                    return{...u, followid: false}
                }
                return u
            })
        }
    case SET_USERS:
        return{
            ...store, users: [...store.users, ...action.users]
        }
    
        default: return store
    }


}

export const followAC = (userId) => ({ type: FOLLOW, userId })
export const unfollowAC = (userId) => ({ type: UNFOLLOW, userId })
export const setusersAC = (users) => ({ type: SET_USERS,  users })

