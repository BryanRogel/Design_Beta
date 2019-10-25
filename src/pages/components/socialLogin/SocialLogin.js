import React, { Component } from 'react'
import Styled from 'styled-components';
import FacebookLogin from './FacebookLogin'

class SocialLogin extends Component {
    render() {
        return (
            <div>
                <div>
                    <FacebookLogin/>
                </div>
            </div>
        )
    }
}

export default SocialLogin
