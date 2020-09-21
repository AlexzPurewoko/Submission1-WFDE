import React, { Component } from 'react'
import ReactDOM from 'react-dom';
import $ from 'jquery'

const rotateSvg = {
    transform: 'rotate(-90deg)'
}
class RingProgressBar extends Component {

    constructor(props) {
        super(props);
        
        const { radius, stroke } = this.props;
        
        this.normalizedRadius = radius - stroke * 2;
        this.circumference = this.normalizedRadius * 2 * Math.PI;
      }
      
      render() {
        const { radius, stroke, progress } = this.props;
        console.log(radius, ',', stroke, ',', progress);
    
        const strokeDashoffset = this.circumference - progress / 100 * this.circumference;
      
        return (
          <svg
            height={radius * 2}
            width={radius * 2}
            style={rotateSvg}
           >
            <circle
              stroke="#F97700"
              fill="transparent"
              strokeDasharray={ this.circumference + ' ' + this.circumference }
              style={ { strokeDashoffset } }
              strokeWidth={ stroke }
              r={ this.normalizedRadius }
              cx={ radius }
              cy={ radius }
             />
          </svg>
        );
      }
}
export default RingProgressBar
