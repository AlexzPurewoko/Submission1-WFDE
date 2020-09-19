
import React, { Component } from 'react'
import ReactDOM from 'react-dom'
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
document.querySelectorAll('.nav-wrapper').forEach((e) => ReactDOM.render(<HeaderNavigation />, e));

// implementing the hamburger button
const menu = document.querySelector('#menu');
const mainElement =  document.querySelector('main');
const navDrawer = document.querySelector('#nav-slider');
menu.addEventListener('click', (e) => {
    if(navDrawer.classList.contains('open')){
        navDrawer.classList.add('close')
        navDrawer.classList.remove('open')
    } else {

        navDrawer.classList.add('open')
        navDrawer.classList.remove('close');
    }
    e.stopPropagation();
});

document.querySelector('#nav-slider .nav_list').addEventListener('click', e => {
    if(navDrawer.classList.contains('open')){
        navDrawer.classList.add('close')
        navDrawer.classList.remove('open')
    } else {

        navDrawer.classList.add('open')
        navDrawer.classList.remove('close');
    }
    e.stopPropagation();
})

//mainElement.querySelector('click', _ => navDrawer.classList.remove('open'))
