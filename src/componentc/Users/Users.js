import { getUser } from '../api/GetUser'
import {StuleUsers} from './StuleUsers'
import {User} from './User'



export function Users(props){
    if(props.users.length === 0){
        props.setFetching(true)
    getUser(props.currentPage, props.pageSize).then(respons =>{
        props.setFetching(false)
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
        props.setFetching(true)
        getUser(p, props.pageSize).then(respons =>{
            props.setFetching(false)
            props.upDatasetusers(respons.data.items)
        })
    }
   
    return(
        <>
        {props.fetching ? <img src='https://i.pinimg.com/originals/3b/4e/10/3b4e109d6b621ed5a9249769afbd4dfa.gif' alt = ""/> : null}
        <StuleUsers>
            {page.map(p => <span className={props.currentPage === p ? "namberSize" : "allSize"}
                                             onClick={() => onChengetClic(p)}>{p}</span>)}
        </StuleUsers>
        <div>{props.users.map(p => <User id={p.id} 
                                         followid={p.followid} 
                                         status={p.status} 
                                         photo={p.photos.small}
                                         name={p.name} 
                                         follow={props.upDatafollow} 
                                         unfollow={props.upDataunfollow}
                                         setUsers={props.upDatasetusers}/>)}</div></>
    )

}