import './Header.styles.css';
import React from 'react';
import Logo from '../../assets/logo2.png'

const Header = (props) => {
    return(
        <header>
            <div className='wrap'>
                <div className='logo'>
                    <img src={Logo} alt="logo" />
                </div>
            </div>
            
        </header>
    )
}

export default Header;