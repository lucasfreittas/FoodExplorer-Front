import { Container } from './styles';

export function Button({title, second, ...rest}){
    return(
        <Container {...rest}> 
            {title}
        </Container>
    )
}