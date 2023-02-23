import styled from "styled-components";

export const Container = styled.button`
    display: flex;
    gap: 8px;
    align-items: center;
    min-width: max-content;
    background: none;
    border: none;
    color: ${({theme}) => theme.COLORS.LIGHT_100};
    font-size: 20px;
    font-weight: normal;
    font-family: 'Poppins', sans-serif;
    flex-wrap: nowrap;

    &:hover{
        filter: brightness(0.8);
    }
`;

