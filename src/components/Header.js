import React from 'react'
import './Header.css'
import punkLogo from '../assets/header/cryptopunk-logo.png'
import searchIcon from '../assets/header/search.png'
import themeSwitchIcon from '../assets/header/theme-switch.png'
function Header({ setAppTheme }) {
    return (
        <div className='header'>
            <div className='logoContainer'>
                <img src={punkLogo} className='punklogo' alt='' />
            </div>

            <div className='searchBar'>
                <div className='searchIconContainer'>
                    <img src={searchIcon} />
                </div>
                <input className='searchInput' placeholder='Collection, item or user...'/>
            </div>

            <div className='headerItems'>
                <p>Drops</p>
                <p>MarketPlace</p>
                <p>Create</p>
            </div>

            <div className='headerActions' onClick={()=> setAppTheme()}>
                <div className='themeSwitchContainer'>
                    <img src={themeSwitchIcon} className='switchlogo' alt=''/>
                </div>
            </div>

            <div className='loginButton'>
                GET IN
            </div>
        </div>
    )
}

export default Header
