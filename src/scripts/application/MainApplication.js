import React, { Component } from 'react'
import $ from 'jquery';
import HeaderComponent from '../component/HeaderComponent';
import applyNav from '../modules/nav-module';
import applySticky from '../modules/sticky-header';
import applyRemoveSpaceAfterTranslate from '../modules/remove-translate-space';
import MainComponent from '../component/MainComponent';

class MainApplication extends Component {


    componentDidMount() {
        window.$ = $;

        // setting timeout to wait success rendering
        setTimeout( _ => {
            // sticky headers when scrolling
            applySticky();

        // remove space after translate title__main up
            applyRemoveSpaceAfterTranslate();
            applyNav();
        }, 100);
        
    }


    render() {
        return (
            <div>
                <HeaderComponent />
                <div className='nav-wrapper' id='nav-slider'></div>
                <MainComponent />
            </div>
        )
    }
}

export default MainApplication
