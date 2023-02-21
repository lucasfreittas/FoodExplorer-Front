import styled from "styled-components"

export const Container = styled.button`
    background-color: ${({theme}) => theme.COLORS.TOMATO_100};
    color: ${({theme}) => theme.COLORS.LIGHT_100};
    padding:  18px 0;
    border-radius: 8px;
    border: none;
    font-size: 20px;
    font-weight: normal;
    font-family: 'Poppins', sans-serif;

    &:hover{
        background-color: ${({theme}) => theme.COLORS.TOMATO_200};
    };

    &:disabled{
        background-color: ${({theme}) => theme.COLORS.TOMATO_400};
        color: ${({theme}) => theme.COLORS.TOMATO_100};
    }
`;
