import React, { Component } from 'react'
import { Drawer as DrawerAntd, Button } from 'antd';
import styled from 'styled-components'

class MenuMobile extends Component {


    render() {
        const { closeMenu, menuVisible} = this.props
        return (
                <DrawerAntd
                    placement='left'
                    closable={false}
                    onClose={() => closeMenu()}
                    visible={menuVisible}
                    width='100%'
                    bodyStyle={{
                        backgroundColor: '#2f4b7d',
                        height: '100%'
                    }}
                    destroyOnClose={true}
                    >
                    <CloseButton>
                        <Button className="closeMenu" onClick={() => closeMenu()}/>
                    </CloseButton>
                    <Menu>   
                        <ul className="menu">
                            <li className="menu__item"><a href="category.php" className="main-menu"><span className="icon-mobile-main-menu restaurantes-mobile"></span>restaurantes</a></li>
                            <li className="menu__item"><a href="category.php" className="main-menu"><span className="icon-mobile-main-menu belleza-mobile"></span>Belleza & Spa</a></li>
                            <li className="menu__item"><a href="category.php" className="main-menu"><span className="icon-mobile-main-menu salud-mobile"></span>Salud & Odontología</a></li>
                            <li className="menu__item"><a href="category.php" className="main-menu"><span className="icon-mobile-main-menu automotriz-mobile"></span>Automotriz - Talleres</a></li>
                            <li className="menu__item"><a href="category.php" className="main-menu"><span className="icon-mobile-main-menu turismo-mobile"></span>Tutismo & Diversión</a></li>
                            <li className="menu__item"><a href="category.php" className="main-menu"><span className="icon-mobile-main-menu fitness-mobile"></span>Fitness</a></li>
                            <li className="menu__item"><a href="category.php" className="main-menu"><span className="icon-mobile-main-menu educacion-mobile"></span>Educación</a></li>
                            <li className="menu__item"><a href="category.php" className="main-menu"><span className="icon-mobile-main-menu productos-mobile"></span>Productos & Servicios</a></li>				
                            <li className="menu__item">
                                <div className="search-box">
                                    <input className="search-box-input bgfirst" type="text" name="" placeholder="Buscar..."/>
                                    <button className="search-box-btn bgfirst">
                                        <i className="fa fa-search"></i>
                                    </button>
                                </div>
                            </li>
                            <div className="big-spacer"></div>
                        </ul>
                    </Menu>
                </DrawerAntd>
        )
    }
}

