import styled from "styled-components"

export const Container = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 6px;
    background-color: ${({theme, second}) => second ? theme.COLORS.DARK_800 : theme.COLORS.TOMATO_100};
    color: ${({theme}) => theme.COLORS.LIGHT_100};
    padding:  18px;
    border-radius: 8px;
    border: none;
    font-size: 20px;
    font-weight: normal;
    font-family: 'Poppins', sans-serif;
    min-width: max-content;

    &:hover{
        background-color: ${({theme, second}) => second ? theme.COLORS.DARK_900 : theme.COLORS.TOMATO_200};
    };

    &:disabled{
        background-color: ${({theme}) => theme.COLORS.TOMATO_400};
        color: ${({theme}) => theme.COLORS.TOMATO_100};
    }
`;
