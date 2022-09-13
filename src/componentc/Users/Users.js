import * as axios from 'axios'
import {StuleUsers} from './StuleUsers'
import {User} from './User'

export function Users(props){
    if(props.users.length === 0){
    axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${props.currentPage}&count=${props.pageSize}`).then(respons =>{
        props.upDatasetusers(respons.data.items)
        props.setTotalUserCount(respons.data.totalCount)
    })
    }
    
    
    let pageCount = Math.ceil(props.totalUserCount / props.pageSize)

    let page = []
    for (let i = 1; i <= pageCount; i++) {
        page.push(i)
    }

    let onChengetClic=(p)=>{
        props.setCurrentPage(p)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${p}&count=${props.pageSize}`).then(respons =>{
            props.upDatasetusers(respons.data.items)
        })
    }
   
    return(
        <>
        <StuleUsers>
            {page.map(p => <span className={props.currentPage === p ? "namberSize" : "allSize"}
                                             onClick={() => onChengetClic(p)}>{p}</span>)}
        </StuleUsers>
        <div>{props.users.map(p => <User id={p.id} 
                                         followid={p.followid} 
                                         status={p.status} 
                                         name={p.name} 
                                         follow={props.upDatafollow} 
                                         unfollow={props.upDataunfollow}
                                         setUsers={props.upDatasetusers}/>)}</div></>
    )

}