import {StuleUsers} from './StuleUsers'

export function User(props){
    
    return(
        <StuleUsers>
            <div className='user_oblojka'>
                <img src="https://avatarko.ru/img/kartinka/1/avatarko_anonim.jpg" alt="" />
                {props.followid  ? <button className='user_btn' onClick={() => {props.unfollow(props.id)}}>Отписаться</button>: 
                <button className='user_btn' onClick={() => {props.follow(props.id)}}>Подписаться</button>}
        </div><div>
                <h2>{props.name}</h2>
                <h3>{props.status}</h3>
            </div>
        </StuleUsers>
    )
}