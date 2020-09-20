import React from 'react'
import HeaderNavigation from '../subcomponent/header-nav'

function HeaderComponent() {
    return (
        <header>
            <div className='wrapper'>
                <div className='container__logo'>
                    <img id='menu' className='menu_header' src={"/images/icons/hamburger-icon.svg"} alt={'menu'} />
                    <img id='logo' src={"/images/icons/restaurant-icon.svg"} alt={'Logo FavResto'} onClick={_ => window.location.href = '#'} />
                </div>
                <div className='logo_brand'>
                    <h1 className='logo_brand_title_1'>Fav</h1>
                    <h1 className='logo_brand_title_2'>Resto</h1>
                </div>
                <div className='nav-wrapper'>
                    <HeaderNavigation />
                </div>
                </div>
        </header>
    )
}

export default HeaderComponent
