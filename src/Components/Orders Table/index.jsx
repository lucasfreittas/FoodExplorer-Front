import { Container, Table } from './styles';

import { RxDotFilled } from 'react-icons/rx';

export function OrdersTable(){
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
                    <tr>
                        <td><RxDotFilled/> Pendente</td>
                        <td>00000001</td>
                        <td>1 x Salada Radish, 1 x Torradas de Parma, 1 x Chá de Canela, 1 x Suco de Maracujá</td>
                        <td>20/05 às 18h00</td>
                    </tr>

                    <tr>
                        <td><RxDotFilled/> Pendente</td>
                        <td>00000001</td>
                        <td>1 x Salada Radish, 1 x Torradas de Parma, 1 x Chá de Canela, 1 x Suco de Maracujá</td>
                        <td>20/05 às 18h00</td>
                    </tr>

                    <tr>
                        <td><RxDotFilled/> Pendente</td>
                        <td>00000001</td>
                        <td>1 x Salada Radish, 1 x Torradas de Parma, 1 x Chá de Canela, 1 x Suco de Maracujá</td>
                        <td>20/05 às 18h00</td>
                    </tr>

                    <tr>
                        <td><RxDotFilled/> Pendente</td>
                        <td>00000001</td>
                        <td>1 x Salada Radish, 1 x Torradas de Parma, 1 x Chá de Canela, 1 x Suco de Maracujá</td>
                        <td>20/05 às 18h00</td>
                    </tr>
                </tbody>
            </Table>
        </Container>
    )
}