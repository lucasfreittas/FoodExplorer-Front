import { Container, Content, Main  } from './styles';
import { api } from '../../Services/Axios';
import { useState, useEffect } from 'react';

import { Header } from '../../Components/Header';
import { TextButton } from '../../Components/TextButton';
import { Footer } from '../../Components/Footer';
import { OrdersTable } from '../../Components/Orders Table';


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
            <Header/>

            <Content> 
                <h1>Histórico de Pedidos</h1>

                <TextButton
                    title='Voltar'
                    icon={MdOutlineKeyboardArrowLeft}
                />

                <OrdersTable
                    data={allOrders}
                />

                <Main>
                   
                </Main>
            </Content>

            <Footer/>
        </Container>
    );
};