import { Container, Table } from './styles';
import { useEffect, useState } from 'react';
import { MdOutlineDelete } from 'react-icons/md'

import { api } from '../../Services/Axios';

import { ToggleStatus } from '../Toogle Status';

export function OrdersTable({data, ...rest}){

    async function handleDeleteOrder(orderId){
        try{
            await api.delete(`/orders/${orderId}`)
            alert ('Pedido cancelado com sucesso!')
        } catch (error){
            if(error.response){
                alert(error.response.data.message);
            } else{
                alert('Não foi possível deletar o pedido')
            }
        }

        window.location.reload()
    }

    return(
        <Container>
            <Table>
                <thead>
                    <tr className='headTable'>
                        <th>Status</th>
                        <th>Código</th>
                        <th>Detalhamento</th>
                        <th>Data e Hora</th>
                        <th>Cancelar</th>
                    </tr>
                </thead>
                <tbody>

                    {
                        data && data.map((order, index) => (
                            <tr key={index}>
                                <td><ToggleStatus
                                        status={order.status}
                                        ordersId={order.id}
                                        rdOnly={false}
                                    />
                                </td>
                                <td>{order.id.toString().padStart(8, '0')}</td>
                                <td>{order.created_at}</td>
                                <td>{order.description}</td>
                                <td>
                                    <button onClick={() => handleDeleteOrder(order.id)}>
                                        <MdOutlineDelete size={24}/>
                                    </button>
                                </td>
                            </tr>
                        ))
                    }
                </tbody>
            </Table>
        </Container>
    )
}