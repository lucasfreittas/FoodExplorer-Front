import styled from "styled-components"

export const Container = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 6px;
    background-color: ${({theme}) => theme.COLORS.DARK_1000};
    color: ${({theme}) => theme.COLORS.LIGHT_100};
    padding:  8px 12px;
    border-radius: 8px;
    border: none;
    font-size: 18px;
    font-weight: normal;
    font-family: 'Poppins', sans-serif;

    &:hover{
        filter: brightness(0.8);
    };

`;
