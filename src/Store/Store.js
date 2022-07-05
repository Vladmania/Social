import { configureStore } from "@reduxjs/toolkit";

import {ProfilReduser} from '../componentc/Redux/ProfilReduser'
import {DialogsReduser} from '../componentc/Redux/DialogsReduser'



export const store = configureStore({
    reducer: { 
        profilSlice:  ProfilReduser, 
        DialogsReduser: DialogsReduser}
       
    }
);