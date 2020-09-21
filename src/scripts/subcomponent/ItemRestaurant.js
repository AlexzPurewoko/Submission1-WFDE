import React, { Component } from 'react'
import $ from 'jquery';

const ratingStyle = {
    color: 'orange'
}
export class ItemRestaurant extends Component {

    constructor(props){
        super(props);

        this.containerItemRef = React.createRef();
        this.clearSpaceTranslate = this.clearSpaceTranslate.bind(this);
    }

    clearSpaceTranslate() {
        const containerItem = $(this.containerItemRef.current);
        const imageContainer = containerItem.find('.container-item-image');
        const headerContainer = containerItem.find('.item-header');

        headerContainer.css('height', `${imageContainer.height()}px`)
    }

    componentDidMount() {
        setTimeout(this.clearSpaceTranslate, 300);
        window.addEventListener('resize', this.clearSpaceTranslate)
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.clearSpaceTranslate)
    }
    render() {
        const {name, description, pictureId, city, rating} = this.props.data;

        return (      
            <div className='container-item' ref={this.containerItemRef}>
                <div className='item-header'>
                    <div className='container-item-image'>
                        <img src={pictureId} alt={`Restaurant ${name}`}></img>
                    </div>
                    <div className='item-header-text'>
                        <p className='item-header-title'>{name}</p>
                        <p className='item-header-subtitle'><i className='material-icons'>location_on</i> {city}</p>
                    </div>
                </div>
                <div className='item-content'>
                    <p className='rating-show'><i className='material-icons' style={ratingStyle} >star</i> {rating}</p>
                    <p className='item-description'>Description :</p>
                    <p className='description-item-content'>{description}</p>
                </div>
            </div>
        )
    }
}

export default ItemRestaurant
