import styled from "styled-components";

export const Container = styled.div`
    display: grid;
    overflow: hidden;
    grid-template-rows: 146px auto 120px;
    grid-template-areas: 
    "header"
    "content"
    "footer";
`;

export const Content = styled.section`
    display: flex;
    flex-direction: column;
    gap: 64px;
    grid-area: content;
    width: 100vw;
    justify-content: center;
    padding: 80px;

`;

export const Main = styled.div`
    grid-area: content;
    display: flex;
    gap: 70px;
    justify-content: center;
    align-items: center;

    > img {
        width: 450px;
    }
`;

export const Description = styled.div`
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
`;

export const Ingredients = styled.div`
    display: flex;
    gap: 16px;
    margin-bottom: 56px;
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
        width: 230px;
    }
    

`;