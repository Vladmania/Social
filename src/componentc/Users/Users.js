import {StuleUsers} from './StuleUsers'
import {User} from './User'

export function Users(props){
    if(props.users.length === 0){
        props.upDatasetusers([{id: 1, followid: true, name: "Dima", status: "epta"},
                              {id: 2, followid: false, name: "Kola", status: "dela good"},
                              {id: 3, followid: true, name: "Ivan", status: "epta"},])
    }
    
    

    return(
        <>
        <div>{props.users.map(p => <User id={p.id} 
                                         followid={p.followid} 
                                         status={p.status} 
                                         name={p.name} 
                                         follow={props.upDatafollow} 
                                         unfollow={props.upDataunfollow}
                                         setUsers={props.upDatasetusers}/>)}</div></>
    )

}