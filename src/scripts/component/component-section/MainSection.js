import React, { Component } from 'react'
import TitleMain from '../../subcomponent/TitleMain'

export class MainSection extends Component {
    render() {
        return (
            <section className='main' id='main_content'>
                <TitleMain />

                <div id='main__progress' />

                <div className='content' id="list__restaurant">

                </div>
            </section>
        )
    }
}

export default MainSection
