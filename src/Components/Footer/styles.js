import styled from "styled-components";

export const Container = styled.footer`
    grid-area: footer;
    background-color: ${({theme}) => theme.COLORS.DARK_600};
    
    display: flex;
    align-items: center;
    justify-content: space-between;

    padding: 0 80px;

    font-family: 'Roboto';
    font-weight: 400;
    font-size: 28px;
    color: ${({theme}) => theme.COLORS.LIGHT_200};

    > img {
        width: 280px;
    }


    @media (max-width: 550px) {
        display: flex;
        align-items: center;
        height: 7.7rem;
        width: 100vw;
        font-size: 1.6rem;
        padding: 0 2.8rem;
        color: ${({theme}) => theme.COLORS.LIGHT_500};
        
        > img{
            height: 20px;
            width: 100px;
        }

        > p {
            width: 100%;
            text-align: right;
        }
    }
`;