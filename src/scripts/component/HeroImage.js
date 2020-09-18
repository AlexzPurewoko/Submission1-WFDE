import React, {Component} from 'react'
import $ from 'jquery';

const listImages = [
    "/images/heros/hero-image_1.jpg",
    "/images/heros/hero-image_2.jpg",
    "/images/heros/hero-image_3.jpg"
]
class HeroImage extends Component {

    constructor(props) {
        super(props);

        this.
        this.state = {
            currentImagePos: 0,
            currentImage: '',
            currentImageAlt: '',
            currentTextDisplayed: '',
            delay: 4000,
            isEnded: false
        }
    }

    componentDidMount() {

    }

    heroUpdate()

    render() {
        return (
            <img class='hero_img__faded' src={this.state.currentImage} alt={this.state.currentImageAlt}></img>
        )
    }
}

export default HeroImage;