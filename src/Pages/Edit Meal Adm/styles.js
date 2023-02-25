import styled from "styled-components";

export const Container = styled.div`
    display: grid;
    height: 112vh;
    overflow: hidden;
    grid-template-rows: 146px auto 120px;
    grid-template-areas:
    "header"
    "content"
    "footer";
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

`;