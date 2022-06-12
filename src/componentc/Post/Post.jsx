import React from 'react';
import { StulePost } from './StulePost';

export const Post = (props) =>{
    return(
      <><StulePost>
            <img src='https://avatarko.ru/img/kartinka/1/avatarko_anonim.jpg' />
            <div>{props.massage}</div>
        </StulePost>
        <div>like {props.like}</div></>
    )
}