const CloseButton = styled.div`
.closeMenu {
    position:absolute;top:15px;right:15px;display:block;background:url(icons/icons.png);background-repeat:no-repeat;background-position:-398px -112px;width:24px;height:24px;padding:0px 0px;
    border: none; }
`
const Menu = styled.div`
padding-top: 40px;
margin-left: 0px;
a { color:white;text-decoration:none; } 
a.main-menu { font-size:var(--main-menu-text-size);text-transform:uppercase;margin:0px 8px;font-weight:700;color:white;opacity:0.85;-webkit-transition: all 0.25s; transition: all 0.25s;width:20%;text-align:center; }  
a.main-menu:hover { opacity:1.0; }
a.top-links { position:relative;display:inline-block;font-size:var(--top-bar-text-size);text-transform:uppercase;margin:0px 8px;font-weight:700;color:var(--first-color);opacity:0.85;-webkit-transition: all 0.25s; transition: all 0.25s; }  
a.top-links:hover { opacity:1.0; }
a.top-links span { color: white }
.section-bar a { color:white; }
.section-bar a:hover { color:white; }
a.menu { display:block;clear:both;background:url(icons/icons.png);background-repeat:no-repeat;background-position:-266px -112px;width:30px;height:24px;margin-top:35px; }


nav { display: flex; align-items: center; height: 100px; }

.menu { list-style: none; margin: 0; padding: 0; }
.menu__link { display: block; padding: 20px; text-decoration: none; color: white; text-transform: uppercase; font-size: 14px; }
.menu__link img { width: 15%; display: inline-block; margin-right: 20px; }
.menu__link:hover { color: white; }
.btn-menu { color: black; cursor: pointer; font-size: 30px; border-radius: 5px; width: 40px; height: 40px; text-align: center; margin-left: 10px; }

#main-menu { position:fixed;top:0px;left:-150%;width:100%;height:100vh;overflow:hidden;z-index:2; }

.logo { display:block;clear:both;width:100%;max-width:130px;margin:0px auto;float:none; }

.mobile-icons-sub-nav ul { display: flex; justify-content: flex-end; }
.mobile-icons-sub-nav ul li { list-style: none; width: 40%; }
.mobile-icons-sub-nav ul li img { width: 60%; margin: 0 auto; }

input, button { border: none;
    background: #213a67;
    outline: none;
    border-radius: 40px;
    padding-left: 20px; }
    button { cursor: pointer; }
    .search-box {
    display: flex;
    background: none;
    border-radius: 4em;
    margin-left: 20px;
    margin-top: 30px;
}
    .search-box-input {
    width: 210px;
    font-size: 14px;
    color: #fff;
    transition: 0.4s;
}
    .search-box-input::placeholder { color: white; }
    .search-box-btn {
    display: flex;
    border-radius: 50%;
    width: 4em;
    height: 4em;
    background: #213a67;
}
    .search-box .fa { margin: auto;
    color: white;
    padding-right: 20px; }

/*------------------------------------SEARCH-------------------------------------*/




/*    M A I N    C O N T E N T    B L O C K S    */
.wrapper { width: 100%; height: auto; margin: 0 auto; max-width: 1280px;margin:30px auto 0px auto; }
.wrapper-full-width { width: 100%; height: auto; margin: 0 auto;margin:30px auto 0px auto; }
.row { width: 100%; height: auto; margin: auto; display: flex; flex-wrap: wrap; }
header { display:block;clear:both;width:100%;height:auto;padding:10px 0px 0px 0px;border-bottom:1px dashed #dddddd; }
main { display:block;clear:both;width:100%;height:auto;padding:30px auto; }
footer { display:block;clear:both;width:100%;height:auto;margin:30px auto 0px auto;padding:0px 20px 20px 20px;border-top:1px dashed #cccccc;font-size:13px;border-bottom:1px dashed #cccccc; }
.bottom-bar { display:block;clear:both;width:100%;height:auto;padding:10px auto;margin:15px auto;text-align:center; }
.bottom-bar > a { font-weight:600;color:#000000;text-transform:uppercase;font-size:11.5px; }
.col2,.col3,.col4,.col5,.col6,.col7,.col8,.col9,.col10,.col11,.col12 { padding:10px; display: flex; flex-wrap: wrap; }
.col2 { width: 16.66%; height: auto; }
.col3 { width: 25%; height: auto; }
.col4 { width: 33.333%; height: auto; }
.col5 { width: 41.667%; height: auto; }
.col6 { width: 50%; height: auto; }
.col7 { width: 58.333%; height: auto; }
.col8 { width: 66.667%; height: auto; }
.col9 { width: 75%; height: auto; }
.col10 { width: 83.333%; height: auto; }
.col11 { width: 91.667%; height: auto; }
.col12 { width: 100%; height: auto; }
footer .col2, footer .col3, footer .col4, footer .col5, footer .col6 { display:inline-block; }

aside { width: 100%; height: auto; }
.items-start { display: flex; align-items: flex-start; }

/*   I C O N S    */ 
.icon-main-menu { display:block;clear:both;margin:0px auto;background:url(icons/icons.png);background-repeat:no-repeat;height:50px; }
.icon-mobile-main-menu { display:inline-block;margin:0px 4px 0px 0px;background:url(icons/icons.png);background-repeat:no-repeat;height:50px;width: 65px !important; }
.icon-mobile-main-menu { display:inline-block;margin:0px 4px 0px 0px;background:url(icons/icons.png);background-repeat:no-repeat;height:50px;width: 65px !important; }
.icon-login-menu { display:block;clear:both;margin:0px auto;background:url(icons/icons.png);background-repeat:no-repeat;height:40px; }
.icon-cart { display:block;clear:both;margin:0px auto 10px auto;background:url(icons/icons.png);background-repeat:no-repeat;width:30px;height:30px; }
.icon-login { display:inline-block;margin:0px 0px;background:url(icons/icons.png);background-repeat:no-repeat;height:40px; }
.restaurante { background-position:-294px -1032px;width:46px; }
.diversion { background-position:-460px -1033px;width:46px; }
.salud { background-position:-633px -1033px;width:46px; }
.belleza { background-position:-777px -1032px;width:46px; }
.automotriz { background-position:-18px -1032px;width:56px; }
.facebook-login { background-position: -695px -7px;width: 40px; }
.google-login { background-position: -800px -7px;width: 40px; }
.instagram-login { background-position: -909px -7px;width: 40px; }
.icon-top-right,.icon-top-left { display:inline-block;margin:0px 3px;background:url(icons/icons.png);background-repeat:no-repeat;height:28px; }
.icon-detail { display:inline-block;margin:0px 3px;background:url(icons/icons.png);background-repeat:no-repeat;height:28px; } 
.icon-session { background-position:-1705px -167px;width:28px; }
.icon-cart { background-position:-1795px -167px;width:30px; }
.icon-paynow { background-position:-1318px -310px;width:30px;height:30px; }
.icon-alerts { background-position:-1608px -167px;width:24px; }
.icon-bar-category { display:inline-block;margin:0px 3px;background:url(icons/icons.png);background-repeat:no-repeat;height:46px;margin:-2px -4px; }
.icon-cat-restaurante { background-position:-294px -1112px;width:46px; }
.icon-payment-kiosko,.icon-payment-card,.icon-payment-punto-express { display:inline-block;margin:0px 3px;background:url(icons/icons.png);background-repeat:no-repeat;width:60px }
.icon-payment-kiosko { background-position:-1300px -410px;height:48px; }
.icon-payment-card { background-position:-1450px -422px;height:38px; }
.icon-payment-punto-express { background-position:-1622px -424px;height:30px; }
.icon-account-user { display:block;clear:both;margin:0px 0px 0px auto;background:url(icons/icons.png);background-repeat:no-repeat;background-position:-1676px -110px;width:36px;height:36px; }
.icon-account-coupons { display:block;clear:both;margin:0px 0px 0px auto;background:url(icons/icons.png);background-repeat:no-repeat;background-position:-507px -110px;width:54px;height:30px; }
.icon-account-procedure { display:block;clear:both;margin:0px 0px 0px auto;background:url(icons/icons.png);background-repeat:no-repeat;background-position:-864px -106px;width:36px;height:39px; }
.icon-account-gift { display:inline-block;margin:0px 0px 0px 4px;background:url(icons/icons.png);background-repeat:no-repeat;background-position:-667px -102px;width:50px;height:44px; }
.icon-account-available { display:inline-block;margin:0px 0px 0px 4px;background:url(icons/icons.png);background-repeat:no-repeat;background-position:-90px -405px;width:54px;height:38px; }
.icon-account-changed { display:inline-block;margin:0px 0px 0px 4px;background:url(icons/icons.png);background-repeat:no-repeat;background-position:-236px -186px;width:34px;height:47px; }
/* Icons menu */
.restaurantes { background-position:-26px -1336px;width:26px;height:46px; }
.restaurantes-mobile { background-position:-26px -1424px;width:26px;height:46px; }
.belleza { background-position:-914px -1336px;width:36px;height:46px; }
.belleza-mobile { background-position:-914px -1424px;width:36px;height:46px; }
.salud { background-position:-126px -1336px;width:50px;height:46px; }
.salud-mobile { background-position:-126px -1424px;width:50px;height:46px; }
.automotriz { background-position:-260px -1336px;width:50px;height:46px; }
.automotriz-mobile { background-position:-260px -1424px;width:50px;height:46px; }
.turismo { background-position:-765px -1336px;width:47px;height:46px; }
.turismo-mobile { background-position:-765px -1424px;width:47px;height:46px; }
.fitness { background-position:-628px -1336px;width:46px;height:46px; }
.fitness-mobile { background-position:-628px -1424px;width:46px;height:46px; }
.educacion { background-position:-388px -1336px;width:58px;height:46px; }
.educacion-mobile { background-position:-388px -1424px;width:58px;height:46px; }
.productos { background-position:-510px -1336px;width:32px;height:46px; }
.productos-mobile { background-position:-510px -1424px;width:32px;height:46px; }
/* Cart */
.icon-cart-delete { background-position:-1434px -23px; }
.icon-cart-pay-off { background-position:-1205px -23px; }
.icon-cart-gift-off { background-position:-1795px -23px; }
.icon-cart-pay-on { background-position:-1321px -23px; }
.icon-cart-gift-on { background-position:-1678px -23px; }
.item-in-cart { position:absolute;left:10px;top:-10px;background:#6db72b;color:white !important;font-size:12px;line-height:0.9 !important;border:2px solid white;width:22px;height:22px;padding:4px;border-radius:50%;text-align:center; }

/*  T E X T   */
h1,h2,h3,h4,h5,h6 { display:block;clear:both;width:100%;font-weight:400;color:black; }
h1,h2 { margin:0px 0px 25px 0px;font-weight:700; }
h3,h4 { margin:0px 0px 10px 0px; }
h5,h6 { margin:0px 0px 5px 0px; }
h1 { font-size:32px; }
h2 { font-size:24px; }
h3 { font-size:20px; }
strong { vertical-align:top; }
p { display:block;clear:both;width:100%; }
.text-centered { text-align:center !important; }
.black-highlighted { color:black;font-weight:600;vertical-align:top; }
.price-highlighted { color:#6db72b;font-weight:700;vertical-align:top;font-size:44px;line-height:0.9;padding-right:10px; }
.white-highlighted { color:white;font-weight:600;vertical-align:top; }
footer p { display:block;clear:both;width:100%;margin:0px 0px 10px 0px;line-height:1.25; }
.title-panel { font-size:var(--discount-text-size);color:var(--first-color);text-transform:uppercase;font-weight:700;border-bottom:2px solid #6db72b; }
h1.title-detail { font-size:var(--main-coupon-text-size);margin-bottom:-10px;font-weight:400; }
.add-less { font-size:30px;width:40px;height:38px;border-radius:50%;padding:10px 10px 20px 10px;color:var(--first-color);border:2px solid var(--first-color);line-height:0.5;display:inline-block;text-align:center; }
#quantity { font-size:24px;padding:0px 5px; }
.mini-text { font-size:11px; }
.small-text { font-size:13px; }
.uppercase { text-transform:uppercase !important; }
.subtitle-page { text-transform:uppercase;font-weight:700;font-size:15px; }
.paragraph { display:block;clear:both;font-weight:500 !important;margin-bottom:25px; }
.medium-text { font-size:13px; }
#coupon-description p { font-size:14px;line-height:1.7; }
p.bar-code { display:block;clear:both;width:100%;letter-spacing:0.1em;font-size:16px;font-weight:500;text-align:center;margin:15px 0px; }

/*  L I N K S   */
.button-link { color:var(--first-color);text-align:center;padding:10px 30px;margin:5px auto;text-transform:uppercase;font-size:var(--buttons-text-size);font-weight:600;border:2px solid;border-color:var(--first-color);border-radius:20px;cursor:pointer;  }
.button-link.white-style { border-color:white;color:white;background:rgba(255,255,255,0) !important; }
.button-link:hover { background-color:var(--first-color);color:#FFFFFF; }
.button-link.white-style:hover { border-color:#6db72b;color:#6db72b; }

/*   M A I N   C O U P O N S   */
.main-coupons { display:block;clear:both;width:100%;padding:30px 0px 20px 0px;margin:-30px auto 30px auto; }
.swiper-button-next:after, .swiper-button-prev:after { font-size:24px; }
.main-coupons .swiper-button-next, .main-coupons .swiper-button-prev { top:35%;color:#FFFFFF;background:rgba(0,0,0,0.7);padding:20px 20px;border-radius:50%;width:24px;height:24px; }
.coupon-detail .swiper-button-next, .coupon-detail .swiper-button-prev { top:50%;color:#FFFFFF;background:rgba(0,0,0,0.7);padding:20px 20px;border-radius:50%;width:24px;height:24px; }

/*   C O U P O N   L I S T   */
.section-bar { display:block;clear:both;width:100%;min-height:54px; }
.bar-icon { display:inline-block;float:left;width:64px;height:54px;text-align:center;background-color:#6db72b;padding:5px 10px; }
.bar-title { display:inline-block;float:left;width:calc(100% - 64px);height:54px;background-color:var(--first-color);padding:19px 10px 10px 10px;color:#FFFFFF;text-transform:uppercase;font-weight:700; }
section.block-coupons { display:block;clear:both;width:100%; }
section.block-coupons article { display:inline-block;width:33.333%;float:left;margin:15px auto 0px auto;padding:15px 10px; }
section.my-coupons article { display:block;clear:both;margin:10px auto 0px auto;padding:15px 0px 35px 0px;border-bottom:1px dashed #cccccc; }
section.block-coupons-aside { display:block;clear:both;padding:0px 10px 5px 10px;border:1px dashed #cccccc; }
section.block-coupons-aside article {display: block;width: 100%;margin: 0;padding: 15px 0px;}
.coupon-text { font-size:var(--coupon-text-size);color:#FFFFFF;line-height:1.35; }
.coupon-text-aside { font-size:var(--coupon-aside-text-size);color:#FFFFFF; }
.main-coupon-text { font-size:var(--main-coupon-text-size);color:#FFFFFF;line-height:1.3; }
.price { font-size:var(--price-text-size);color:#6db72b;font-weight:700;display:block;width:100%;clear:both;margin:0px auto; }
.price-aside { font-size:var(--price-text-size);color:#6db72b;font-weight:700;display:inline-block;width:50%;line-height:1.1;text-align:right !important;padding-right:15px; }
.big-price { font-size:var(--price-big-text-size);color:#6db72b;font-weight:900;display:inline-block; }
.before-price { text-decoration:line-through; }
.discount { font-size:var(--discount-text-size);text-transform:uppercase;display:block;clear:both;width:100%;margin:0px auto; }
.discount-aside { font-size:var(--discount-medium-text-size);text-transform:uppercase;display:inline-block;width:50%;line-height:0.75;text-align: left !important; }
.big-discount { font-size:var(--discount-big-text-size);text-transform:uppercase;display:inline-block; }
.store-logo { display:block;clear:both;width:auto;height:auto;max-width:100%;max-height:60px;margin:0px auto;  }
.store-logo-aside { display:block;clear:both;width:auto;height:auto;max-width:100%;max-height:55px;margin:0px auto; }
.main-store-logo { display:block;clear:both;width:auto;max-width:100%;max-height:66px;margin:0px auto; }
.metadata { display:block;clear:both;width:100%;font-size:var(--small-text-size);margin:5px auto 0px auto; }

/*   C O U P O N   D E T A I L   */
#coupon-description { display: block;clear: both;font-weight: normal;text-transform: capitalize; }
#coupon-legal { display:none;clear:both; }
.coupon-store-logo-sidebar { width:35%;margin-top:-60px;height:60px;overflow:hidden; }
.main-coupon-conditions li { font-size:14px;line-height:1.3;margin:6px 0px 6px 20px; }
.paid-coupon { margin:30px auto;border:2px dashed #6db72b; }

/*   O R D E R S   L I S T   */
section.block-orders { display:block;clear:both;width:100%; }
section.block-orders article.order { display:block;clear:both;width:100%;margin:15px auto 15px auto;padding:15px 0px 15px 0px; }
section.block-orders article.order.last { border-bottom:1px dashed #cccccc;padding-bottom:40px; }
h1.title-page { font-size:175%;color:var(--first-color);font-weight:700; }
.cart-price { font-size:var(--price-text-size);color:#6db72b;line-height:0.8;font-weight:700; }

/*   C O L O U R S   */
.bgfirstcolor { background-color:var(--first-color);color:#FFFFFF;  }
.bgsecondcolor { background-color:#6db72b;color:#FFFFFF;  }
.bgthirdcolor { background-color:var(--third-color);  }
.first-color { color:var(--first-color); }
.second-color { color:#6db72b; }
.bgwhite { background-color:#FFFFFF; }
.bgdark { background-color:var(--dark-color); }
.white-text { color:white !important; }
.black-text { color:black !important; }

/*   O T H E R S   */
.spacer { display:block;clear:both;width:100%;height:32px; }
.micro-spacer { display:block;clear:both;width:100%;height:1px; }
.mini-spacer { display:block;clear:both;width:100%;height:5px; }
.small-spacer { display:block;clear:both;width:100%;height:10px; }
.medium-spacer { display:block;clear:both;width:100%;height:20px; }
.big-spacer { display:block;clear:both;width:100%;height:150px; }
.super-spacer { display:block;clear:both;width:100%;height:250px; }
.no-vertical-margin { margin:0px auto !important; }
.right-align { text-align:right; }
.nowrap { display:block;flex-wrap:nowrap; }
.noflex { display:inline-block;flex-wrap:nowrap; }
.right-border { border-right:2px solid #c9c9c9; }
.mt-0 { margin-top:-0px; }
.mt-2 { margin-top:-2px; }
.mt-3 { margin-top:-3px; }
.mt-5 { margin-top:-5px; }
.mt-10 { margin-top:-10px; }
.mt-20 { margin-top:-20px; }
.mt-65 { margin-top:-65px; }
.mt-80 { margin-top:-80px; }
.mt5 { margin-top:5px; }
.mr7 { margin-right:7px; }
.mt20 { margin-top:20px; }
.mt40 { margin-top:40px; }
.margin10-0 { margin:10px 0px; }
.border-bottom-default { padding-bottom:4px;border-bottom:1px solid #c9c9c9; }
.totals { display:block;clear:both;margin:30px 0px;text-align:right;width:100%; }
.fright { display:inline !important;clear:none !important;float:right !important;margin:0px 0px !important; }
.fleft { display:inline !important;clear:none !important;float:left !important;margin:0px 5px 0px 0px !important; }
.padding-vertical-20px { padding:20px 0px; }
.padding-5px { padding:5px 5px; }
.padding-10px { padding:10px 10px; }
.padding-20px { padding:20px 20px; }
.padding-left-30px {  padding-left:30px; }
.padding-5px { padding:5px 5px !important; }
.line-separator { display:block;clear:both;margin:0px 0px 20px 0px;padding:20px 0px 0px 0px;height:1px;border-bottom:1px dashed #cccccc; }
.inline { display:inline !important;clear:none;width:auto !important; }
.normal-text { font-size:104%; }
.no-margin { margin:0px 0px; }
.no-padding { padding:0px 0px !important; }
.no-vertical-padding { padding-top:0px !important;padding-bottom:0px !important; }
.no-horizontal-padding { padding-left:0px !important;padding-right:0px !important; }
.no-margin-top { margin-top:0px; }
.rad15-border { border-radius:15px; }
.avatar-box { width: 100%; height: auto; display: flex; margin: 0 auto; flex-direction: column; }
.box-generic-form { width: 100%; height: auto; padding-top: 20px ; margin: auto; }
.box-generic-form p { display: block; }
.box-generic-form h2 { font-size: 30px; font-weight: bold; text-transform: uppercase; text-align: center; }
.box-generic-form .created-count-txt { font-size: 14px; font-weight: bold; text-transform: uppercase; text-align: center; display: block; line-height: 7px; }
.name-profile { font-size:18px; font-weight: bold; display: block; text-align: center; margin-top: 20px; }
.resume-profile { text-align: center; display: block; }
.inblock { display:block !important; }
.autowidth { width:auto !important; }
.to-detail { max-width:200px; }
.bgfirst { background:var(--first-color); }
.border-white { border:2px solid white; }
.bar-message { display:block;clear:both;padding:10px 0px;font-size:17px;margin:20px auto 10px auto;text-align:center;border-top:1px dashed #cccccc;border-bottom:1px dashed #cccccc; }
.no-padding-left { padding-left:0px !important; }
.box-centered { margin:20px auto !important; }
.icon-centered { margin:0px auto !important; }
.thin-border { border-width:1px; }


/*   P A N E L S   */
#box-session { display:block;clear:both;position:fixed;right:-150%;top:0px;width:100%;max-width:480px;height:100vh;padding:45px 30px 30px 30px;background-color:var(--third-color);-webkit-transition:all 0.5s; transition:all 0.5s;z-index:2;box-shadow:0px 0px 18px #444444; }
.box-session-socialMedia { display: block;width: 100%;height:auto; }
#box-gift { display:block;clear:both;position:fixed;right:-150%;top:0px;width:100%;max-width:480px;height:100vh;padding:45px 30px 30px 30px;background-color:var(--third-color);-webkit-transition:all 0.5s; transition:all 0.5s;z-index:2;box-shadow:0px 0px 18px #444444; }


/*   T A B S   */
.tabs { text-transform:uppercase;color:var(--first-color);font-weight:700;width:100%;height:auto;margin:0 auto;-webkit-transition:all 0.5s; transition:all 0.5s; }
.tabs .tabs-list{ list-style:none; margin:0px; padding:0px; }
.tabs .tabs-list li { width: 31%;max-width:220px;float: left;margin:0px;margin-right:2px;padding:10px 5px;text-align:center;border-radius:3px; }
.tabs .tabs-list li:hover{ cursor:pointer; }
.tabs .tabs-list li a { text-decoration:none;color:var(--first-color); }
.tabs .tab {display:none;width:100%;min-height:250px;height:auto;border-radius:3px;padding:20px 15px;clear:both;border-top: 2px solid #6db72b; }
.active { display:block !important; }
.tabs .tabs-list li.active { color:white !important; background:#6db72b; }
.active a { color:white !important; }

/*   F O R M S   */
input.form-info { display:block;clear:both;font-family:'Montserrat',Tahoma,Verdana;font-size:15px;width:100%;padding:10px 15px;border:1px solid #cccccc;background-color:white;border-radius:10px;margin:2px 0px;color:#666666;letter-spacing:0.003em; }
.select-list { display:block;clear:both;font-family:'Montserrat',Tahoma,Verdana;font-size:15px;width:100%;max-width:300px;padding:10px 15px;border:1px solid #cccccc;background-color:white;border-radius:10px;margin:2px 0px;color:#666666;letter-spacing:0.003em; }
.years-list { max-width:95px; }
.months-list { max-width:90px; }
.telephone-number { max-width:200px; }
form { display:block;clear:both;width:100%;margin:15px 0px 15px 0px; }
form label { display:block;clear:both;width:100%;text-transform:uppercase;color:#000000;font-size:12px;font-weight:700;padding:15px 0px 0px 0px; }
input.form-button { color:var(--first-color);text-align:center;padding:10px 30px;margin:15px 0px 5px 0px;text-transform:uppercase;font-size:var(--buttons-text-size);font-weight:600;border:2px solid;border-color:var(--first-color);border-radius:20px;cursor:pointer; }
input.form-button:hover {  }
.form-block { display:block;clear:both;width:100%; }
form .textarea { font-family:'Montserrat',arial,verdana,sans !important;font-size:15px !important;color:#666666 !important;max-width:100% !important;padding:10px 10px !important; }
input[type="radio" i] { width:24px;height:24px;background:#ececec;border:1px solid #9c9c9c; }
form.form-header { position:relative;display:inline-block;margin:0px 0px;padding:0px 0px;height:32px;clear:none;min-width:36px; }
.header-search-box-btn {  position:absolute;display:inline-block;right:-4px;top:0px;background:var(--first-color);border-radius:50%;width:24px;height:24px;margin:3px 7px 0px -4px;padding-left:2px; } 

#clock { font-size:28px; color:black; }

/*    A C C O U N T    */
.main-avatar { display:block;clear:both;width:80%;max-width:200px;margin:0px 0px 0px auto;border-radius:50%;border:3px solid white; }

/**  SWITCH BTN */

.switch {position: relative;display: inline-block;width: 60px;height: 34px;}
.switch input {opacity: 0;width: 0;height: 0;}
.slider {position: absolute;cursor: pointer;top: 0;left: 0;right: 0;bottom: 0;background-color: #ccc;-webkit-transition: .4s;transition: .4s;}
.slider:before {position: absolute;content: "";height: 26px;width: 26px;left: 4px;bottom: 4px;background-color: white;-webkit-transition: .4s;transition: .4s; }
input:checked + .slider {background-color: #1d3a7a;}
input:focus + .slider {box-shadow: 0 0 1px #1d3a7a;}
input:checked + .slider:before {-webkit-transform: translateX(26px);-ms-transform: translateX(26px);transform: translateX(26px);}

/* ROUNDED SLIDERS */
.slider.round {border-radius: 34px;}
.slider.round:before {border-radius: 50%;}
.styled-checkbox {opacity: 0;display: none;}
.styled-checkbox + label {position: relative;cursor: pointer;padding: 0;width: 20px;height: 20px;}
.styled-checkbox + label:before {content: "";margin-right: 10px;display: inline-block;vertical-align: text-top;width: 20px;height: 20px;background: #d0d0d0;}
.styled-checkbox:hover + label:before {background: var(--first-color); }
.styled-checkbox:focus + label:before {box-shadow: 0 0 0 3px rgba(0, 0, 0, 0.12);}
.styled-checkbox:checked + label:before {background:var(--first-color); }
.styled-checkbox:disabled + label {color: #b8b8b8;cursor: auto;}
.styled-checkbox:disabled + label:before {box-shadow: none;background: #ddd;}
.styled-checkbox:checked + label:after {content: "";position: absolute;left: 5px;top: 9px;background: white;width: 2px;height: 2px;box-shadow: 2px 0 0 white, 4px 0 0 white, 4px -2px 0 white, 4px -4px 0 white, 4px -6px 0 white, 4px -8px 0 white;-webkit-transform: rotate(45deg);transform: rotate(45deg);}

.profile-photo img { max-width:250px;height:auto;margin:30px auto 0px auto; }
.button-margin { text-align: center; margin-top: 20px; margin-bottom: 20px; }
.blue-Bg { background: #1d3a7a; }

.pagination { text-align:center;display:block;clear:both;margin:30px auto;text-transform:uppercase; }
a.pagination-page { display:inline-block;padding:7px 10px;background:#ededed;font-weight:700;font-size:19px;border:1px dashed #9c9c9c;margin:0px 5px;-webkit-transition: .25s;transition: .25s; }
a.pagination-page:hover { padding:7px 16px; }
.active-page { display:inline-block;padding:7px 10px;background:var(--first-color) !important;color:white;font-weight:700;font-size:19px;margin:-2px 5px;border:1px solid var(--first-color) !important; }
.active-page:hover { padding:7px 10px !important; }
	

/*------------------------------------MEDIA QUERY-------------------------------------*/

@media only screen and (min-width:1600px) {
	.main-coupons { max-width: 1600px;	}
}

@media only screen and (min-width:768px) {
    nav { display:flex;align-items:center;height:auto;flex-direction:column; }
    .menu { list-style: none; margin: 0; padding: 0; display: flex; }
    .sidenav { height: auto; width: 90%; position: relative; background-color: transparent; overflow-x: hidden; transition: 0.5s; padding-top: 0px; order: 2; border-bottom: 1px solid #ddd; padding-bottom: 16px; } 
    .sidenav a { padding: 0; text-decoration: none; font-size: 12px; color: #9e9e9e; display: block; transition: 0.3s; text-align: center; }
    .sidenav a:hover { color: #3ca9bb; }
    .sidenav .closebtn { position: absolute; top: 0; right: 25px; font-size: 36px; margin-left: 50px; display: none; }
    .logo { order: 1; }
    .mobile-icons-sub-nav { display: flex;
    width: 20%;
    order: 1;
    position: absolute;
    right: 70px;
    top: 30px; }
    .mobile-icons-sub-nav ul { display: flex; justify-content: flex-end; }
    .mobile-icons-sub-nav ul li { list-style: none; width: 40%; }
    .mobile-icons-sub-nav ul li img { width: 60%; margin: 0 auto; }
    input, button { border: none; background: none; outline: none; }
    button { cursor: pointer; }
}

`

export default MenuMobile;

