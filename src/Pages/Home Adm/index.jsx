import { Container, BannerHero, Content } from './styles';

import { HeaderAdmin } from '../../Components/Header Admin';
import { MealCarouselAdmin } from '../../Components/Meal Carousel Admin';
import { Footer } from '../../Components/Footer';

import HeroImg from '../../Assets/hero-img.png'
import Salada from '../../Assets/salada-ravanello.png'

export function HomeAdmin(){
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
                    data = {refeições}
                />

                <MealCarouselAdmin
                    title='Bebidas'
                    data = {refeições}
                />
            </Content>
            <Footer/>
        </Container>
    )
};