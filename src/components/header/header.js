import React, { Component } from 'react';
import Scrollbars from 'react-scrollbars-custom';
import styled, { css } from 'styled-components';

class header extends Component{
    constructor (props){
        super(props)
        this.state = {
            imagenes: []
        };
    }

    fetchData = () => {
        this.setState({
        imagenes: [
            {
                id: 1,
                url: "/icons/search.svg",
                text: "Texto1"
              },
              {
                id: 2,
                url: "/icons/car.svg",
                text: "Texto2"
              },
              {
                id: 3,
                url: "/icons/woman.svg",
                text: "Texto3"
              },
              {
                id: 4,
                url: "/icons/heart.svg",
                text: "Texto4"
              },
              {
                id: 5,
                url: "/icons/backpack.svg",
                text: "Texto5"
              },
              {
                id: 6,
                url: "/icons/food.svg",
                text: "Texto6"
              } 
        ]
    })
    }

    componentDidMount() {
        this.fetchData()
    }

    render(){
        const { imagenes } = this.state;
        return (
            <Nav>
                <div className="col-lg-2">
                    <img className="logo" src="/images/paga_poco_logo.png" />
                </div>
                <div className="col-lg-8 item">
                <Scrollbars
                    style={{ height: 90, borderRadius: 5 }}
                    minimalThumbSize={50}
                    
                    renderThumbVertical={({ style }) => (
                        <div
                            style={{
                                position: 'absolute',
                                width: '10px',
                                display: 'block!important',
                                right: '2px',
                                bottom: '2px',
                                top: '2px',
                                borderRadius: '25px',
                                backgroundColor: 'rgba(0, 0, 0, 0.7)',
                                cursor: 'grabbing',
                            }}
                        />
                    )}
                >
                    <ul className="ul item">
                        {
                            imagenes.slice(0).reverse().map((imagen) => (
                                <ol className="ol">
                                    <div key={imagen.id} className="icon">
                                        <img src={imagen.url} className="color-icon" height='30' alt={imagen.text}/>
                                        <p className="item-name">{imagen.text}</p>
                                    </div>
                                </ol>
                            ))
                        }
                    </ul>
                    </Scrollbars>
                </div>
                <Line />
                <div className="col-lg-2 item right">
                    <ul className="ul">
                        <ol className="ol">
                            <div className='profile'>
                                <img
                                    className="photo"
                                    src="https://thinkinaction.com.mx/wp-content/uploads/2018/11/foto-persona-300x258.jpg"
                                    alt="photo"
                                />
                                <p className="item-name" className="color-item" height="30">Kelvin Palacios</p>
                            </div>
                        </ol>
                        <ol className="ol">
                            <div className="cart">
                                <img src='/icons/cart.svg' height='30'></img>
                            </div>
                        </ol>
                    </ul>
                </div>
            </Nav >
        );
    }
}

const Nav = styled.nav`
    box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.21);
    display: flex;

    .item {
        margin-top: 10px;
        display:flex;
        justify-content: center;
        justify-content: flex-end;
    }
    .item-name {
        font-size: 15px;
        word-wrap: break-word;
    }  
    .photo {
        border-radius: 50%;
        border: 2px solid #696969;
        width: 35px;
        height: 35px;
        margin-top: 5px !important;
    }
    .logo{
        height: 100px;
        margin-right: 0px;
    }
    .ul {
        margin-top: 10px;
        height: 70px;
        width:100%;
        display:flex;
        background-color: gray;
        color: #696969;
        margin-bottom: 0px !important;
        padding-inline-start: 0px;
    }
    .ol {
        display:flex;
        justify-content: flex-end;
        padding-inline-start: 15px !important;
    }
    .profile {
        height: 70px;
        margin-top: 0px;
    }
    .right{
        display: flex;
        justify-content: flex-end;
        padding-right: 45px;
        padding-left: 0px;
    }
    .icon{
        margin-top: 10px !important;
    }
    .cart{
        margin-top: 20px !important;
    }
    .color-icon {
        filter: invert(40%) sepia(0%) saturate(2809%) hue-rotate(171deg) brightness(102%) contrast(94%);
    }
`

const Line = styled.div`
    margin: 20px 6px 15px 10px;
    border-left-style: solid;
    border-color: #696969;
`
export default header;
