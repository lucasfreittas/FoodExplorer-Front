import { Container, Content, Main  } from './styles';
import { api } from '../../Services/Axios';
import { useState, useEffect } from 'react';

import { Header } from '../../Components/Header';
import { HeaderMobile } from '../../Components/Header Mobile';
import { TextButton } from '../../Components/TextButton';
import { Footer } from '../../Components/Footer';
import { OrdersTableUser } from '../../Components/Orders Table User';


import { MdOutlineKeyboardArrowLeft } from 'react-icons/md'


export function OrderHistoryUser(){

    const [ allOrders, setAllOrders ] = useState([]); 

    async function fetchOrders(){
        const responseOrders = await api.get('/orders');
        setAllOrders(responseOrders.data);
    };

    useEffect(() => {
        fetchOrders()
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
                <h1>Histórico de Pedidos</h1>

                <TextButton
                    title='Voltar'
                    icon={MdOutlineKeyboardArrowLeft}
                />

                <OrdersTableUser
                    data={allOrders}
                />

                <Main>
                   
                </Main>
            </Content>

            <Footer/>
        </Container>
    );
};