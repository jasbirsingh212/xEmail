import React from 'react'
const content = () => {
    return (
        <div className='content'>
            <h1>Single email Verification</h1>
            <div className='content-email'>
                <h3>Enter your email id below and check the result!</h3>
                <div className="search-container">
                <form onSubmit={onsubmit}>
                <input type="text" placeholder=" Enter Email..." name="search"/>
                <button type="submit" className='btn'>Verify</button>
                </form>
                 </div>
            </div>
        </div>
    )
}

export default content
