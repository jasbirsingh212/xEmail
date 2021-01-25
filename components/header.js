import React from 'react'
import {BiSearch} from 'react-icons/bi';
import {BsBellFill} from 'react-icons/bs'
import {IoMdMail} from 'react-icons/io';

const header = () => {

    const onsubmit =(event) =>{
        event.preventDefault();
        console.log("submit")
    }
    return (
        <div className='header'>
        <div className='name'>
        <h1>X-</h1>
        <div className ='name1'>
        <h2>Email Verify</h2>
        <p>Enhance your Reach</p>
        </div>
        </div>
        <div className="search-container">
        <form onSubmit={onsubmit}>
        <input type="text" placeholder=" Search for..." name="search"/>
        <button type="submit" className='btn'><BiSearch color='white' size='20px'/></button>
        </form>
        </div>
        <div className='container'>
        <div className='bell'>
        <BsBellFill size= '25px' />
        </div>
        <div className='mail'>
        <IoMdMail size= '25px'></IoMdMail>
        </div>
        <h3>|</h3>
        <p>Jasbir Singh</p>
        <img src="https://picsum.photos/id/1005/5760/3840" alt="profile"/>
        </div>
        </div>

    )
}

export default header
