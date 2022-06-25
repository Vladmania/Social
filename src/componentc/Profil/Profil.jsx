import React from 'react';
import {StuleProfil} from './StuleProfil'
import { Post } from '../Post/Post';
import { addPost } from '../Redux/State';

export const Profil = (props) =>{
 
debugger;
const potsData = props.postData
.map( posts => <Post massage={posts.messege} like={posts.like} niks={posts.niks} id={posts.id} /> )

let znach

 const onPostChange = (e) =>{
 props.appdateNewPostText(e.target.value)
}

const valueInput = () =>{
   props.addPost(znach)
}


  



    return(
      <><StuleProfil>
        <div className="app-profil-foto">
          <img src="https://vjoy.cc/wp-content/uploads/2019/07/1-1.jpg"></img>
          <button className="app-profil-btn-redactor">Редактировать</button>
        </div>
        <div>
          <div>
            <div className="app-profil-info">Владислав Духанин</div>
          </div>

          <div className='posts'>
            <input onChange={onPostChange} value ={props.newPostText}/><button onClick={valueInput}>Отправить</button>
            <div>My post</div>

          </div>
        </div>
      </StuleProfil>
      {potsData}</>
    )
}