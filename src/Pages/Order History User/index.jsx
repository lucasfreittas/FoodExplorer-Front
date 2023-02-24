import { Container, Content, Main  } from './styles';

import { Header } from '../../Components/Header';
import { TextButton } from '../../Components/TextButton';
import { Footer } from '../../Components/Footer';
import { OrdersTable } from '../../Components/Orders Table';


import { MdOutlineKeyboardArrowLeft } from 'react-icons/md'


export function OrderHistoryUser(){
    return(
        <Container>
            <Header/>

            <Content> 
                <h1>Histórico de Pedidos</h1>

                <TextButton
                    title='Voltar'
                    icon={MdOutlineKeyboardArrowLeft}
                />

                <OrdersTable/>

                <Main>
                   
                </Main>
            </Content>

            <Footer/>
        </Container>
    );
};