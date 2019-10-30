import React, { Component } from 'react';
import styled from 'styled-components';
import { Icon, Button } from 'antd';
import { blue } from 'ansi-colors';

import Drawer from './components/MenuMobile'
import Login from './components/Login'

class Header extends Component {

    state = { 
        menuVisible: false,
        loginVisible: false
    };

    openMenu = () => {
        this.setState({
            menuVisible: true,
        });
        this.closeLogin();
    };

    closeMenu = () => {
        this.setState({
            menuVisible: false
        });
    };

    openLogin = () => {
        this.setState({
            loginVisible: true
        });
        this.closeMenu();
    };

    closeLogin = () => {
        this.setState({
            loginVisible: false
        });
    };

    render() {
        const { menuVisible, loginVisible} = this.state
        return (
            <Nav>
                <div className="wrapper no-vertical-margin">
                    <div className="row">
                        <div className="col5 col2-mobile">
                            <div className="menu only-mobile" onClick={this.openMenu}></div>
                            <div className="col12 only-desktop">
                                <div href="notifications.php" className="top-links"><span className="icon-top-left icon-alerts"></span>Notificaciones</div>
                                <span className="division">|</span>
                                <div className="search-box">
                                    <form method="post" action="" className="form-header">
                                        <input className="search-box-input" type="text" name="" placeholder="Buscar..." />
                                        <button className="header-search-box-btn">
                                            <Icon type="search" className="icon-search" />
                                        </button>
                                    </form>
                                </div>
                            </div>
                            <div className="col12 only-desktop">
                                <div href="category.php" className="main-menu"><span className="icon-main-menu restaurantes"></span>restaurantes</div>
                                <div href="category.php" className="main-menu"><span className="icon-main-menu belleza"></span>Belleza</div>
                                <div href="category.php" className="main-menu"><span className="icon-main-menu salud"></span>Salud</div>
                                <div href="category.php" className="main-menu"><span className="icon-main-menu automotriz"></span>Automotriz</div>
                            </div>
                        </div>
                        <div className="col2 col3-mobile">
                            <a href="index.php" className="logo"><img src="images/paga_poco_logo.svg" className="logo" /></a>
                        </div>
                        <div className="col5 col7-mobile">
                            <div className="col12 nowrap right-align">
                                <div onClick={this.openLogin} className="top-links" id="session"><span className="icon-top-right icon-session"></span><span className="only-desktop">Iniciar </span>sesión</div>
                                <span className="division">|</span>
                                <div href="cart.php" className="top-links"><span className="icon-top-right icon-cart"></span>Carrito</div>
                            </div>
                            <div className="col12 nowrap right-align only-desktop">
                                <div href="category.php" className="main-menu"><span className="icon-main-menu turismo"></span>Diversión</div>
                                <div href="category.php" className="main-menu"><span className="icon-main-menu fitness"></span>Fitness</div>
                                <div href="category.php" className="main-menu"><span className="icon-main-menu educacion"></span>Educación</div>
                                <div href="category.php" className="main-menu"><span className="icon-main-menu productos"></span>Productos</div>
                            </div>
                        </div>
                    </div>
                </div>

                <Drawer menuVisible={menuVisible} closeMenu={this.closeMenu} />
                <Login loginVisible={loginVisible} closeLogin={this.closeLogin} />
            </Nav >
        );
    }
}

const CloseButton = styled.div`
.close-menu {
    position:absolute;top:15px;right:15px;display:block;background:url(icons/icons.png);background-repeat:no-repeat;background-position:-398px -112px;width:24px;height:24px;padding:0px 0px;
    border: none; }
`

