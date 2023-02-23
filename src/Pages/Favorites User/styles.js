import styled from "styled-components";

export const Container = styled.div`
    display: grid;
    height: 112vh;
    grid-template-rows: 146px auto 120px;
    grid-template-areas: 
    "header"
    "content"
    "footer";
`;

export const Content = styled.section`
    grid-area: content;
    padding: 48px 170px;
    justify-content: flex-start;

    > h1 {
        font-family: 'Poppins', sans-serif;
        font-weight: 500;
        color: ${({theme}) => theme.COLORS.LIGHT_300};
        font-size: 44px;
    };
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

