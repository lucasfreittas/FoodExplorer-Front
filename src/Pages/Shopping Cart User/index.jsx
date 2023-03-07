import { Container, Content, Order, Payment, Main  } from './styles';

import { Header } from '../../Components/Header';
import { TextButton } from '../../Components/TextButton';
import { Footer } from '../../Components/Footer';
import { ProductsList } from '../../Components/Products List';
import { PaymentCard } from '../../Components/Payment';


import { MdOutlineKeyboardArrowLeft } from 'react-icons/md'
import SaladaRavanello from '../../Assets/salada-ravanello.png'

import { useLocation, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

import { useAuth } from '../../Hooks/auth';


export function ShoppingCartUser({data}){
    const location = useLocation();
    const {cart} = useAuth()

    useEffect(() => {
        console.log(cart)
    }, [cart])
    return(
        <Container>
            <Header/>
            <Content> 
                <TextButton
                        title='Voltar'
                        icon={MdOutlineKeyboardArrowLeft}
                />

            <Main> 
                <Order>
                    <h1>Meu Pedido</h1>
                    <ProductsList
                        title='1 x Salada Radish'
                        price='R$ 25.97'
                        buttonName='Excluir'
                        image={SaladaRavanello}
                    />
                    <ProductsList
                        title='1 x Salada Radish'
                        price='R$ 25.97'
                        buttonName='Excluir'
                        image={SaladaRavanello}
                    />
                    <ProductsList
                        title='1 x Salada Radish'
                        price='R$ 25.97'
                        buttonName='Excluir'
                        image={SaladaRavanello}
                    />
                    <ProductsList
                        title='1 x Salada Radish'
                        price='R$ 25.97'
                        buttonName='Excluir'
                        image={SaladaRavanello}
                    />

                    <h2>Total: R$ 103,88</h2>
                </Order>

                <Payment>
                    <h1>Pagamento</h1>
                    <PaymentCard/>
                </Payment>
            </Main>
            </Content> 

            <Footer/>
        </Container>
    );
};