import { Container, Content, Main  } from './styles';
import { Header } from '../../Components/Header';
import { TextButton } from '../../Components/TextButton';
import { ProductsList } from '../../Components/Products List';
import { Footer } from '../../Components/Footer';
import Salada from '../../Assets/salada-ravanello.png'

import { MdOutlineKeyboardArrowLeft } from 'react-icons/md'

import { useNavigate } from 'react-router-dom'


export function FavoritesUser(){
    const navigate = useNavigate()

    return(
        <Container>
            <Header/>

            <Content> 
                <h1>Meus Favoritos</h1>

                <TextButton
                    title='Voltar'
                    icon={MdOutlineKeyboardArrowLeft}
                    onClick={() => navigate(-1)}
                />

                <Main>
                   <ProductsList
                        title='Salada Radish'
                        buttonName='Remover dos Favoritos'
                        image={Salada}
                   />

                    <ProductsList
                        title='Salada Radish'
                        buttonName='Remover dos Favoritos'
                        image={Salada}
                   />

                    <ProductsList
                        title='Salada Radish'
                        buttonName='Remover dos Favoritos'
                        image={Salada}
                   />

                    <ProductsList
                        title='Salada Radish'
                        buttonName='Remover dos Favoritos'
                        image={Salada}
                   />

                    <ProductsList
                        title='Salada Radish'
                        buttonName='Remover dos Favoritos'
                        image={Salada}
                   />

                    <ProductsList
                        title='Salada Radish'
                        buttonName='Remover dos Favoritos'
                        image={Salada}
                   />
                </Main>
            </Content>

            <Footer/>
        </Container>
    );
};