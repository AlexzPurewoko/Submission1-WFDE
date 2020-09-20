import React, { Component } from 'react'
import $ from 'jquery';
import ReactDOM from 'react-dom';
class TitleMain extends Component {

   render() {
        return (
            <div className='title_main'>
                <h1>Let's Look</h1>
                <svg viewBox="0 0 6 6" xmlns="http://www.w3.org/2000/svg">
                    <line x1="-1" y1="3" x2="7" y2="3" stroke="#00639B" strokeLinecap="round" />
                </svg>
            </div>
        )
    }
}

export default TitleMain
