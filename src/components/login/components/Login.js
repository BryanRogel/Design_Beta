import React, { Component } from 'react'
import styled from 'styled-components';

class Login extends Component {
    render() {
        const { createAccount } = this.props;
        return (
            <Styled>
            <div className="swiper-slide swiper-no-swiping">
                <p className="small-spacer"></p>
				<p>Usando:</p>
                <div className="box-session-socialMedia">
                    <div><span className="icon-login facebook-login"></span></div>
                    <div><span className="icon-login google-login"></span></div>
                    <div><span className="icon-login instagram-login"></span></div>
                </div>
                <p className="small-spacer"></p>
                    <span>o con</span>
                    <form className="no-vertical-margin" action="">
                        <label>Email</label>
                        <input type="text" name="fullname" className="form-info"/>
                        <label>Contraseña</label>
                        <input type="password" name="password" className="form-info"/>
						<p className="small-spacer"></p>
                        <input type="submit" value="Iniciar sesión" className="button-link"/>
                        <p><a href="#" id="link-recover-password" className="small-text">Olvidé mi usuario y / o contraseña</a></p>
						<div className="line-separator"></div>
                        <p style={{lineHeight:1.1}}>¿No tienes cuenta?</p>
                        <input type="button" value="Crear cuenta" onClick={() => createAccount()} className="button-link" id="btn-link-to-signup"/>
                    </form>
            </div>
            </Styled>
        )
    }
}

const Styled = styled.div`
div{
    font-size: 15px;
}
.box-session-socialMedia {
    display: flex;
    width: 100%;
    height:auto;
}
.icon-login {
    display:flex;
    margin:0px 0px;
    background:url(icons/icons.png);
    background-repeat:no-repeat;
    height:40px;
    cursor: pointer;
    margin-right: 4px;
}
.facebook-login {
    background-position: -695px -7px;
    width: 40px;
}
.google-login {
    background-position: -800px -7px;
    width: 40px;
}
.instagram-login {
    background-position: -909px -7px;
    width: 40px;
}
p {
    display:block;
    clear:both;
    width:100%;
    margin-bottom: 1px; 
    font-weight: 500;
}
form label {
    display:block;
    clear:both;
    width:100%;
    text-transform:uppercase;
    color:#000000;
    font-size:12px;
    font-weight:700;
    padding:15px 0px 0px 0px;
    margin-bottom: 3px;
}
a {
    color:#1d3a7a;
    text-decoration:none;
} 
input.button-link {
    background:rgba(255,255,255,0);
}
.button-link {
    color:#1d3a7a;
    text-align:center;
    padding:8px 25px;
    margin:5px auto;
    text-transform:uppercase;
    font-size:14px;
    font-weight:600;
    border:2px solid;
    border-color:#1d3a7a;
    border-radius:20px;
    cursor:pointer;
}
.button-link.white-style {
    border-color:white;
    color:white;
    background:rgba(255,255,255,0) !important;
}
.button-link:hover {
    background-color:#1d3a7a;
    color:#FFFFFF;
}
.button-link.white-style:hover {
    border-color:#6db72b;
    color:#6db72b;
}
.small-spacer {
    display:block;
    clear:both;
    width:100%;
    height:12px;
}
.super-spacer {
    display:block;
    clear:both;
    width:100%;
    height:250px;
}
.line-separator {
    display:block;
    clear:both;
    margin:0px 0px 20px 0px;
    padding:20px 0px 0px 0px;
    height:1px;
    border-bottom:1px dashed #cccccc;
}
input.form-info {
    display:block;
    clear:both;
    font-family:'Montserrat',Tahoma,Verdana;
    width:100%;
    padding:8px 15px;
    border:1px solid #cccccc;
    background-color:white;
    border-radius:10px;
    margin:2px 0px;
    color:#666666;
    letter-spacing:0.003em;
}
input:focus {
outline: none;
}
`

export default Login;