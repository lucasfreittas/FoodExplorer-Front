import { Container, InputText } from './styles';

export function TextArea({label, ...rest}){

    return(
        <Container>
            <label htmlFor={InputText}>{label}</label>
                <InputText {...rest}/>
        </Container>
    )
}