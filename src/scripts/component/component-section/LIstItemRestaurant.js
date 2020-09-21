import React, { Component } from 'react'
import ItemRestaurant from '../../subcomponent/ItemRestaurant';

class LIstItemRestaurant extends Component {

    constructor(props){
        super(props);
    }
    render() {
        let element = null
        if(this.props.data){
            element = this.props.data.map(d => <ItemRestaurant key={d.id} data={d} />);
        }
        return (
            <div className='list-restaurants' >
                {element}
            </div>
        )
    }
}

export default LIstItemRestaurant