const Nav = styled.nav`

margin-top: 10px;
margin-right: 15px;
display:block;
clear:both;
height:auto;
border-bottom:1px dashed #cccccc; 
.division{
    font-size: 15px;
}
.icon-search{
    font-size: 15px;
    margin-right: 10px;
    color: white;
}
div, span {
    font-family: 'Montserrat', sans-serif;
    margin:0;
    padding:0;
    border:0;
    outline:0;
    font-size:90%;
    line-height:1.5;
    vertical-align:middle;
    background:transparent;
    color:#666666; 
}
div.main-menu { 
    display:inline-block;
    font-size:11px;
    text-transform:uppercase;
    margin:0px 8px;
    font-weight:700;
    color:#1d3a7a;
    opacity:0.85;
    -webkit-transition: all 0.25s;
    transition: all 0.25s;
    width:20%;
    text-align:center;
    cursor: pointer;
}  
div.main-menu:hover {
    opacity:1.0;
}
div.top-links {
    position:relative;
    display:inline-block;
    font-size:10px;
    text-transform:uppercase;
    margin:0px 8px;
    font-weight:700;
    color:#1d3a7a;
    opacity:0.85;
    -webkit-transition: all 0.25s;
    transition: all 0.25s;
    cursor: pointer;
}  
div.top-links:hover { 
    opacity:1.0;
}
div.top-links span {
    color:#1d3a7a;
}
div.menu {
    display:block;
    clear:both;
    background:url(icons/icons.png);
    background-repeat:no-repeat;
    background-position:-266px -112px;
    width:30px;
    height:24px;
    margin-top:35px;
    border: none;
    cursor: pointer;
}
/*NAV*/
#main-menu {
    position:fixed;
    top:0px;
    left:-150%;
    width:100%;
    height:100vh;
    overflow:hidden;
    z-index:2; 
}
.logo {
    display:block;
    clear:both;
    width:100%;
    max-width:130px;
    margin:0px auto;
    float:none;
}
/*    M A I N    C O N T E N T    B L O C K S    */
.wrapper { 
    width: 100%; 
    height: auto; 
    margin: 0 auto; 
    max-width: 1280px;
    margin:30px auto 0px auto; 
}
.wrapper-full-width {
    width: 100%; 
    height: auto; 
    margin: 0 auto;
    margin:30px auto 0px auto; 
}
.row { 
    width: 100%; 
    height: auto; 
    margin: auto; 
    display: flex; 
    flex-wrap: wrap; 
}
.col2,.col3,.col4,.col5,.col6,.col7,.col8,.col9,.col10,.col11,.col12 { 
    padding:10px; 
    display: flex; 
    flex-wrap: wrap;
    height: auto; 
}
.col2 { 
    width: 16.66%;
}
.col5 { 
    width: 41.667%;
}
.col12 { 
    width: 100%;
}
/*   I C O N S    */ 
.icon-main-menu {
    display:block;
    clear:both;
    margin:0px auto;
    background:url(icons/icons.png);
    background-repeat:no-repeat;
    height:50px; 
}
.icon-top-right,.icon-top-left { 
    display:inline-block;
    margin:0px 3px;
    background:url(icons/icons.png);
    background-repeat:no-repeat;
    height:28px;
}
.icon-session { 
    background-position:-1705px -167px;
    width:28px;
}
.icon-cart { 
    background-position:-1795px -167px;
    width:30px; 
}
.icon-alerts { 
    background-position:-1608px -167px;
    width:24px; 
}

/* Icons menu */
.restaurantes { 
    background-position:-26px -1336px;
    width:26px;
    height:46px;
}
.belleza { 
    background-position:-914px -1336px;
    width:36px;
    height:46px;
}
.salud { 
    background-position:-126px -1336px;
    width:50px;
    height:46px; 
}
.automotriz { 
    background-position:-260px -1336px;
    width:50px;
    height:46px;
}
.turismo { 
    background-position:-765px -1336px;
    width:47px;
    height:46px;
}
.fitness { 
    background-position:-628px -1336px;
    width:46px;
    height:46px; 
}
.educacion { 
    background-position:-388px -1336px;
    width:58px;
    height:46px;
}
.productos {
    background-position:-510px -1336px;
    width:32px;
    height:46px;
}
/*   O T H E R S   */
.no-vertical-margin { 
    margin:0px auto !important;
}
.right-align {
    text-align:right;
}
.nowrap {
    display:block;
    flex-wrap:nowrap;
}

/*   S E A R C H   */
form.form-header {
    position:relative;
    display:inline-block;
    margin:0px 0px;
    padding:0px 0px;
    height:32px;
    clear:none;
    min-width:36px; 
}
.header-search-box-btn {
    position:absolute;
    display:inline-block;
    right:-4px;
    top:0px;
    background:#1d3a7a;
    border-radius:50%;
    width:24px;
    height:24px;
    margin:3px 7px 0px -4px;
    padding-left:2px;
} 
/*------------------------------------MEDIA QUERY-------------------------------------*/
@media only screen and (min-width:1024px) {
	.mini-avatar { 
        display:inline-block;
        width:28px;
        height:28px;
        margin:0px 4px 0px 0px;
        border-radius:50%;
        border:1px solid #1d3a7a;
    }
	.only-mobile { 
            display:none !important;
        }
    input, button { 
        border: none;
        background: none;
        outline: none;
        }
    button {
        cursor: pointer;
    }
    .search-box { 
        display:flex;
        background:#1d3a7a;
        border-radius:2em;
        margin-left: 8px;
        margin-top:-5px;
        min-width:28px; 
    }
    .search-box:hover .search-box-input { 
        padding-left: 1em;
        padding-right: 1em;
        width: 200px; 
    }
    .search-box-input {
        font-family:Montserrat,Verdana;
        font-weight:500;
        width: 0px;
        font-size: 13px;
        color: #fff;
        transition: 0.4s;
        min-width:0px;
        padding-right:8px;
        line-height:2.4;
    }
    .search-box-input::placeholder {
        color: white;
    }
    .search-box-btn { 
        display: flex; background:#1d3a7a;
        border-radius:50%;
        width: 24px;
        height: 24px;
        margin:3px 7px 0px -4px;
        padding-left:2px;
    }
    .search-box .fa { 
        margin: auto;
        color: white;
    } 
}
@media only screen and (max-width:1023px) {
	.col2,.col5,.col12 {
        width:100%;
        padding:15px 15px;
        display: block;
        clear:both;
    }
	.logo {
        width:100px;
    }
	.only-desktop {
        display:none !important;
    }
	.col2-mobile {
        width:16.666%; 
    }
	.col3-mobile { 
        width:25%;
    }
	.col7-mobile { 
        width:58.333%; 
    }
	.icon-session { 
        background-position:-1676px -218px;
        width:36px;
        height:36px;
        display:block;
        margin-top:12px; 
        }
	.icon-top-right.icon-cart { 
        background-position:-1788px -218px;
        width:36px;
        height:36px;
        display:block;
        margin-top:12px;
    }
    
}
`
export default Header;
