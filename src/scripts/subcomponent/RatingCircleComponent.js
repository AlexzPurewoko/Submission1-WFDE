import React, { Component } from 'react'
import RingProgressBar from './RingProgressBar';
import $ from 'jquery';


/**
 * Used on the future. In developing way...
 */
export class RatingCircleComponent extends Component {
    constructor(props){
        super(props);
        this.state = {
            strokeSize: 4,
            radius: 40,
            rating: 4.0
        }
        this.updateSizeRating = this.updateSizeRating.bind(this);
    }

    removeExtraSpace() {
        $('.container-rating').css('height', `${$('.rating svg').height()}px`);
    }
    updateSizeRating() {
        this.removeExtraSpace();
        const width = $(window).width();

        let strokeSize = this.state.strokeSize;
        let radius = this.state.radius;
        let progress = this.state.progress;
        if(width >= 320 && width < 600) {
            strokeSize = 3;
            radius = 30
        }

        this.setState({
            strokeSize: strokeSize,
            radius: radius,
            progress: progress
        })
    }

    componentDidMount(){
        window.onresize = this.updateSizeRating;
        this.removeExtraSpace();
        this.updateSizeRating();
    }

    componentWillUnmount() {
        
    }
    render() {
        return (
            <div className='container-rating'>
                <div className='rating'>
                    <RingProgressBar 
                        stroke={this.state.strokeSize}
                        radius={this.state.radius}
                        progress={this.state.rating * 100 / 5} />
                </div>
                <div className='rating-text'>
                    <p>{this.state.rating}</p>
                </div>
            </div>
        )
    }
}

export default RatingCircleComponent
