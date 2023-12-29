import styled from "styled-components";

export const Container = styled.div`
    display: grid;
    height: 100%;
    width: 100%;
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
        width: 100%;

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

    > h1 {
        font-size: 46px;
        font-family: 'Poppins';
        font-weight: 400;
        margin: 32px 0;

    }

    @media(max-width: 1000px){
        padding: 0;
        display: flex;
        flex-direction: column;
        padding: 0 24px;
        width: 100vw;

        > h1 {
            font-size: 32px;
        }
    }
`;

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    gap: 32px;  

    > div {
        display: flex;
        width: 100%;
        justify-content: space-between;
        align-items: center;
        gap: 32px;
    };

   
    .row1 {
        display: grid;
        grid-template-columns: 1fr 2fr 1fr;
        
    };

    .row2 {
        display: grid;
        grid-template-columns: 3fr 1fr;
    };

    .row3 {
        display: flex;
        justify-content: flex-end;

        > button {
            width: 250px;
        }
    };

    @media(max-width: 1000px) {
        gap: 24px;

        > div {
        gap: 24px;
        };

        > .row1 {
            display: flex;
            flex-direction: column;
            gap: 24px;
            
        }

        svg{
            width: 24px;
        }

        > .row2{
            display: flex;
            flex-direction: column;
        }

        > .row3{
            display: flex;
            flex-direction: column;
            margin-bottom: 24px;

            > button {
            width: 100%;
        }
        }
    }

`;