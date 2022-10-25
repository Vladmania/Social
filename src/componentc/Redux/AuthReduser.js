

const AUTH_DATA = "AUTH_DATA"

export const initState = {
  id: null,
  login: null,
  email: null,
  
}

export const AuthReduser = (store = initState, action) => {
  
      switch(action.type){
        case AUTH_DATA: {
          return{...store, ...action.data
          }
        }
      
        default: return store
    }

}

export const AddUserData = (id, login, email) => ({type: "AUTH_DATA", data: {id, login, email}})
