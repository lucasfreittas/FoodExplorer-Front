import { Container, Table } from './styles';
import { useEffect, useState } from 'react';

import { ToggleStatus } from '../Toogle Status';

export function OrdersTable({data, ...rest}){

    return(
        <Container>
            <Table>
                <thead>
                    <tr className='headTable'>
                        <th>Status</th>
                        <th>Código</th>
                        <th>Detalhamento</th>
                        <th>Data e Hora</th>
                    </tr>
                </thead>
                <tbody>

                    {
                        data && data.map((order, index) => (
                            <tr key={index}>
                                <td><ToggleStatus
                                        status={order.status}
                                        ordersId={order.id}
                                    />
                                </td>
                                <td>{order.id.toString().padStart(8, '0')}</td>
                                <td>{order.description}</td>
                                <td>{order.created_at}</td>
                            </tr>
                        ))
                    }
                </tbody>
            </Table>
        </Container>
    )
}