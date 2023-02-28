import { Container, BannerHero, Content } from './styles';

import { api } from '../../Services/Axios';
import { useState, useEffect } from 'react';

import { HeaderAdmin } from '../../Components/Header Admin';
import { MealCarouselAdmin } from '../../Components/Meal Carousel Admin';
import { Footer } from '../../Components/Footer';

import HeroImg from '../../Assets/hero-img.png'
import Salada from '../../Assets/salada-ravanello.png'

export function HomeAdmin(){
    const [ products, setProducts] = useState([]);
    const [ refeições, setRefeições] = useState([]);
    const [ sobremesas, setSobremesas] = useState([]);
    const [ bebidas, setBebidas] = useState([]);


    useEffect(() => {
        async function fetchProducts(){
            const response = await api.get('/products')
            setProducts(response.data)           
        };

        function handleCategory() {
            products.map(product => {
              if (product.category === 'Refeições') {
                setRefeições(prevState => {
                  // Verifica se o produto já existe no estado
                  if (prevState.some(p => p.id === product.id)) {
                    return prevState;
                  } else {
                    return [...prevState, product];
                  }
                })
              } else if (product.category === 'Bebidas'){
                setBebidas(prevState => {
                    // Verifica se o produto já existe no estado
                    if (prevState.some(p => p.id === product.id)) {
                      return prevState;
                    } else {
                      return [...prevState, product];
                    }
                  })
              } else if (product.category === 'Sobremesas') {
                setSobremesas(prevState => {
                    // Verifica se o produto já existe no estado
                    if (prevState.some(p => p.id === product.id)) {
                      return prevState;
                    } else {
                      return [...prevState, product];
                    }
                  })
              }
            })
          };


        fetchProducts()
        handleCategory()

        
    }, [products])
    return(
        <Container>
            <HeaderAdmin/>
            <Content>
                <BannerHero>
                    <div className='imgWrapper'>
                        <img src={HeroImg} alt="" />
                    </div>
                    <div className='txtWrapper'>
                        <h1>Sabores Inigualáveis</h1>
                        <p>Sinta o cuidado do preparo com ingredientes selecionados</p>
                    </div>
                </BannerHero>

                        <MealCarouselAdmin
                            title='Refeições'
                            data = {refeições}
                        />

                         <MealCarouselAdmin
                            title='Sobremesas'
                            data = {sobremesas}
                        />

                         <MealCarouselAdmin
                            title='Bebidas'
                            data = {bebidas}
                        />
            
            </Content>
            <Footer/>
        </Container>
    )
};