import styled from "styled-components";

export const Container = styled.div`
    height: 100vh;
    width: 100%;
    display: flex;
    padding: 0 8% 0 0;
    justify-content: center;
    align-items: center;

    @media(max-width: 768px){
        flex-direction: column;
        padding: 0;
        margin-bottom: 50px;
        overflow: auto;
    }
`;

export const Logo = styled.div`
    width: 60%;
    height: 100%;
    display: flex;
    justify-content: center;

    img {
        width: 322px;
        margin-bottom: 20px;
    }

    @media(max-width: 768px){
        width: 100%;
        margin-top: 60px;
        margin-bottom: 20px;
    }
`;

export const Form = styled.form`

    display: flex;
    width: 476px;
    border-radius: 2.4rem;
    flex-direction: column;
    background-color: ${({theme}) => theme.COLORS.DARK_700};
    padding: 56px;
    gap: 40px;

    > h1 {
        text-align: center;
        font-family: 'Poppins', sans-serif;
        font-size: clamp(22px, 3.2rem, 50px);
        line-height: 140%;
        font-weight: 500;
    };

    > :last-child{
        display: flex;
        align-items: center;
        justify-content: center;
    };
`;