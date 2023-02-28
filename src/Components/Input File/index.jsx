import { Container, Wraper } from './styles';

export function InputFile({label, title, icon: Icon, ...rest}){

    return(
        <Container>
            <label>{label}
                <Wraper >
                    <Icon size={32}/>{title}
                    <input type="file" accept='image/png, image/jpg, image/jpeg' {...rest} />
                </Wraper>
            </label>
        </Container>
    )
}