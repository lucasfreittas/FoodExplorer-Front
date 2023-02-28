import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    position: relative;

    > h1 {
        margin-bottom: 40px;
        font-family: 'Poppins', sans-serif;
        font-weight: 400;
        color: ${({theme}) => theme.COLORS.LIGHT_300};
        font-size: 44px;
    };

    .left > button {
        background: none;
        border: none;
        top: 50%;
        left: -25px;
        z-index: 10;
        position: absolute;
    };

    .left{
        display: flex;
        align-items: center;
        background-image: linear-gradient(90deg, #000A0F, rgba(0, 10, 15, 0));
        width: 150px;
        height: 90%;
        position: absolute;
        z-index: 10;
    };

    .right{
        display: flex;
        align-items: center;
        background-image: linear-gradient(90deg,  rgba(0, 10, 15, 0), #000A0F);
        width: 150px;
        height: 90%;
        position: absolute;
        right: 0px;
        z-index: 10;
    };

    .right > button {
        background: none;
        border: none;
        position: absolute;
        top: 50%;
        right: -25px;
        z-index: 10;
    };

    .leftArrow{
        font-size: 70px;
        color: ${({theme}) => theme.COLORS.LIGHT_100};

    };

    .rightArrow{
        font-size: 70px;
        color: ${({theme}) => theme.COLORS.LIGHT_100};
      
    };
`;

export const Carousel = styled.div`
    width: 100%;
    max-width: 1600px;
    display: flex;
    gap: 32px;
    overflow-x: scroll;
    scroll-behavior: smooth;


    ::-webkit-scrollbar {
        height: 0px;
    }
  

`;

export const Card = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    min-width: 450px;
    background-color: ${({theme}) => theme.COLORS.DARK_200};
    border-radius: 16px;
    padding: 28px;
    position: relative;


    > svg {
        font-size: 32px;
        color: ${({theme}) => theme.COLORS.LIGHT_300};
        position: absolute;
        right: 24px;
        top: 24px;
        cursor: pointer;
    };

    > img {
        width: 250px;
    };

    > h3 {
        font-family: 'Poppins', sans-serif;
        font-weight: 700;
        color: ${({theme}) => theme.COLORS.LIGHT_300};
        font-size: 36px;
        margin: 24px 0;
    };

    > p {
        display: flex;
        font-family: 'Roboto', sans-serif;
        font-weight: 400;
        color: ${({theme}) => theme.COLORS.LIGHT_400};
        font-size: 22px;
        line-height: 32px;
        text-align: center;
        min-height: 100px;
        align-items: center;
    };

    > h2 {
        font-family: 'Roboto', sans-serif;
        font-weight: 400;
        color: ${({theme}) => theme.COLORS.CAKE_200};
        font-size: 40px;
        line-height: 32px;
        text-align: center;
        margin: 40px 0;
    };

    > div {
        display: flex;
        align-items: center;
        visibility: hidden;

        svg{
            font-size: 40px;
            color: ${({theme}) => theme.COLORS.LIGHT_300};
            cursor: pointer;
        };

        > span {
            font-family: 'Roboto', sans-serif;
            font-weight: 400;
            color: ${({theme}) => theme.COLORS.LIGHT_300};
            font-size: 28px;
            text-align: center;
            margin: 0 20px ;
        };

        > Button {
            margin-left: 20px;
            width: 120px;
        }
    }
`;