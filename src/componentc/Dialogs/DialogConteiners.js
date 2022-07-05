import { connect } from "react-redux";
import { Dialogs } from "./Dialogs";
import { addmassegeDialogs,readTextDialogs } from '../Redux/DialogsReduser'

let mapStateToProps = (state) =>{
    return {
        messegeItemData: state.DialogsReduser.messegeItemData,
        newTextDialog: state.DialogsReduser.newTextDialog,
    }
}

let mapDispatchToProps = (dispatch) =>{
    return{
        upDataMassegeBodu: ()=>{
            dispatch(addmassegeDialogs())
        },
        upDataMassegeText: (text) =>{
            dispatch(readTextDialogs(text))
        },
    }
}

export const DialogConteiners = connect( mapStateToProps, mapDispatchToProps)(Dialogs);