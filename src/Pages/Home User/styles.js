import styled from "styled-components";

export const Container = styled.div`
    display: grid;
    grid-template-rows: 146px auto 120px;
    grid-template-areas: 
    "header"
    "content"
    "footer";
    overflow: hidden;

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

export const Content = styled.div`
    display: flex;
    flex-direction: column;
    gap: 100px;
    grid-area: content;
    width: 100vw;
    padding: 140px 80px;
    justify-content: center;
`;

export const BannerHero = styled.div`
    display: flex;
    align-items: center;
    width: 100%;
    height: 380px;
    background-image: linear-gradient(rgba(9, 30, 38, 1), rgba(0, 19, 28, 1));
    border-radius: 8px;

    .imgWrapper {
        width: 800px;
        position: relative;
    };

   img {
        transform: scale(0.6);
        position: absolute;
        left: -350px;
        bottom: -370px;
        
    };

    .txtWrapper {
        width: 50%;
        text-align: left;
        display: flex;
        flex-direction: column;
        gap: 10px;
        margin-right: 40px;

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