import React, { Component } from 'react';
import ItemsCarousel from 'react-items-carousel';

import Login from './Login';
import CreateAccount from './CreateAccount';

class Carousel extends Component {

    render() {
        const { indexActive, createAccount } = this.props
        return (
            
                <ItemsCarousel
                    requestToChangeActive={()=> null}
                    activeItemIndex={indexActive}
                    numberOfCards={1}
                    gutter={20}
                    // leftChevron={<div className='navLeft'><div className='contain'><Icon type="left" style={{ zoom: '250%', color: '#fff' }} /></div></div>}
                    // rightChevron={<div className='navRight'><div className='contain'><Icon type="right" style={{ zoom: '250%', color: '#fff' }} /></div></div>}
                    outsideChevron
                    chevronWidth={0}
                    gutter={0}
                >
                <Login createAccount={createAccount}/>
                <CreateAccount/>
                <div>LEL</div>
                </ItemsCarousel>
        )
    }
}

export default Carousel;
