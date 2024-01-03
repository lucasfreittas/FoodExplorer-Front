import { Container, Content, Main  } from './styles';
import { api } from '../../Services/Axios';
import { useState, useEffect } from 'react';

import { HeaderAdmin } from '../../Components/Header Admin';
import { HeaderAdminMobile } from '../../Components/Header Admin Mobile';
import { TextButton } from '../../Components/TextButton';
import { Footer } from '../../Components/Footer';
import { OrdersTable } from '../../Components/Orders Table';


import { MdOutlineKeyboardArrowLeft } from 'react-icons/md'
import { useNavigate } from 'react-router-dom';


export function OrderHistoryAdmin(){

    const [ allOrders, setAllOrders ] = useState([]);
    const navigate = useNavigate() 

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
                  <HeaderAdmin/>
            </div> 
            
            <div className='headerMobile'>
               <HeaderAdminMobile/>
            </div>

            <Content> 
                <h1>Histórico de Pedidos</h1>

                <TextButton
                    title='Voltar'
                    icon={MdOutlineKeyboardArrowLeft}
                    onClick={() => navigate(-1)}
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