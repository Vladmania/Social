import { NavLink} from 'react-router-dom'
import {StuleDialods} from './StyleDialogs'



const DialogItem = (props) =>{
    return(
        <div className="dialogs_item" id={props.id}>
        <NavLink to ={`${props.id}`}>{props.name}</NavLink></div> 
    )
}



const DialogMessage = (props) =>{
    return(
        <div className="dialog_massege_items" id={props.id }>{props.massege}</div>
    )
}

 

export const Dialogs = (props) =>{

    const massegesDialog = props.messegesUser
     .map( item => <DialogMessage massege ={item.messege} id = {item.id}/>)

    const dialogsUser = props.dialogUser
     .map( dialog => <DialogItem name={dialog.name} id = {dialog.id}/>)

    return(  
        <StuleDialods className="dialogs">
            <div className="dialogs_person">
            {dialogsUser}
            </div>
            <div className="dialogs_massege">
                {massegesDialog}
            </div>
        </StuleDialods>
    )
}