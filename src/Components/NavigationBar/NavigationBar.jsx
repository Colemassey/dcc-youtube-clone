import React from 'react';
import { Link } from 'react-router-dom';
import './NavigationBar.css'


const NavigationBar = ({ user }) => {
    return(
        <div className='topnav'>
                <a className='home'>
                    <Link to='/'>Home</Link>
                </a>
                <ul className='navUl'>
                <li>
                {user && <h4>Welcome {user.username}</h4>}
                </li>
                {!user &&
                    <React.Fragment>
                        <li className='registerLi'>
                        <Link to='/register' class="button1">Register</Link>
                        </li>
                        <li>
                        <Link to='/login' class="button1">Login</Link>
                        </li>
                    </React.Fragment>
                }
                {user &&
                    <React.Fragment>
                        <li>
                            <Link to='/logout' onClick={() =>  logOut()} class="button1">Logout</Link>

                        </li>
                    </React.Fragment>
                }
            </ul>
        </div>
     );
}
 
export default NavigationBar;