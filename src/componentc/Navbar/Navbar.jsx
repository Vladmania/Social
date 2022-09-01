import React from 'react';
import { Link } from 'react-router-dom';
import {StuleNavbar} from './StuleNavbar'

export const Navbar = () =>{
    return(
      <StuleNavbar>
      <Link to ='/'>Моя страница</Link>
      <Link to ='/dialogs'>Мессенджер</Link>
      <a href='#'>Музыка</a>
      <a href='#'>Новости</a>
      <Link to = '/users'>Пользователи</Link>
    </StuleNavbar>
    )
}