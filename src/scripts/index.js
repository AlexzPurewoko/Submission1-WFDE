import 'regenerator-runtime'; /* for async await transpile */
import '../styles/sass/index.sass';
import $ from 'jquery'
import React from 'react';
import ReactDOM from 'react-dom';
import MainApplication from './application/MainApplication';

console.log($('#root__application')[0])
ReactDOM.render(
    <React.StrictMode>
        <MainApplication />
    </React.StrictMode>,
    document.querySelector('#root__application')
)

