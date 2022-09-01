import { connect } from "react-redux";
import { followAC, unfollowAC, setusersAC } from "../Redux/UserRedusers";
import { Users } from "./Users";

let mapStateToProps = (state) =>{
    return {
        users: state.UserReduser.users
    }
}

let mapDispatchToProps = (dispatch) =>{
    return{
        upDatafollow: (userId)=>{
            dispatch(followAC(userId))
        },
        upDataunfollow: (userId)=>{
            dispatch(unfollowAC(userId))
        },
        upDatasetusers: (users)=>{
            dispatch(setusersAC(users))
        }
    }
}

export const UsersConteiner = connect( mapStateToProps, mapDispatchToProps)(Users);