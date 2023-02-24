import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    border: ${({theme}) => `2px solid ${theme.COLORS.LIGHT_600}`};
    border-radius: 16px;
`;

export const Buttons = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;

    > button {
        background-color: ${({theme}) => theme.COLORS.DARK_500};
        border: none;
        color: ${({theme}) => theme.COLORS.LIGHT_100};
        font-family: 'Roboto', sans-serif;
        font-weight: 400;
        font-size: 24px;
        width: 100%;
        height: 120px;
        border-bottom: ${({theme}) => `2px solid ${theme.COLORS.LIGHT_600}`};
        
        &:hover{
            background-color: ${({theme}) => theme.COLORS.DARK_800};
        }
    };

    > :first-child{
        border-right: ${({theme}) => `2px solid ${theme.COLORS.LIGHT_600}`};
        border-top-left-radius: 16px;
    };

    > :last-child{
        border-top-right-radius: 16px;
    };

    button:active, button:focus{
        background-color: ${({theme}) => theme.COLORS.DARK_1000};
    }
`;

export const Content = styled.div`
    padding: 100px;
`;

export const Credit = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;

    input[type="number"]::-webkit-inner-spin-button,
    input[type="number"]::-webkit-outer-spin-button {
        -webkit-appearance: none;
        margin: 0;
    };

    input {
        outline: ${({theme}) => `1px solid ${theme.COLORS.LIGHT_100}`};
    
    &:focus{
        outline: ${({theme}) => `1px solid ${theme.COLORS.LIGHT_100}`};
    }
    };

    > .wrapper {
        display: flex;
        margin: 32px 0;
        gap: 24px;
    }
`;
