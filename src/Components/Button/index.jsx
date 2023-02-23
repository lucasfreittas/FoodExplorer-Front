import { Container } from './styles';

export function Button({title, second, icon:Icon, ...rest}){
    return(
        <Container second={second} {...rest}> 
            {Icon && <Icon size={24}/>}
            {title}
        </Container>
    )
}