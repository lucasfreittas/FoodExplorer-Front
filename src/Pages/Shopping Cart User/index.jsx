import { Container, Content, Order, Payment, Main  } from './styles';

import { Header } from '../../Components/Header';
import { HeaderMobile } from '../../Components/Header Mobile';
import { TextButton } from '../../Components/TextButton';
import { Footer } from '../../Components/Footer';
import { ProductsList } from '../../Components/Products List';
import { PaymentCard } from '../../Components/Payment';

import { MdOutlineKeyboardArrowLeft } from 'react-icons/md'

import { useLocation, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useCart } from '../../Hooks/order';
import { api } from '../../Services/Axios';



export function ShoppingCartUser(){
    const location = useLocation();
    const { cart, deleteFromCart } = useCart();
    const [ total, setTotal ] = useState();
    const baseUrlImg = `${api.defaults.baseURL}/files/`
    
    function handleTotal(){
        let total = 0
        cart.map(product => {
            total = product.quantities * product.price + total
        });

        setTotal(total)
    };   

    useEffect(() => {
        handleTotal()
    }, [cart])
      

    return(
        <Container>
            <div className='headerDesktop'>
                <Header/>
            </div> 
            
            <div className='headerMobile'>
               <HeaderMobile />
            </div>
            <Content> 
                <TextButton
                        title='Voltar'
                        icon={MdOutlineKeyboardArrowLeft}
                />

            <Main> 
                <Order>
                    <h1>Meu Pedido</h1>

                    {
                        cart && cart.map((product, index) => (
                            <ProductsList
                                key={index}
                                title={`${product.quantities}x ${product.name}`}
                                price={`R$ ${product.price * product.quantities}`}
                                buttonName='Excluir'
                                onClick={() => deleteFromCart(product.id)}
                                image={product.photo}
                            />
                        ))
                    }

                    <h2>R$ {total}</h2>
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