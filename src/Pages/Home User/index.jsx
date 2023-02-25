import { Container, BannerHero, Content } from './styles';

import { Header } from '../../Components/Header';
import { MealCarousel } from '../../Components/Meal Carousel';
import { Footer } from '../../Components/Footer';

import HeroImg from '../../Assets/hero-img.png'

export function HomeUser(){
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
                />
            </Content>
            <Footer/>
        </Container>
    )
};