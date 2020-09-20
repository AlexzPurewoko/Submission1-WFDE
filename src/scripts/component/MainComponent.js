import React, { Component } from 'react'
import HeroSection from './component-section/HeroSection'
import MainSection from './component-section/MainSection'

export class MainComponent extends Component {
    render() {
        return (
            <main>
                <HeroSection />
                <MainSection />
            </main>
        )
    }
}

export default MainComponent
