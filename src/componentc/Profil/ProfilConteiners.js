import { connect } from "react-redux";
import { Profil } from "./Profil";
import { addPostProfil, addDateNewPostText, addDateLike, setTotalUserProfil } from '../Redux/ProfilReduser'

let mapStateToProps = (state) =>{
    return {
        postData: state.profilSlice.postData,
        newTextPost: state.profilSlice.newTextPost,
        profil: state.profilSlice.profil
    }
}

export const ProfilConteiners = connect( mapStateToProps, {addPostProfil, addDateNewPostText, addDateLike, setTotalUserProfil})(Profil);