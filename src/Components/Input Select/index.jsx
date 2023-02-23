import { Container, SelectBox } from './styles';

export function InputSelect({label, options, ...rest}){
    return(
        <Container>
            <label htmlFor={SelectBox}>{label}</label>
                <SelectBox {...rest}>
                    {
                        options.map((option, index) => (
                            <option key={index} value={option.value}>
                                {option.label}
                            </option>
                        ))
                    }
                </SelectBox>
        </Container>
    )
};