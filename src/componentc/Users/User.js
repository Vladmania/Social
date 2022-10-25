import { Link } from 'react-router-dom'
import {StuleUsers} from './StuleUsers'
import { getUnFollow, getFollow } from '../api/GetUser'

export function User(props){
    
    return(
        <StuleUsers>
            <div className='user_oblojka'>
                <Link to={'/'+ props.id}>
                {props.photo === null ? <img src="https://www.meme-arsenal.com/memes/f9de26e0154abf3f36463eeed47f1cbe.jpg" alt="" /> : 
                <img src={props.photo} alt="" />}
                </Link>
                {props.followid  ? <button className='user_btn' onClick={() => {
                    
                    getUnFollow(props.id).then(respons =>{
                        if(respons.data.resultCode === 0){
                            props.unfollow(props.id)
                        }
                    })
                }}>Отписаться</button>  : 

                <button className='user_btn' onClick={() => {
                    
                    getFollow(props.id).then(respons =>{
                        if(respons.data.resultCode === 0){
                            props.follow(props.id)
                        }
                    })
                }}>Подписаться</button>}
        </div><div>
                <h2>{props.name}</h2>
                <h3>{props.status}</h3>

            </div>
        </StuleUsers>
    )
}