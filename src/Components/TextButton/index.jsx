import { Container } from './styles';

export function TextButton({title, icon:Icon, ...rest}){
    return(
        <Container {...rest}>
            {Icon && <Icon size={32}/>}
            {title}
        </Container>
    )
}