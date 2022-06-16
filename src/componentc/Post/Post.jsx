import React from 'react';
import { StulePost } from './StulePost';

export const Post = (props) =>{
    return(
      <StulePost>
            <img src='https://avatarko.ru/img/kartinka/1/avatarko_anonim.jpg' />
            <div className='nikname'>{props.niks}</div>
            <div className='massege'>{props.massage}</div>
            <div className='like'> <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-heart-fill" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z"/>
</svg> {props.like}</div>
        </StulePost>
        
    )
}