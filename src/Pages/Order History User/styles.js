import styled from "styled-components";

export const Container = styled.div`
    display: grid;
    height: 112vh;
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

    > h1 {
        font-family: 'Poppins', sans-serif;
        font-weight: 500;
        color: ${({theme}) => theme.COLORS.LIGHT_300};
        font-size: 32px;
        margin-bottom: 24px;
    };

    @media(max-width: 1000px) {
        padding: 0;
        display: flex;
        flex-direction: column;
        padding: 0 24px;
        width: 100vw;

        h1{
            font-size: 24px;
        }
    }
`;

export const Main = styled.div`
    grid-area: content;
    display: flex;
    flex-wrap: wrap;
    gap: 70px;
    margin-top: 85px;
    align-items: center;

    > img {
        width: 450px;
    }
`;

