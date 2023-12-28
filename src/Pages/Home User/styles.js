import styled from "styled-components";

export const Container = styled.div`
    display: grid;
    width: 100%;
    grid-template-rows: 146px auto 120px;
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

    @media(max-width: 1000px){
        display: block;
        }
`;

export const Content = styled.div`
    display: flex;
    flex-direction: column;
    gap: 100px;
    grid-area: content;
    width: 100vw;
    max-width: 1440px;
    justify-content: center;
    padding: 80px;
    margin: auto;

    @media(max-width: 550px){
        padding: 24px;
        gap: 24px;
    }
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
        transform: scale(0.5);
        position: absolute;
        left: -400px;
        bottom: -58%;

        @media(max-width: 550px){
        max-height: 220px ;
        left: -100%;
        bottom: -48%;
        }
        
    };

    .txtWrapper {
        width: 50%;
        text-align: left;
        display: flex;
        flex-direction: column;
        gap: 10px;
        padding: 30px;
        margin-left: 40px;

        > h1 {
            font-family: 'Poppins', sans-serif;
            font-weight: 500;
            color: ${({theme}) => theme.COLORS.LIGHT_300};
            font-size: 58px;

            @media(max-width: 550px){
                font-size: 18px;
            }
        };

        > p {
            font-family: 'Roboto';
            font-weight: 400;
            color: ${({theme}) => theme.COLORS.LIGHT_300};
            font-size: 22px;

            @media(max-width: 550px){
                font-size: 12px;
            }
        }

        @media(max-width: 550px){
                width: 100%;
                padding: 8px;
                margin-left: 16px;
                max-height: 100%;
                max-width: 100%;
            }

    }


    @media(max-width: 550px){
            height: 120px;
            margin-top: 16px;
            
        }   
`;