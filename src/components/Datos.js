import React, { Component } from 'react';
import styled from 'styled-components';

class Datos extends Component {

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
              },
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

    render() {
        const { imagenes } = this.state;
        return (
          <Wrapper>
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
          </Wrapper>
        );
    }
}

const Wrapper = styled.div`
    background-color: silver;
    min-height: calc(100vh - (100px + 300px));
`

export default Datos;