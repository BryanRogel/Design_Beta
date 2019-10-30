import React, { Component } from 'react'
import { Drawer as DrawerAntd, Button } from 'antd';
import styled from 'styled-components'

class Login extends Component {


    render() {
        const { closeLogin, loginVisible} = this.props
        return (
                <DrawerAntd
                    placement='left'
                    closable={false}
                    onClose={() => closeLogin()}
                    visible={loginVisible}
                    width='100%'
                    bodyStyle={{
                        backgroundColor: '#2f4b7d',
                        height: '100%'
                    }}
                    destroyOnClose={true}
                    >
                    <CloseButton>
                        <Button className="closeMenu" onClick={() => closeLogin()}/>
                    </CloseButton>
                             <div id="box-session">
                        <a href="#link" id="close-box-session"></a>
                        <h2 className="title-panel">Sesión</h2>
                        <div className="swiper-container swiper-container-sign">
                            <div className="swiper-wrapper">
                                <div className="swiper-slide swiper-no-swiping">
                                    <p>Usando:</p>
                                    <div className="box-session-socialMedia">
                                        <a href="#link-facebook"><span className="icon-login facebook-login"></span></a>
                                        <a href="#link-google"><span className="icon-login google-login"></span></a>
                                        <a href="#link-instagrame"><span className="icon-login instagram-login"></span></a>
                                    </div>
                                    <p className="small-spacer"></p>
                                    <span>o con</span>
                                    <form className="no-vertical-margin" action="session.php">
                                        <label>Email</label>
                                        <input type="text" name="fullname" className="form-info"/>
                                        <label>Contraseña</label>
                                        <input type="text" name="password" className="form-info"/>
                                        <p className="small-spacer"></p>
                                        <input type="submit" value="Iniciar sesión" className="button-link"/>
                                        <p><a href="#" id="link-recover-password" className="small-text">Olvidé mi usuario y / o contraseña</a></p>
                                        <div className="line-separator"></div>
                                        <p style="line-height:1.1;">¿No tienes cuenta?</p>
                                        <input type="button" value="Crear cuenta" className="button-link" id="btn-link-to-signup"/>
                                    </form>
                                    <div className="only-mobile"><p className="super-spacer"></p></div>
                                </div>
                                </div>
                                </div>
                                </div>
                </DrawerAntd>
        )
    }
}

const CloseButton = styled.div`
.closeMenu {
    position:absolute;top:15px;right:15px;display:block;background:url(icons/icons.png);background-repeat:no-repeat;background-position:-398px -112px;width:24px;height:24px;padding:0px 0px;
    border: none; }
`

