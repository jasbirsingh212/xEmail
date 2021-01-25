import React from 'react';
import {AiOutlineDashboard,AiFillProfile} from 'react-icons/ai'
import {FaUserCheck,FaMailBulk,FaFileDownload,FaPlug,FaHandHoldingUsd,FaFileAlt,FaRegCreditCard} from 'react-icons/fa';
import { IconContext } from 'react-icons';

const sideNav = () => {
    return (
        <div className='sidenav'>
{/*---------------------------- Dashboard Section -----------------------------------------------------*/}
            <div className='dashboard'>
                <AiOutlineDashboard  color='white' />
                <a href='dashboard'>Dashboard</a>
            </div>
{/*---------------------------- Dashboard Section -----------------------------------------------------*/}

{/*---------------------------- Email Section -----------------------------------------------------*/}
            <div className='email-section'>
                <h3>@ EMAIL VERIFICATION</h3>
                <IconContext.Provider value={{color:'lightslategrey'}}>
                <div className='email-sub'>
                <div className='element'>
                <FaUserCheck style={{marginLeft: '17px'}}/>
                <a href='dashboard'> Single email verification</a>
                </div>
                <div className='element'>
                <FaMailBulk />
                <a href='dashboard'>Bulk email verification  </a>
                </div>
                <div className='element'>
                <FaFileDownload   />
                <a href='dashboard'>Download verify result</a>
                </div>
                <div className='element'>
                <FaPlug  />
                <a href='dashboard'>Email verification API</a>
                </div>
                </div>
                </IconContext.Provider>
            </div>
{/*---------------------------- Email Section -----------------------------------------------------*/}

{/*---------------------------- Integration Section -----------------------------------------------------*/}
            <div className='integration-section'>
                <h3> <FaHandHoldingUsd/> INTEGRATION</h3>
                <IconContext.Provider value={{color:'lightslategrey'}}>
                <div className='integration-sub'>
                <div className='element'>
                <AiFillProfile style={{marginLeft:'-20px'}}/>
                <a href='dashboard'>My   Apps</a>
                </div>
                <div className='element'>
                <FaFileAlt/>
                <a href='dashboard'>Email Tools</a>
                </div>
                </div>
                </IconContext.Provider>
            </div>
{/*---------------------------- Integration Section -----------------------------------------------------*/}

{/*---------------------------- Billing Section -----------------------------------------------------*/}
            <div className='integration-section'>
                <h3> <FaHandHoldingUsd/> BILLING</h3>
                <IconContext.Provider value={{color:'lightslategrey'}}>
                <div className='integration-sub'>
                <div className='element'>
                <AiFillProfile style={{marginLeft:'8px'}}/>
                <a href='dashboard'>Manage plans</a>
                </div>
                <div className='element'>
                <FaFileAlt style={{marginLeft:'-25px'}}/>
                <a href='dashboard'>Invoices</a>
                </div>
                <div className='element'>
                <FaRegCreditCard/>
                <a href='dashboard'>Buy credits</a>
                </div>
                </div>
                </IconContext.Provider>
            </div>
{/*---------------------------- Billing Section -----------------------------------------------------*/}
        </div>
    )
}

export default sideNav;
