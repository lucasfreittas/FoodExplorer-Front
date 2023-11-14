import { Container, BannerHero, Content } from './styles';
import { api } from '../../Services/Axios';
import { useState, useEffect } from 'react';

import { Header } from '../../Components/Header';
import { MealCarouselUser } from '../../Components/Meal Carousel User';
import { Footer } from '../../Components/Footer';

import HeroImg from '../../Assets/hero-img.png'
import Salada from '../../Assets/salada-ravanello.png'

export function HomeUser(){
    const [products, setProducts] = useState([]);
    const [refeições, setRefeições] = useState([]);
    const [sobremesas, setSobremesas] = useState([]);
    const [bebidas, setBebidas] = useState([]);
    const [search, setSearch] = useState([]);
 
    async function fetchProducts(value) {
       let response;
 
       if (value) {
          const product = {
             search: value
          };
          response = await api.get('/products', { params: product });
       } else {
          response = await api.get('/products');
       }
 
       setProducts(response.data);
    }
 
    function handleCategory(updatedProducts) {
       const refeicoes = [];
       const bebidas = [];
       const sobremesas = [];
 
       updatedProducts.forEach(product => {
          if (product.category === 'Refeições') {
             refeicoes.push(product);
          } else if (product.category === 'Bebidas') {
             bebidas.push(product);
          } else if (product.category === 'Sobremesas') {
             sobremesas.push(product);
          }
       });
 
       setRefeições(refeicoes);
       setBebidas(bebidas);
       setSobremesas(sobremesas);
    }
 
    useEffect(() => {
       fetchProducts();
    }, []);
 
    useEffect(() => {
       handleCategory(products);
    }, [products]);

    return( 
        <Container>
            <Header onSearchChange={fetchProducts}/>
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
