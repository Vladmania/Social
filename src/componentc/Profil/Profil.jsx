import React from 'react';
import {StuleProfil} from './StuleProfil'
import { Post } from '../Post/Post';


export const Profil = (props) =>{
 
  

const potsData = props.postData
.map( posts => <Post addLike={props.upDateLike} massage={posts.messege} like={posts.like} niks={posts.niks} id={posts.id} /> )

 const onPostChange = (e) =>{
 props.upDataPostText(e.target.value)
}

let keydrop = (e) =>{
  if(e.key === "Enter"){
    props.upDataPost()
  }
}

debugger

    return(
      <><StuleProfil>
        <div className="app-profil-foto">
          <img src="https://vjoy.cc/wp-content/uploads/2019/07/1-1.jpg"></img>
          <button className="app-profil-btn-redactor">Редактировать</button>
        </div>
        <div className='app-profil-info'>
          <div className='add-profil-name_status'>
            <div className="app-profil-name">Владислав Духанин</div>
            <div className='add-profil-status'>установить статус:</div>
          </div>

          <div className='posts'>
            <input onChange={onPostChange}
                   onKeyDown={keydrop}
                   value={props.newTextPost}/>
            <button onClick={() =>props.upDataPost()}>Отправить</button>

          </div>
        </div>
      </StuleProfil>
      {potsData}
      </>
    )
}