export default Login;


        //             <div className="swiper-slide swiper-no-swiping" id="slide-create-account">
		// 				<a href="#link" onClick="swiperSign.slideTo(0);">iniciar sesión</a> | <a href="#link" onClick="swiperSign.slideTo(3);">recuperar contraseña</a>
		// 				<p className="small-spacer"></p>
		// 				<h3 className="subtitle-page">Crear cuenta </h3>
		// 				<form className="form-block">
		// 					<label>Email</label>
		// 					<input type="text" name="fullname" className="form-info" value="">
		// 					<label>Contraseña</label>
		// 					<input type="password" name="password" className="form-info" value="">
		// 					<div className="small-spacer"></div>
		// 					<div className="line-separator"></div>
		// 					<label for='name'>Nombre</label>
		// 					<input className="form-info" type="text" name="nombre" value="">
		// 					<label for='apellidos'>Apellidos</label>
		// 					<input className="form-info" type="text" name="apellidos" size="40" value="">
		// 					<label>Dirección residencia</label>
		// 					<input type="text" name="residencia" className="form-info" value="">
		// 					<label>Teléfono</label>
		// 					<input type="tel" name="telefono" className="form-info telephone-number" value="">							
		// 					<label>Sexo</label>
		// 					<input type="radio" name="sexo" value="male"> Masculino <input type="radio" name="sexo" value="female"> Femenino
		// 					<label>Año nacimiento</label>
		// 					<select className="select-list years-list" name="menu">
		// 						<option>--</option>
		// 						<option>1999</option>
		// 						<option>1998</option>
		// 						<option>1997</option>
		// 						<option>1996</option>
		// 						<option>1995</option>
		// 						<option>1994</option>
		// 						<option>1993</option>
		// 						<option>1992</option>
		// 						<option>1991</option>
		// 						<option>1990</option>
		// 						<option>1989</option>
		// 						<option>1988</option>
		// 						<option>1987</option>
		// 						<option>1986</option>
		// 						<option>1985</option>
		// 						<option>1984</option>
		// 						<option>1983</option>
		// 						<option>1982</option>
		// 						<option>1981</option>
		// 						<option>1980</option>
		// 					</select>
							
		// 					<label>Ciudad</label>
		// 					<select className="select-list" name="menu" >
		// 						  <option>--</option>
		// 						  <option>Ahuachapán</option>
		// 						  <option>Santa Ana</option>
		// 						  <option>Sonsonate</option>
		// 						  <option>La Libertad</option>
		// 						  <option>La Paz</option>
		// 						  <option>San Salvador</option>
		// 					</select>
							
		// 					<div className="box-generic-form">
		// 						<label className="switch">
		// 							<input type="checkbox" className="form-info inline">
		// 							<span className="slider round"></span>
		// 						</label>
		// 						<span className="normal-text">Notificaciones de nuevas ofertas</span>
		// 					</div>
		// 					<div className="box-generic-form">
		// 						<label className="switch">
		// 							<input type="checkbox" className="form-info inline">
		// 							<span className="slider round"></span>
		// 						</label>
		// 						<span className="normal-text">Newsletter en ofertas</span>
		// 					</div>
		// 					<div className="box-generic-form">
		// 						<input className="styled-checkbox form-info inline" id="styled-checkbox-1" type="checkbox" value="value1" style="display:inline !important;clear:none !important;">
		// 						<label for="styled-checkbox-1" className="inline" style="margin-left:-15px;"></label>
		// 						<span className="normal-text">He leído y acepto los términos y condiciones de uso de este sitio</span>
		// 					</div>
		// 					<div className="spacer"></div>
		// 					<a href="#link" className="button-link" onClick="swiperSign.slideNext();">Crear mi cuenta</a>
		// 				</form>
		// 				<div className=""><p className="super-spacer"></p></div>
		// 			</div>
        //             <div className="swiper-slide swiper-no-swiping">
        //                 <div className="box-generic-form">
        //                    <h3 className="subtitle-page text-centered black-text">¡Excelente: Cuenta creada!</h3>
        //                     <div className="profile-photo">
        //                         <img src="images/carnet-pagapoco.png" className="img-responsive">
        //                     </div>
        //                     <center><span className="name-profile black-text">Alejandra Marina Gutierrez</span></center>
		// 					<div className="small-spacer"></div>
        //                     <center><span className="resume-profile">Controla tus cupones y has las gestiones que sean necesarias desde esta misma aplicación.</span></center>
        //                 </div>
        //                 <div className="box-generic-form">
        //                     <div className="button-margin"><a href="account-01.php" className="button-link">Ir a mi página de perfil</a></div>
        //                 </div>
        //                 <div className="box-generic-form">
        //                     <center><div className="button-margin"><a href="index.php" className="button-link">Buscar nuevas ofertas</a></div></center>
        //                 </div>
		// 				<div className="only-mobile"><p className="super-spacer"></p></div>						
		// 			</div>
        //             <div className="swiper-slide swiper-no-swiping">
        //                 <div className="box-generic-form">
        //                     <h3 className="subtitle-page">Recuperar clave</h3>
		// 					<p>No te preocupés, solo ingresa tu dirección de correo electrónico con la que te registrastes, y te enviaremos un enlace para que cambies a una nueva contraseña.</p>
		// 					<form>
		// 						<label>Email</label>
		// 						<input type="text" name="email" className="form-info">
		// 						<input type="button" value="Recuperar cuenta" className="button-link" id="btn-account-recover">
		// 						<div className="medium-spacer"></div><div className="medium-spacer"></div>
		// 						<h3 className="subtitle-page">¿No tienes cuenta?</h3>
		// 						<p>¿En realidad no tienes cuenta con nosotros? Haz clic en el botón de abajo y regístrate ya.</p>
		// 						<input type="button" value="Crear cuenta" className="button-link" id="btn-no-account">
		// 					</form>                           
							
							
		// 					<div className="only-mobile"><p className="super-spacer"></p></div>						
		// 				</div>
		// 			</div>
        //             <div className="swiper-slide swiper-no-swiping">
        //                 <div className="box-generic-form">
        //                     <h3 className="subtitle-page">Revisa tu correo</h3>
		// 					<p className="paragraph">Te hemos enviado un mensaje a tu cuenta de correo para que hagas clic y puedas cambiar tu contraseña para poder iniciar sesión en nuestro sitio web.</p>
							
		// 					<p className="paragraph">Si no lo encuentras fácilmente, te recomendamos buscar también en tu bandeja de spam; porque es probable que tu lector de correos haya enviado a esa bandeja nuestro mensaje.</p>

		// 					<input type="button" value="Cerrar" className="button-link" onClick="close_session();">
							
		// 					<div className="only-mobile"><p className="super-spacer"></p></div>						
		// 				</div>
		// 			</div>					
        //         </div>
        //     </div>

		// </div>
