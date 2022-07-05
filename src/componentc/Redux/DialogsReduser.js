


const READ_TEXT = "READ_TEXT"
const ADD_MASSEGE = "ADD_MASSEGE"

export const initState = {
    messegeItemData: [
        {messege: 'Привет', id: 1},
        {messege: 'Как дела', id: 2},
        {messege: 'Что делаеши', id: 3},
       
    ],
    newTextDialog: "",

dialogsItemData: [
  {name: 'Сергей', id: '1'},
  {name: 'Dinis', id: '2'},
  {name: 'Nastia', id: '3'},
  {name: 'Vlad', id: '4'},
  {name: 'Vlad', id: '5'},
],
}

export const DialogsReduser = (store = initState, action) => {
      switch(action.type){
        case ADD_MASSEGE: {
       let itemDialog = {
            messege: store.newTextDialog,
            id: Math.random(),
        }
        let newStore = {...store}
        newStore.messegeItemData = [...store.messegeItemData]
        newStore.messegeItemData.push(itemDialog)
        newStore.newTextDialog = ""
        return newStore}
      case READ_TEXT:{
        let newStore = {...store}
        newStore.newTextDialog = action.text
      return newStore}
        default: return store
    }

}

export const addmassegeDialogs = () => ({type: "ADD_MASSEGE"})
export const readTextDialogs = (text) => ({type: "READ_TEXT" , text: text})