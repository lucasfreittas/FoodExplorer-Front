import styled from "styled-components";

export const Container = styled.footer`
    grid-area: footer;
    background-color: ${({theme}) => theme.COLORS.DARK_600};
    
    display: flex;
    align-items: center;
    justify-content: space-between;

    padding: 0 170px;

    font-family: 'Roboto';
    font-weight: 400;
    font-size: 28px;
    color: ${({theme}) => theme.COLORS.LIGHT_200};

    > img {
        width: 280px;
    }
`;