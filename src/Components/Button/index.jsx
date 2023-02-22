import { Container } from './styles';

export function Button({title, second, icon:Icon, ...rest}){
    return(
        <Container {...rest}> 
            {Icon && <Icon size={24}/>}
            {title}
        </Container>
    )
}