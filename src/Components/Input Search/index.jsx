import { Container, Input } from './styles';

export function InputSearch({ icon: Icon, ...rest}){
    return(
        <Container>
            {Icon && <Icon size={24}/>}
            <Input {...rest}/>
        </Container>
    )
}