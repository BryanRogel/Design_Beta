import React, { Component } from 'react';
import styled from 'styled-components';

class Footer extends Component {

    render() {
        return (
            <Wrapper>
				<footer className="footer-distributed">
					<div className="footer-left">
						<img className="logo" src="/images/paga_poco_logo.png"/>
					</div>
					<div className="footer-center">
						<div className="column">
							<div>
								<p>BÚSCANOS EN LOS KIOSKOS DE</p>
								<img src="https://cdn-pro.elsalvador.com/escom_the_one/images/logo-edh.jpg" className="logoEDH"/>
							</div>
						</div>
						<div className="column">
							<div>
								<h5>ATENCIÓN TELEFÓNICA</h5>
								<p>Lun a Vie: 8am a 1pm/ 2pm a 5pm</p>
								<p>Sábado: 8am a 12m</p>
								<p>(503) 2231-7800</p>
							</div>
						</div>
					</div>
					<div className="footer-right"> 
						<p className="footer-company-about">
							<span>DESCARGA NUESTRA APP</span>
								<img className="logoGoogle" src="/icons/googlePlay.svg"/>
							<div className="logoApp">
								<img className="logoApp" src="/icons/appStore.svg"/>
							</div>
						</p>
						<span>SÍGUENOS EN:</span>
						<div className="footer-icons">
							<a href="#"><img className="socialMedia" src="/icons/facebookCircle.svg"/></a>
							<a href="#"><img className="socialMedia" src="/icons/twitterCircle.svg"/></a>
							<a href="#"><img className="socialMedia" src="/icons/instagramCircle.svg"/></a>
						</div>
					</div>
				</footer>
            </Wrapper>
        );
    }
}

const Wrapper = styled.footer`
width: 100%;
.footer-distributed{
	background-color: #53AB5C;
	box-shadow: 0 1px 1px 0 rgba(0, 0, 0, 0.12);
	box-sizing: border-box;
	width: 100%;
	height: 150px;
	text-align: left;
	font: bold 16px sans-serif;
	margin-top: 0px;
	height: 360px;
	min-width: 100vh;
}
.logo{
    height: 140px;
}
.logoEDH{
	height: 30px;
}
.logoApp{
	height: 40px !important;
	margin-left: 5px !important;
}
.logoGoogle{
	height: 60px !important;
	margin-right: 0px !important;
}
.socialMedia{
	margin-top: 0px;
	height: 35px;
}
.column {
	float: left;
	width: 50%;
}
.footer-distributed .footer-left,
.footer-distributed .footer-center,
.footer-distributed .footer-right{
	display: inline-block;
	vertical-align: top;
	margin-top: 50px !important;
}
.footer-distributed .footer-left{
	height: 140px;
	background-color: blue;
	margin-left: 140px;
}
.footer-distributed h3{
	color:  black;
	font: normal 36px 'Cookie', cursive;
	margin: 0;
}
.footer-distributed .footer-company-name{
	color:  #8f9296;
	font-size: 14px;
	font-weight: normal;
	margin: 0;
}
.footer-distributed .footer-center{
	width: 45%;
	height: 250px;
	background-color: gray;
}
.footer-distributed .footer-center p{
	color:  white !important;
	font-size: 13px;
	font-weight: normal;
}
.footer-distributed .footer-center h5{
	color:  white !important;
	font-size: 13px;
	font-weight: normal;
}
.footer-distributed .footer-center i{
	background-color:  black;
	color: black;
	font-size: 25px;
	width: 38px;
	height: 38px;
	border-radius: 50%;
	text-align: center;
	line-height: 42px;
	margin: 10px 15px;
	vertical-align: middle;
}
.footer-distributed .footer-center i.fa-envelope{
	font-size: 17px;
	line-height: 38px;
}
.footer-distributed .footer-center p{
	display: inline-block;
	color: black;
	vertical-align: middle;
	margin:0;
}
.footer-distributed .footer-center p span{
	display:block;
	font-weight: normal;
	font-size:14px;
	line-height:2;
}
.footer-distributed .footer-right{
	background-color: goldenrod;
	width: 20%;
}
.footer-distributed .footer-company-about{
	line-height: 20px;
	color:  white;
	font-size: 13px;
	font-weight: normal;
	margin: 0;
	height: 140px;
	background-color: black;
}
.footer-distributed .footer-company-about span{
	display: block;
	color:  #ffffff;
	font-size: 14px;
	font-weight: bold;
	margin-bottom: 0px;
}
.footer-distributed .footer-icons{
	margin-top: 25px;
}
.footer-distributed .footer-icons a{
	display: inline-block;
	width: 35px;
	height: 35px;
	cursor: pointer;
	background-color:  #33383b;
	border-radius: 2px;
	font-size: 20px;
	color: #ffffff;
	text-align: center;
	line-height: 35px;
	margin-right: 3px;
	margin-bottom: 5px;
}

@media (max-width: 880px) {
	.footer-distributed{
		font: bold 14px sans-serif;
		width: 100% !important;
		padding: 0px !important;
	}
	.footer-distributed .footer-left,
	.footer-distributed .footer-center,
	.footer-distributed .footer-right{
		display: block;
		width: 100% !important;
		margin-bottom: 0px;
		text-align: center;
		margin-top: 0px !important;
		background-color: #53AB5C;
	}
	.footer-distributed .footer-center i{
		margin: 0 !important;
		padding: 0px;
	}
	.main {
		line-height: normal;
		font-size: auto;
	}
	.footer-distributed .footer-left{
	margin-left: 0px;
	background-color: black;
	}
}
`

export default Footer;