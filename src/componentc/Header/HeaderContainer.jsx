import React from 'react';
import * as axios from 'axios'
import { Header } from './Header';
import { connect } from 'react-redux';
import {AddUserData} from '../Redux/AuthReduser'

const HeaderContainer = (props) =>{
    axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`,{withCredentials: true}).then(respons =>{
       if(respons.data.resultCode === 0){
        props.AddUserData(respons.data.data.id, respons.data.data.login, respons.data.data.email)}
       
    })

    return(
        <Header {...props}/>
    )
}

let mapStateToProps = (state) =>{
    return {
        abautmy: state.AuthReduser
    }
}


export const HeaderContainers = connect( mapStateToProps, {AddUserData})(HeaderContainer);