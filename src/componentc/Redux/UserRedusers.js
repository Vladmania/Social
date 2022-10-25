
const SET_USERS = "SET_USERS"
const FOLLOW = "FOLLOW"
const UNFOLLOW ="UNFOLLOW"
const SET_CURRENT_PAGE = "SET_CURRENT_PAGE"
const SET_TOTAL_USER_COUNT = "SET_TOTAL_USER_COUNT"
const SET_FETCHING = "SET_FETCHING"

export const initState = {
    users: [],
    pageSize: 5,
    totalUserCount: 0,
    currentPage: 1,
    isFetching: false,
}

export const UserReduser = (store = initState, action) =>{
    
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
            ...store, users: [...action.users]
        }
        case SET_CURRENT_PAGE:
        return{
            ...store, currentPage: action.currentPage
        }
        case SET_TOTAL_USER_COUNT:
            return{
                ...store, totalUserCount: action.totalUserCount
            }
            case SET_FETCHING:
            return{
                ...store, isFetching: action.isFetching
            }
        default: return store
    }


}

export const followAC = (userId) => ({ type: FOLLOW, userId })
export const unfollowAC = (userId) => ({ type: UNFOLLOW, userId })
export const setusersAC = (users) => ({ type: SET_USERS,  users })
export const setCurrentPageAC = (p) => ({type: SET_CURRENT_PAGE, currentPage: p})
export const setTotalUserCountAC = (totalCount) => ({type: SET_TOTAL_USER_COUNT, totalUserCount: totalCount })
export const setFetchingAC = (isFetching) =>({type: SET_FETCHING, isFetching})

