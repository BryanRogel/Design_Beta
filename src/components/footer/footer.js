import React, { Component } from 'react';
import styled from 'styled-components';

class Footer extends Component {

    render() {
        return (
            <Wrapper>
				<div class="micro-spacer"></div>
				<footer>
					<div class="wrapper">
						<div class="row">
							<div class="col-lg-2 text-centered">
								<img className="logo" src="/images/paga_poco_logo.svg"/>
							</div>
							<div class="col-lg-4 text-centered">
								<p class="text-centered">Búscanos en kioskos de<br/><img src="/images/logo-edh.png" class="medium-logo"/></p>
								<p class="mini-spacer"> </p>
								<p class="text-centered"><a href="#link" class="button-link">Ver sucursales</a></p>
							</div>
							<div class="col-lg-4 text-centered">
								<h4 class="black-highlighted text-centered">ATENCIÓN AL CLIENTE:</h4>
								<p>
									<strong>Lun-Vie</strong> 8am a 1pm - 2pm a 5pm / <strong>Sáb</strong> 8am a 12m<br/>
									<strong>Teléfono:</strong> 2231-7800 / <strong>Whatsapp:</strong> 7860-2032<br/>
									<strong>Correo:</strong> info@pagapoco.com
								</p>
							</div>
							<div class="col-lg-2 text-centered">
								<h4 class="black-highlighted text-centered">SÍGUENOS EN:</h4>
								<p><a href="#link-facebook" class="fanpage-facebook"></a> <a href="#link-facebook" class="fanpage-instagram"></a></p>
							</div>					
						</div>
					</div>
				</footer>
				<div class="bottom-bar">
					<a href="#link">Preguntas frecuentes</a> | <a href="#link">Políticas</a> | <a href="#link">Cookies</a>
				</div>
            </Wrapper>
        );
    }
}

const Wrapper = styled.footer`

.logo {
	display:block;
	clear:both;
	width:60%;
	max-width:130px;
	margin:0px auto;
	float:none; 
	margin-left: 80px;
}
.wrapper { width: 100%; height: auto; margin: 0 auto; max-width: 1280px;margin:30px auto 20px auto; }
.wrapper-full-width { width: 100%; height: auto; margin: 0 auto;margin:30px auto 0px auto; }
.row { width: 100%; height: auto; margin: auto; display: flex; flex-wrap: wrap; }
.text-centered { text-align:center !important; margin-bottom:0px; }
img.medium-logo { width:200px;height:auto;margin:5px auto; }
.mini-spacer { display:block;clear:both;width:100%;height:5px; }
.black-highlighted { color:black;font-weight:600;vertical-align:top; font-size: 13px; margin-bottom: 10px; }
a.fanpage-facebook,a.fanpage-instagram { display:inline-block;background:url(icons/icons.png);background-repeat:no-repeat;width:54px;height:54px; }
a.fanpage-facebook { background-position:-521px -1204px; }
a.fanpage-instagram { background-position:-866px -1204px; }
strong { vertical-align:top; }
p { display:block;clear:both;width:100%; font-size: 12px; }
.bottom-bar { display:block;clear:both;width:100%;height:auto;padding:10px auto;margin:15px auto;text-align:center; }
.bottom-bar > a { font-weight:600;color:#000000;text-transform:uppercase;font-size:11.5px; }
.micro-spacer { display:block;clear:both;width:100%;height:1px; }
.button-link { color:#1d3a7a;text-align:center;padding:10px 30px;margin:5px auto;text-transform:uppercase;font-size:14px;font-weight:600;border:2px solid;border-color:#1d3a7a;border-radius:20px;  }
.button-link.white-style { border-color:white;color:white; }
.button-link:hover { background-color:#1d3a7a;color:#FFFFFF; }
.button-link.white-style:hover { border-color:#6db72b;color:#6db72b; }

@media only screen and (max-width: 990px){
	.logo {
		width:25%;
		margin-bottom: 40px;
	}
}
`

export default Footer;