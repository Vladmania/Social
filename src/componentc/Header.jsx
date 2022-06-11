import React from 'react';
import {StuleHeader} from '../Stule/StuleHeader'

export const Header = () =>{
    return(
        <StuleHeader className="app-header">
          <ul className='app-header-ul'>
              <li className='app-header-li'>Соцсеть</li>
              <li className='app-header-li'><img src="https://thypix.com/wp-content/uploads/2018/05/Sommerlandschaft-Bilder-55.jpg" alt="" /></li>
          </ul>
        </StuleHeader>
    )
}