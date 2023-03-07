import { Container, BannerHero, Content } from './styles';
import { api } from '../../Services/Axios'; 
import { useState, useEffect } from 'react';

import { Header } from '../../Components/Header';
import { MealCarouselUser } from '../../Components/Meal Carousel User';
import { Footer } from '../../Components/Footer';

import HeroImg from '../../Assets/hero-img.png'
import Salada from '../../Assets/salada-ravanello.png'

export function HomeUser(){
   const [ products, setProducts ] = useState([]);
   const [ refeições, setRefeições ] = useState([]);
   const [ sobremesas, setSobremesas ] = useState([]);
   const [ bebidas, setBebidas ] = useState([]);


   function handleCategory(){
    products.map(product => {
        if(product.category === 'Refeições'){
            setRefeições(prevState => {
                if(prevState.some(p => p.id === product.id)){
                    return prevState;
                } else {
                    return [...prevState, product];
                }
            })
        } else if (product.category === 'Bebidas'){
            setBebidas(prevState => {
                if(prevState.some(p => p.id === product.id)){
                    return prevState;
                } else {
                    return [...prevState, product];
                }
            })
        } else if (product.category === 'Sobremesas'){
            setSobremesas(prevState => {
                if(prevState.some(p => p.id === product.id)){
                    return prevState;
                } else {
                    return [...prevState, product];
                }
            })
        }
    })
   }

    useEffect(() => {
        async function fetchProducts(){
            const response = await api.get('/products');
            setProducts(response.data);

            handleCategory();
        };

        fetchProducts();

    }, [products])
    return(
        <Container>
            <Header/>
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

                <MealCarouselUser
                    title='Refeições'
                    data = {refeições}
                />

                <MealCarouselUser
                    title='Sobremesas'
                    data = {sobremesas}
                />

                <MealCarouselUser
                    title='Bebidas'
                    data = {bebidas}
                />
            </Content>
            <Footer/>
        </Container>
    )
};