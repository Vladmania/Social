import React from 'react';
import {StuleProfil} from './StuleProfil'
import { Post } from '../Post/Post';
import * as axios from 'axios'
import { useParams } from 'react-router-dom';


export const Profil = (props) =>{
 
  let param = useParams()

const potsData = props.postData
.map( posts => <Post addLike={props.addDateLike} massage={posts.messege} like={posts.like} niks={posts.niks} id={posts.id} /> )

 const onPostChange = (e) =>{
 props.addDateNewPostText(e.target.value)
}

let keydrop = (e) =>{
  if(e.key === "Enter"){
    props.upDataPost()
  }
}

axios.get(`https://social-network.samuraijs.com/api/1.0/profile/` + param.userId).then(respons =>{
  props.setTotalUserProfil(respons.data)
})
if(!props.profil){
  <div>Сейчас</div>
}else{
    return(
      <><StuleProfil>
        <div className="app-profil-foto">
          {!props.profil.photos.small ?  <img src="https://www.tatlicenter.com/wp-content/uploads/2021/02/person-icon.png
          "></img> : <img src={props.profil.photos.small}></img>}
          <button className="app-profil-btn-redactor">Редактировать</button>
        </div>
        <div className='app-profil-info'>
          <div className='add-profil-name_status'>
            <div className="app-profil-name">{props.profil.fullName}</div>
            <div className='add-profil-status'>установить статус:{props.profil.aboutMe}</div>
          </div>

          <div className='posts'>
            <input onChange={onPostChange}
                   onKeyDown={keydrop}
                   value={props.newTextPost}/>
            <button onClick={() =>props.addPostProfil()}>Отправить</button>
          </div>
        </div>
      </StuleProfil>
      {potsData}
      </>
    )
}}