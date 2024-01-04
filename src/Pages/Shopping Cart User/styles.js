import styled from "styled-components";

export const Container = styled.div`
    display: grid;
    height: 100%;
    grid-template-rows: 146px auto 7.7rem;
    grid-template-areas: 
    "header"
    "content"
    "footer";
    overflow: hidden;

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
    padding: 48px 170px;
    justify-content: flex-start;

    @media(max-width: 1000px) {
        padding: 0;
        display: flex;
        flex-direction: column;
        padding: 0 24px;
        width: 100vw;
        
    }
`;

export const Main = styled.div`
    display: flex;
    justify-content: space-between;
    margin-top: 32px;

    @media(max-width: 1000px) {
        flex-direction: column;
        
    }    
   
`;

export const Order = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 24px;
    width: 50%;


     > h1 {
        font-family: 'Poppins', sans-serif;
        font-weight: 500;
        color: ${({theme}) => theme.COLORS.LIGHT_300};
        font-size: 44px;
        margin-bottom: 24px;
    };

    > h2 {
        font-family: 'Poppins', sans-serif;
        font-weight: 500;
        color: ${({theme}) => theme.COLORS.LIGHT_500};
        font-size: 32px;
        margin-top: 24px;
    }

    @media(max-width: 1000px) {
        margin-bottom: 64px;
        width: 100%;

        h1{
            font-size: 32px;
        }

        h2{
            font-size: 24px;
        }
    }
`;

export const Payment = styled.div`
    width: 50%;



     > h1 {
        font-family: 'Poppins', sans-serif;
        font-weight: 500;
        color: ${({theme}) => theme.COLORS.LIGHT_300};
        font-size: 44px;
        margin-bottom: 24px;
        
    };


    @media(max-width: 1000px) {
        width: 100%;
        h1{
            font-size: 32px;
        }
    }
    

`;


