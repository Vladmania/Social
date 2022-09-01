import styled from 'styled-components'

export const StuleProfil = styled.section`
        display: flex;
        background-color: white;
        margin: 0 0 10px 0;
        .app-profil-foto{
            display: flex;
            flex-direction: column;
        }
    .app-profil-foto img{
        width: 200px;
        height: 200px;
        border-radius: 2px;
    }
    .app-profil-info{
        padding: 15px 20px;
    }
    .app-profil-name{
        font-size: 19px;
        line-height: 25px;
        font-weight: 400;
        overflow: hidden;
        text-overflow: ellipsis;
    }
    .add-profil-status{
        cursor: pointer;
        margin: -4px -6px 10px;
        padding: 4px 6px 4px;
        display: block;
        line-height: 16px;
        width: 100%;
        overflow: hidden;
        text-overflow: ellipsis;
        color: gray;
    }
    .add-profil-name_status{
        border-bottom: gray solid 1px;
    }
    .posts{
        margin-top: 100px;
    }
    `