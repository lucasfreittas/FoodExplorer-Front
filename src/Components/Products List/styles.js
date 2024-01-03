import styled from "styled-components"

export const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 12px;
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
        font-size: 32px;
        line-height: 32px;;
        font-weight: normal;
        font-family: 'Poppins', sans-serif;
        color: ${({theme}) => theme.COLORS.LIGHT_300};
        margin-bottom: 0px;
    };

    > p {
        font-size: 16px;
        font-weight: normal;
        font-family: 'Roboto', sans-serif;
        color: ${({theme}) => theme.COLORS.LIGHT_400};
        margin: 8px 0;
    }

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

    @media(max-width: 1000px){
        h1{
            font-size: 20px;
        }

        button{
            font-size: 12px;
        }

        p{
            display: none;
        }
    }
`;
