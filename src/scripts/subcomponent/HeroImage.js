import React, {Component} from 'react'
import ReactDOM from 'react-dom'
import $ from 'jquery';

const listImages = [
    "/images/heros/hero-image_1.jpg",
    "/images/heros/hero-image_2.jpg",
    "/images/heros/hero-image_3.jpg"
]
class HeroImage extends Component {

    constructor(props) {
        super(props);

        this.state = {
            currentImagePos: 0,
            currentImage: listImages[0],
            currentImageAlt: 'Dinner Images',
            currentTextDisplayed: '',
            delay: 4000,
            isEnded: false
        }
    }

    componentDidMount() {

    }

    render() {
        return (
            <div>
                <div className='hero__image' id='image__hero_main'>
                    <img className='hero_img__faded' src={this.state.currentImage} alt={this.state.currentImageAlt}></img>
                </div>
                <div className='hero__text' id='explain__text_hero'>
                    <p id='text_container_1'>Dinner</p>
                    <p id='text_container_2'>a safe place to eat, meeting and rest time with family.</p>
                </div>
            </div>
        )
    }
}

export default HeroImage;