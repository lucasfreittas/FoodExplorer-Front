import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    margin: 32px 0px;
`;

export const Table = styled.table`
    width: 100%;

    text-align: left;
    font-family: 'Roboto';
    font-weight: 400;
    font-size: 20px;
    color: ${({theme}) => theme.COLORS.LIGHT_400};
    border-spacing: 0px;
    border: ${({theme}) => `2px solid ${theme.COLORS.DARK_1000}`};
    border-radius: 10px;

    td, th {
        padding: 18px 28px;
        border: ${({theme}) => `2px solid ${theme.COLORS.DARK_1000}`};
        vertical-align: middle;
        
        
        
        > svg {
            font-size: 40px;
            vertical-align: middle;
            margin-bottom: 4px;
            color: ${({theme}) => theme.COLORS.TOMATO_300};
        }
    };

    th {
        color: ${({theme}) => theme.COLORS.LIGHT_300};
        height: 80px;
    };

    .headTable > :first-child {
        border-top-left-radius: 8px;
    };

    .headTable > :last-child {
        border-top-right-radius: 8px;
    };

    tbody > :last-child > :first-child{
        border-bottom-left-radius: 8px;
    };

    tbody > :last-child > :last-child{
        border-bottom-right-radius: 8px;
    };

`;