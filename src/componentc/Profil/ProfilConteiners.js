import { connect } from "react-redux";
import { Profil } from "./Profil";
import { addPostProfil, addDateNewPostText } from '../Redux/ProfilReduser'

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
    }
}

export const ProfilConteiners = connect( mapStateToProps, mapDispatchToProps)(Profil);