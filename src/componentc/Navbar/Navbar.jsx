import React from 'react';
import { NavLink } from 'react-router-dom';
import {StuleNavbar} from './StuleNavbar'

export const Navbar = () =>{
    return(
      <StuleNavbar>
      <NavLink to ='/profil'>Моя страница</NavLink>
      <NavLink to ='/dialogs'>Мессенджер</NavLink>
      <a href='#'>Музыка</a>
      <a href='#'>Новости</a>
    </StuleNavbar>
    )
}