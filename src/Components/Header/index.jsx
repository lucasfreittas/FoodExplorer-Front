import { Container } from './styles';

import LogoFE from '../../Assets/logo-foodexplorer.svg'
import { FiSearch } from 'react-icons/fi'
import { RxExit } from 'react-icons/rx'
import { Receipt } from '../../Assets/receipt'

import { SearchInput } from '../SearchInput';
import { Button } from '../Button';

export function Header(){
    return(
        <Container>
            <img
                src={LogoFE}
                alt="Logo FoodExplorer"
            />

            <SearchInput
                placeholder='Busque por pratos ou ingredientes'
                icon={FiSearch}    
            />

            <Button
                title='Pedidos(0)'
                icon={Receipt}
            />
            
            <RxExit 
                size={70}
            />

        </Container>
    )
}