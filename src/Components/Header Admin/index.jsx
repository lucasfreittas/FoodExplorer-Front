import { Container } from './styles';

import LogoAdmin from '../../Assets/logo-admin.svg'
import { FiSearch } from 'react-icons/fi'
import { RxExit } from 'react-icons/rx'
import { Receipt } from '../../Assets/receipt'

import { InputSearch } from '../Input Search';
import { Button } from '../Button';

export function HeaderAdmin(){
    return(
        <Container>
            <img
                src={LogoAdmin}
                alt="Logo FoodExplorer"
            />

            <InputSearch
                placeholder='Busque por pratos ou ingredientes'
                icon={FiSearch}    
            />

            <Button
                title='Novo Prato'
            />
            
            <RxExit 
                size={70}
            />

        </Container>
    )
}