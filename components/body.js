import React from 'react'
import SideNav from './sideNav';
import Content from './content';

const body = () => {
    return (
        <div className='body'>
         <SideNav></SideNav>
         <Content></Content>   
        </div>
    )
}

export default body
