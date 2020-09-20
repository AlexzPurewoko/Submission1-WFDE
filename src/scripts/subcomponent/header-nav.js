
import React, { Component } from 'react'
class HeaderNavigation extends Component {
    render() {
        return (
            <nav className='nav_drawer' id='nav'>
                <ul className='nav_list'>
                    <li className='nav_item'><a href="#">Home</a></li>
                    <li className='nav_item'><a href="#">Favorite</a></li>
                    <li className='nav_item'><a href="#">About Us</a></li>
                </ul>
            </nav>
        );
    }
}

export default HeaderNavigation;
