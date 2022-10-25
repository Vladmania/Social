import React from 'react';
import {StuleHeader} from './StuleHeader'

export const Header = (props) =>{
    return(
        <StuleHeader className="app-header">
          <ul className='app-header-ul'>
              <li className='app-header-li'>Соцсеть</li>
              <li className='app-header-li'><p>{props.abautmy.login}</p><img src="https://avatarko.ru/img/kartinka/1/avatarko_anonim.jpg" alt="" /></li>
          </ul>
        </StuleHeader>
    )
}