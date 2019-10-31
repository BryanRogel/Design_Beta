import React, { Component } from 'react'
import { Drawer as DrawerAntd, Button } from 'antd';
import styled from 'styled-components'

import Carousel from './components/Carousel';

class LoginDrawer extends Component {

    render() {
        const { closeLogin, loginVisible, indexActive} = this.props

        return (
                <DrawerAntd
                    placement='right'
                    closable={false}
                    maskClosable={false}
                    onClose={() => closeLogin()}
                    visible={loginVisible}
                    width='39%'
                    maskStyle={{
                        boxShadow:'0px 0px 18px #444444',
                        backgroundColor: 'rgba(0,0,0,0.2)'
                    }}
                    bodyStyle={{
                        backgroundColor: '#ededed',
                        height: '100%'
                    }}
                    destroyOnClose={true}
                    >
                    <Style>
                        <div id="box-session">
                            <CloseButton>
                                <Button className="closeMenu" onClick={() => closeLogin()}/>
                            </CloseButton>
                            <h2 className="title-panel">Sesión</h2>
                            <Carousel indexActive={indexActive} createAccount={this.createAccount}/>
                        </div>
                    </Style>
                </DrawerAntd>
        )
    }
}

const CloseButton = styled.div`
.closeMenu {
    position:absolute;
    top:15px;
    right:15px;
    display:block;
    background:url(icons/icons.png);
    background-repeat:no-repeat;
    background-position:-330px -112px;
    width:24px;
    height:24px;
    padding:0px 0px;
    border: none
}
`
const Style = styled.div`
margin-top: 20px;
margin-left: 7px;
margin-right: 20px;
font-size: 10px;
.title-panel { 
    line-height: 35px;
    font-size:23px;
    color:#1d3a7a;
    text-transform:uppercase;
    font-weight:700;
    border-bottom:2px solid #6db72b;
    margin-top:5px;
}
.swiper-container-sign .swiper-slide {
    height:auto !important;
}
`

export default LoginDrawer;