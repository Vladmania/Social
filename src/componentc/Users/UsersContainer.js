import { connect } from "react-redux";
import { followAC, unfollowAC, setusersAC, setCurrentPageAC, setTotalUserCountAC, setFetchingAC } from "../Redux/UserRedusers";
import { Users } from "./Users";

let mapStateToProps = (state) =>{
    return {
        users: state.UserReduser.users,
        pageSize: state.UserReduser.pageSize,
        totalUserCount: state.UserReduser.totalUserCount,
        currentPage: state.UserReduser.currentPage,
        fetching: state.UserReduser.isFetching
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
        },
        setCurrentPage: (p)=>{
            dispatch(setCurrentPageAC(p))
        },
        setTotalUserCount: (totalCount)=>{
            dispatch(setTotalUserCountAC(totalCount))
        },
        setFetching: (fetching) =>{
            dispatch(setFetchingAC(fetching))
        }
    }
}

export const UsersConteiner = connect( mapStateToProps, mapDispatchToProps)(Users);