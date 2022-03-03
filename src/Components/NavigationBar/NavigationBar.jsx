import React from 'react';
import { Link } from 'react-router-dom';
import './NavigationBar.css'
import Logo from '../logo.png'


const NavigationBar = ({ user, logOut }) => {
    return (
        <div className='topnav'>
            <Link className='button2' to='/'>
                <img src={Logo} />
                <a>YouClone</a>
            </Link>
            <ul className='navUl'>
                <li>
                    {user && <h4>Welcome {user.username}</h4>}
                </li>
                {!user &&
                    <React.Fragment>
                        <li>
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
                            <Link className='button1' to='/logout' onClick={() => logOut()}>Logout</Link>
                        </li>
                    </React.Fragment>
                }
            </ul>
        </div>
    );
}

export default NavigationBar;