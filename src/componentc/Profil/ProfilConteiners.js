import { connect } from "react-redux";
import { Profil } from "./Profil";
import { addPostProfil, addDateNewPostText, addDateLike } from '../Redux/ProfilReduser'

let mapStateToProps = (state) =>{
    return {
        postData: state.profilSlice.postData,
        newTextPost: state.profilSlice.newTextPost,
    }
}

let mapDispatchToProps = (dispatch) =>{
    return{
        upDataPost: ()=>{
            dispatch(addPostProfil())
        },
        upDataPostText: (payload) =>{
            dispatch(addDateNewPostText(payload))
        },
        upDateLike: (postId) =>{
            dispatch(addDateLike(postId))
        }
    }
}

export const ProfilConteiners = connect( mapStateToProps, mapDispatchToProps)(Profil);