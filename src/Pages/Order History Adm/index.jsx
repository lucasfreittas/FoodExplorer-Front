import { Container, Content, Main  } from './styles';

import { HeaderAdmin } from '../../Components/Header Admin';
import { TextButton } from '../../Components/TextButton';
import { Footer } from '../../Components/Footer';
import { OrdersTable } from '../../Components/Orders Table';


import { MdOutlineKeyboardArrowLeft } from 'react-icons/md'


export function OrderHistoryAdmin(){
    return(
        <Container>
            <HeaderAdmin/>

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