import styled from "styled-components";

export const Container = styled.div`
    display: grid;
    height: 100%;
    width: 100vw;
    overflow: hidden;
    grid-template-rows: 146px auto 7.7rem;
    grid-template-areas: 
    "header"
    "content"
    "footer";

    .headerMobile{
            display: none;
            z-index: 2;
        }


    @media(max-width: 1000px){
        
        .headerDesktop{
            display: none;
            z-index: 2;
        }

        .headerMobile{
            display: block;
            z-index: 2;
        }
    }
`;

export const Content = styled.section`
    grid-area: content;
    padding: 48px 80px;

    @media(max-width: 1000px) {
        padding: 0;
        display: flex;
        flex-direction: column;
        padding: 0 16px;
        width: 100vw;
    }

`;

export const Main = styled.div`
    grid-area: content;
    display: flex;
    gap: 140px;
    margin: 40px 0;
    justify-content: center;
    align-items: center;

    > img {
        width: 450px;
    }

    @media(max-width: 1000px) {
        margin: 0;
        gap: 40px;
        flex-direction: column;
        width: 100%;

        > img {
            width: 264px;
        }
    }
`;

export const Description = styled.div`
    max-width: 70rem;
    > h1 {
        font-family: 'Poppins', sans-serif;
        font-weight: 500;
        color: ${({theme}) => theme.COLORS.LIGHT_300};
        font-size: 55px;
    }

    > p {
        font-family: 'Poppins', sans-serif;
        font-weight: 400;
        color: ${({theme}) => theme.COLORS.LIGHT_300};
        font-size: 24px;
        margin: 32px 0;
    }

    @media(max-width: 1000px) {
        display: flex;
        flex-direction: column;
        align-items: center;
        flex-wrap: wrap;
        width: 100%;
        justify-content: center;
        
        > h1{
            font-size: 28px;
            text-align: center;
        }

        > p {
            font-size: 16px;
            text-align: center;
        }
    }
`;

export const Ingredients = styled.div`
    display: flex;
    gap: 16px;
    margin-bottom: 56px;

    @media(max-width: 1000px) {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-wrap: wrap;

    }
`;

export const Order = styled.div`
    display: flex;
    gap: 32px;
    align-items: center;

    > div {
        color: ${({theme}) => theme.COLORS.LIGHT_300};
        display: flex;
        font-size: 24px;
        align-items: center;
        gap: 16px;
        font-family: 'Roboto';
        font-weight: 400;

        svg {
            cursor: pointer;
        }
    };

    > Button {
        width: 100%;
        font-size: 16px;
    }

     @media(max-width: 1000px) {
       > div {
        font-size: 40px;
       } 

       margin-bottom: 56px;
    }

`;