import React from 'react';
import {StuleProfil} from '../Stule/StuleProfil'
import { Post } from './Post';

export const Profil = () =>{
    return(
      <StuleProfil>
      <div className="app-profil-foto">
        <img src="https://vjoy.cc/wp-content/uploads/2019/07/1-1.jpg"></img>
        <button className="app-profil-btn-redactor">Редактировать</button>
      </div>
      <div>
      <div>
        <div className="app-profil-info">Владислав Духанин</div>
        <input /><button>Отправить</button>
      </div>
      <div>
        <div>My post</div>
        <Post massage ="Privet"/>
        
      </div>
      </div>
      </StuleProfil>
    )
}