import React, { Component } from 'react';
import styled from 'styled-components';
import { Form, Icon, Input, Button, Checkbox } from 'antd';
import SocialLogin from '../components/socialLogin/SocialLogin';

class CreateAccount extends Component{

    render(){
        return(
            <Style>
                <div className="col-12">
                    <div className="center">
                        <div className="column column-mobile-first">
                            <h4>USANDO RED SOCIAL</h4>
                            <div>
                                <SocialLogin/>>
                            </div>
                        </div>
                        <div className="column column-mobile-second">
                            <h4>LLENANDO FORMULARIO</h4>
                            <Form onSubmit={this.handleSubmit} className="right">
                                <div className="">
                                    <div className="">
                                        <div className="column-left">
                                        <p>Email:</p>
                                        </div>
                                        <div className="column-right">
                                            <input className="input" type="text" name="email"/>
                                        </div>
                                    </div>
                                    <div>
                                        <div className="column-left">
                                            <p>Contrase&ntilde;a: </p>
                                        </div>
                                        <div className="column-right">
                                            <input type="password" name="password"/>
                                        </div>
                                    </div>
                                </div>
                                <Line/>
                                <div>
                                    <div>
                                        <div className="column-left">
                                            <p>Nombre: </p>
                                        </div>
                                        <div className="column-right">
                                            <input type="text" name="first-name"/>
                                        </div>
                                    </div>
                                    <div>
                                        <div className="column-left">
                                            <p>Apellido: </p>
                                        </div>
                                        <div className="column-right">
                                            <input type="text" name="last-name"/>
                                        </div>
                                    </div>
                                    <div>
                                        <div className="column-left">
                                            <p>Sexo:</p>
                                        </div>
                                        <div className="column-right">
                                            <select className="select" name="sex">
                                                    <option>Femenino</option>
                                                    <option>Masculino</option>
                                                    <option>Prefiero no decirlo</option>
                                                </select>
                                        </div>
                                    </div>
                                </div>
                                <Line/>
                                <div>
                                    <div>
                                        <div className="column-left">
                                            <p>Direcci&oacute;n: </p>
                                        </div>
                                        <div className="column-right">
                                            <input type="text" name="address"/>
                                        </div>
                                    </div>
                                    <div>
                                        <div className="column-left">
                                            <p>Ciudad:</p>
                                        </div>
                                        <div className="column-right">
                                            <select className="select" name="city">
                                                    <option>San Salvador</option>
                                                    <option>Masculino</option>
                                                    <option>Prefiero no decirlo</option>
                                                </select>
                                        </div>
                                    </div>
                                    <div>
                                        <div className="column-left">
                                            <p>Tel&eacute;fono: </p>
                                        </div>
                                        <div className="column-right">
                                            <input type="text" name="phone"/>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <div className="column-left"></div>
                                    <div className="column-right">
                                        <Button type="primary" htmlType="submit" className="login-form-button">
                                        Log in
                                        </Button>
                                    </div>
                                </div>
                            </Form>
                        </div>
                    </div>
                </div>
            </Style>
        )
    }
}

const Style = styled.div`
background-color: yellow;
min-height: calc(100vh - (100px + 300px));
height:800px;

.column {
    margin-top: 120px;
	width: 50%;
    background-color: gray;
    text-align: left;
    height: 600px;
	display: inline-block;
	vertical-align: top;
	margin-top: 50px !important;
}
.column-login-data {
    background-color: black;
    width: 100%;
}
.column-left{
    height: 40px;
    padding-left: 0 !important;
    text-align: right !important;
	max-width: 20%;
    display: inline-block;
    background-color: yellow;
}
.column-right{
    height: 40px;
    padding-left: 0 !important;
    text-align: left !important;
	min-width: 80%;
    display: inline-block;
    background-color: green;
}
.center {
    margin-left: 140px;
    margin-right: 140px;
}
.right{
    text-align: right;
}
.input {
    font-size:600px;
}
.select {
    -webkit-appearance: none;
    -moz-appearance: none;
    background-image: url("data:image/svg+xml;utf8,<svg fill='black' height='24' viewBox='0 0 24 24' width='24' xmlns='http://www.w3.org/2000/svg'><path d='M7 10l5 5 5-5z'/><path d='M0 0h24v24H0z' fill='none'/></svg>");
    background-repeat: no-repeat;
    background-position-x: 100%;
    background-position-y: 3px;
    padding: 5px;
}
@media (max-width: 880px) {
height:1000px;
.column {
    margin-top: 0px;
	float: left;
	width: 100%;
    background-color: gray;
    text-align: left;
}
.column-mobile-first{
    margin-top: 20px;
    height: 300px;  
}
.column-mobile-second{
    height: 600px;  
    margin-top: 0px !important;
}
.center {
    margin-left: 0px;
    margin-right: 0px;
}
.column-login-data {
}
}
@media (max-width: 355px){
    
}
`

const Line = styled.div`
    margin: 20px 6px 15px 10px;
    border-bottom-style: dashed;
    border-color: #696969;
    border-width: thin medium 2px;
`

export default CreateAccount;
