import { useAuth } from '../../Hooks/auth';
import { api } from '../../Services/Axios';
import { useEffect, useState } from 'react';

import { Container, Content, Main  } from './styles';
import { Header } from '../../Components/Header';
import { HeaderMobile } from '../../Components/Header Mobile';
import { TextButton } from '../../Components/TextButton';
import { ProductsList } from '../../Components/Products List';
import { Footer } from '../../Components/Footer';


import { MdOutlineKeyboardArrowLeft } from 'react-icons/md'

import { useNavigate } from 'react-router-dom'
    


 export function FavoritesUser(){
    const [ favorites, setFavorites ] = useState([]);
    
    const { user } = useAuth();
    const navigate = useNavigate()

    async function getFavorites(){
        const userFavorites = await api.get('/favorites', user)
        setFavorites(userFavorites.data)
    };
    
    useEffect(() => {
        getFavorites()
    }, [])

    return(
        <Container>
            <div className='headerDesktop'>
                <Header/>
            </div> 
            
            <div className='headerMobile'>
               <HeaderMobile />
            </div>

            <Content> 
                <h1>Meus Favoritos</h1>

                <TextButton
                    title='Voltar'
                    icon={MdOutlineKeyboardArrowLeft}
                    onClick={() => navigate(-1)}
                />

                <Main>

                    {
                        favorites && favorites.map((favorite, index) => (
                            <ProductsList
                            key={index}
                            title={favorite.name}
                            buttonName='Remover dos Favoritos'
                            image={favorite.photo}
                       />
                        ))
                    }
                 
                </Main>
            </Content>

            <Footer/>
        </Container>
    );
};