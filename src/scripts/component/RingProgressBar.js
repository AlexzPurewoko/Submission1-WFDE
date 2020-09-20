import React, { Component } from 'react'
import ReactDOM from 'react-dom';
import $ from 'jquery'

class RingProgressBar extends Component {

    constructor(props){
        super(props);

        const {radius, stroke} = this.props;

        this.normalizedRadius = radius - stroke * 2;
        this.circumference = this.normalizedRadius * 2 * Math.PI;
    }


    render() {
        const {radius, stroke, progress} = this.props;
        const strokeDashOffset = this.circumference - progress / 100 * this.circumference;

        return (
            <svg height={radius * 2} width={radius * 2} >
                <circle
                    stroke='#F97700'
                    fill="transparent"
                    strokeWidth={ stroke }
                    strokeDasharray={ `${this.circumference} ${this.circumference}` }
                    style={ { strokeDashOffset } }
                    strokeWidth={ stroke }
                    r={ this.normalizedRadius }
                    cx={ radius }
                    cy={ radius }
                />
            </svg>
        )
    }
}
$(_ => {

    console.log('Helloddd', document.querySelector('section#main__progress'))
})
ReactDOM.render(
    <RingProgressBar
        radius={60}
        stroke={4}
        progress={60} />, $('#list__restaurant')[0])
export default RingProgressBar
