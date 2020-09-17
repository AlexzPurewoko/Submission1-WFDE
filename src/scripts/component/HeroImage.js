import React, {Component} from 'react'

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
            currentImage: ''
        }
    }
    render() {
        return (
            <div className='container__hero'>
                <img class='hero_img__faded' src={this.state}
            </div>
        )
    }
}