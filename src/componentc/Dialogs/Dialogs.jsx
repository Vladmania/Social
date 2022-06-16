import {StuleDialods} from './StyleDialogs'

export const Dialogs = () =>{
    return(  
        <StuleDialods className="dialogs">
            <div className="dialogs_person">
                <div className="dialogs_item">Сергей</div>
                <div className="dialogs_item">Динис</div>
                <div className="dialogs_item">Настя</div>
                <div className="dialogs_item">Владос</div>
            </div>
            <div className="dialogs_massege">
                <div className="dialog_massege_items">Привет</div>
                <div className="dialog_massege_items">Как дела</div>
                <div className="dialog_massege_items">Что делаешь?</div>
            </div>
        </StuleDialods>
    )
}