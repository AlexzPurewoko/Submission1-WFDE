import React, { Component } from 'react'
import TitleMain from '../../subcomponent/TitleMain'
import RingProgressBar from '../../subcomponent/RingProgressBar'
import RatingCircleComponent from '../../subcomponent/RatingCircleComponent'
import ItemRestaurant from '../../subcomponent/ItemRestaurant'
import LIstItemRestaurant from './LIstItemRestaurant'

import DataImplement from '../../api/DataImplement';

const data = {
    "id": "6c7bqjgi84kcowlqdz",
      "name": "Bring Your Phone Cafe",
      "description": "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet.",
      "pictureId": "https://dicoding-restaurant-api.el.r.appspot.com/images/medium/41",
      "city": "Medan",
      "rating": 4.6
}

const styleI = {
    margin: '40px'
}
export class MainSection extends Component {

    constructor(props) {
        super(props);

        this.state = {
            allData: null
        }
    }

    componentDidMount() {
        const data = new DataImplement();
        /*data.getData().then(response => response.json())
            .then(data => {
                this.setState({
                    allData: data
                });
            }).catch(e => {
                console.error(e);
            })
        */
        data.getData(data => {
            this.setState({
                allData: data.restaurants
            });
        }, error => {
            console.error(error);
        })
    }
    render() {
        return (
            <section className='main' id='main_content'>
                <TitleMain />

                <div id='main__progress' style={styleI}>
                    <LIstItemRestaurant data={this.state.allData} />
                </div>

                <div className='content' id="list__restaurant">

                </div>
            </section>
        )
    }
}

export default MainSection
