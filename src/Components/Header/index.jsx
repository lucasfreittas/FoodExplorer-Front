import { Container } from './styles';

import LogoFE from '../../Assets/logo-foodexplorer.svg'
import { FiSearch } from 'react-icons/fi'
import { RxExit } from 'react-icons/rx'
import { Receipt } from '../../Assets/receipt'

import { InputSearch } from '../Input Search';
import { Button } from '../Button';
import { TextButton } from '../TextButton';

export function Header(){
    return(
        <Container>
            <img
                src={LogoFE}
                alt="Logo FoodExplorer"
            />

            <InputSearch
                placeholder='Busque por pratos ou ingredientes'
                icon={FiSearch}
                className='search'    
            />

            <TextButton
                title='Meus Favoritos'
            />

             <TextButton
                title='Histórico de Pedidos'
            />

            <Button
                title='Pedidos(0)'
                icon={Receipt}
            />

            <TextButton
                icon={RxExit}
            />

        </Container>
    )
}