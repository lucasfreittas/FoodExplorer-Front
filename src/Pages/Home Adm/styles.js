import styled from "styled-components";

export const Container = styled.div`
    display: grid;
    grid-template-rows: 146px auto 120px;
    grid-template-areas: 
    "header"
    "content"
    "footer";
    overflow: hidden;
`;

export const Content = styled.div`
    display: flex;
    flex-direction: column;
    gap: 100px;
    grid-area: content;
    width: 100vw;
    justify-content: center;
    padding: 80px;
`;

export const BannerHero = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 380px;
    margin-top: 64px;
    background-image: linear-gradient(rgba(9, 30, 38, 1), rgba(0, 19, 28, 1));
    border-radius: 8px;

    .imgWrapper {
        width: 200px;
        height: 100%;
        position: relative;
    };

   img {
        transform: scale(0.6);
        position: absolute;
        left: -300px;
        bottom: -48%;
        
    };

    .txtWrapper {
        width: 50%;
        text-align: left;
        display: flex;
        flex-direction: column;
        gap: 10px;
        margin-left: 40px;

        > h1 {
            font-family: 'Poppins', sans-serif;
            font-weight: 500;
            color: ${({theme}) => theme.COLORS.LIGHT_300};
            font-size: 58px;
        };

        > p {
            font-family: 'Roboto';
            font-weight: 400;
            color: ${({theme}) => theme.COLORS.LIGHT_300};
            font-size: 22px;
        }
    }
`;