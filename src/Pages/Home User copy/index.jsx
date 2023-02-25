import { Container, BannerHero, Content } from './styles';

import { Header } from '../../Components/Header';
import { MealCarousel } from '../../Components/Meal Carousel User';
import { Footer } from '../../Components/Footer';

import HeroImg from '../../Assets/hero-img.png'
import Salada from '../../Assets/salada-ravanello.png'

export function HomeUser(){
    const refeições = [
        {
            image: Salada,
            name: 'Salada Ravanello',
            description: 'Rabanetes, folhas verdes e molho agridoce salpicados com gergilim',
            price: 'R$ 49,97'
        },

        {
            image: Salada,
            name: 'Salada Ravanello',
            description: 'Rabanetes, folhas verdes e molho agridoce salpicados com gergilim',
            price: 'R$ 49,97'
        },

        {
            image: Salada,
            name: 'Salada Ravanello',
            description: 'Rabanetes, folhas verdes e molho agridoce salpicados com gergilim',
            price: 'R$ 49,97'
        },

        {
            image: Salada,
            name: 'Salada Ravanello',
            description: 'Rabanetes, folhas verdes e molho agridoce salpicados com gergilim',
            price: 'R$ 49,97'
        },
    ]
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

                <MealCarousel
                    title='Refeições'
                    data = {refeições}
                />

                <MealCarousel
                    title='Sobremesas'
                    data = {refeições}
                />

                <MealCarousel
                    title='Bebidas'
                    data = {refeições}
                />
            </Content>
            <Footer/>
        </Container>
    )
};