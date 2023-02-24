import styled from "styled-components";

export const Container = styled.div`
    display: grid;
    height: 112vh;
    grid-template-rows: 146px auto 120px;
    grid-template-areas: 
    "header"
    "content"
    "footer";
    overflow: hidden;
`;

export const Content = styled.section`
    grid-area: content;
    padding: 48px 170px;
    justify-content: flex-start;
`;

export const Main = styled.div`
    display: flex;
    justify-content: space-between;
    margin-top: 32px;

   
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
    

`;


