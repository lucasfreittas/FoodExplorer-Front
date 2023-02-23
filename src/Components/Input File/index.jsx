import { Container, Wraper } from './styles';

export function InputFile({label, title, icon: Icon, ...rest}){

    return(
        <Container>
            <label>{label}
                <Wraper {...rest}>
                    <Icon size={32}/>{title}
                    <input type="file" />
                </Wraper>
            </label>
        </Container>
    )
}