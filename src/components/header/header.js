import React from 'react';
import styled, { css } from 'styled-components'

const header = () => {

    return (
        <Nav>
            <div className="col-lg-1 photo">
                    <img src="/images/paga_poco_logo.png" id="logo" />
            </div>
            <div className="col-lg-5 horizontal-scroll-wrapper squares" id="navbarItemsMenu">
                <div >
                    <div id="item2">
                        <img src="/icons/search.svg" height="50"></img>
                    </div>
                    <div id="item2">
                        <img src="/icons/car.svg" height="50"></img>
                    </div>
                    <div id="item3">
                        <img src="/icons/woman.svg" height="50"></img>
                    </div>
                    <div id="item4">
                        <img src="/icons/heart.svg" height="50"></img>
                    </div>
                    <div id="item5">
                        <img src="/icons/backpack.svg" height="50"></img>
                    </div>
                    <div id="item6">
                        <img src="/icons/food.svg" height="50"></img>
                    </div>
                </div>
            </div>
            
            <div className="col-lg-5">
            
                <div className='right'>
                    <a href>
                        <img
                            className="photo Img"
                            src="https://thinkinaction.com.mx/wp-content/uploads/2018/11/foto-persona-300x258.jpg"
                            alt="photo"
                        />
                    </a>
                </div>
                <div>
                    <img src='/icons/cart.svg' height='50'></img>
                </div>
            </div>
        </Nav >);

}


const Nav = styled.nav`
  box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.21);
  overflow: hidden;
  
  .photo {
    border-radius: 50%;
    margin-top: 15px !important;
    width: 50px;
    height: 50px;
    margin: 0 20px;
    max-width: 100%;
    -ms-flex-negative: 0;
    flex-shrink: 0;
    margin-right: 3px;
  }
  .img {
    max-width: 100%;
  }
`

const Line = styled.div`
    border-width: thin;
    border-left-style: solid;
    border-color: #DBDBDB;
    margin-right: 6px;
`
export default header;
