import { Container, Content, Main  } from './styles';
import { Header } from '../../Components/Header';
import { TextButton } from '../../Components/TextButton';
import { ProductsList } from '../../Components/Products List';
import { Footer } from '../../Components/Footer';

import { MdOutlineKeyboardArrowLeft } from 'react-icons/md'


export function FavoritesUser(){
    return(
        <Container>
            <Header/>

            <Content> 
                <h1>Meus Favoritos</h1>

                <TextButton
                    title='Voltar'
                    icon={MdOutlineKeyboardArrowLeft}
                />

                <Main>
                   <ProductsList
                        title='Salada Radish'
                        buttonName='Remover dos Favoritos'
                   />

                    <ProductsList
                        title='Salada Radish'
                        buttonName='Remover dos Favoritos'
                   />

                    <ProductsList
                        title='Salada Radish'
                        buttonName='Remover dos Favoritos'
                   />

<ProductsList
                        title='Salada Radish'
                        buttonName='Remover dos Favoritos'
                   />

                    <ProductsList
                        title='Salada Radish'
                        buttonName='Remover dos Favoritos'
                   />

                    <ProductsList
                        title='Salada Radish'
                        buttonName='Remover dos Favoritos'
                   />
                </Main>
            </Content>

            <Footer/>
        </Container>
    );
};