import { NavLink} from 'react-router-dom'
import {StuleDialods} from './StyleDialogs'
import { initState } from '../Redux/DialogsReduser'




const DialogItem = (props) =>{
    return(
        <div className="dialogs_item" key={props.id}>
        <NavLink to ={`${props.id}`}>{props.name}</NavLink></div> 
    )
}



const DialogMessage = (props) =>{
    return(
        <div className="dialog_massege_items" key={props.id }>{props.massege}</div>
    )
}

 

export const Dialogs = (props) =>{
    

    const massegesDialog = props.messegeItemData
     .map( item => <DialogMessage massege ={item.messege} id = {item.id}/>)

    const dialogsUser = initState.dialogsItemData
     .map( dialog => <DialogItem name={dialog.name} id = {dialog.id}/>)

     const readText = (e) =>{
        let text = e.target.value
         props.upDataMassegeText(text)
     }

    return(  
        <><StuleDialods>
            <div className="dialogs_person">
                {dialogsUser}
            </div>
            <div className="dialogs_massege">
                {massegesDialog}
            </div>

        </StuleDialods>
        <input onChange={readText} value={props.newTextDialog}/><button onClick={ () => props.upDataMassegeBodu()}>отправить</button></>
    )
}