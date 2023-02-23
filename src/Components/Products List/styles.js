import styled from "styled-components"

export const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 6px;
    padding:  8px 12px;
    border-radius: 8px;
    border: none;


    > img {
        width: 100px;
    }
`;

export const Product = styled.div`
    display: flex;
    flex-direction: column;

    > h1 {
        font-size: 28px;
        font-weight: normal;
        font-family: 'Poppins', sans-serif;
        color: ${({theme}) => theme.COLORS.LIGHT_100};
    };

    > button {
        font-size: 16px;
        font-weight: normal;
        font-family: 'Roboto', sans-serif;
        color: ${({theme}) => theme.COLORS.TOMATO_400};
        background: none;
        border: none;
        text-align: left;

        &:hover{
            filter: brightness(0.9);
        }
    };
`;
