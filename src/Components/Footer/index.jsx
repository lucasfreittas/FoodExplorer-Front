import { Container } from './styles';

import FooterLogo from '../../Assets/footerlogo.svg'

export function Footer(){
    return(
        <Container>
            <img src={FooterLogo} alt="Logo Food Explorer" />
            <p>© 2023 - Todos os direitos reservados.</p>
        </Container>
    )
}