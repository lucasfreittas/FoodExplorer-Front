import styled from "styled-components";

export const Container = styled.div`
    height: 100vh;
    width: 100%;
    display: flex;
    padding: 0 8% 0 0%;
    justify-content: center;
    align-items: center;

    @media(max-width: 1000px){
        flex-direction: column;
        padding: 0;
        margin-bottom: 50px;
        overflow: auto;
    }

    @media(max-width: 550px){
        background-color: ${({theme}) => theme.COLORS.DARK_700};
        width: 100%;
    }
`;

export const Logo = styled.div`
    width: 60%;
    height: 100%;
    display: flex;
    justify-content: center;
    

    img {
        width: 400px;
        margin-left: 20px;
        margin-bottom: 50px;
        display: flex;
        
        

        @media(max-width: 550px){
            width: 240px;
            margin-left: 0;

        }
    }

    @media(max-width: 1000px){
        width: 100%;
        margin-top: 60px;
        margin-bottom: 20px;
        height: max-content;
        
    }

    @media(max-width: 550px){
        margin-top: 0px;
    }
`;

export const Form = styled.form`
    display: flex;
    width: 47.6rem;
    border-radius: 2.4rem;
    flex-direction: column;
    background-color: ${({theme}) => theme.COLORS.DARK_700};
    padding: 56px;
    gap: 40px;

    > h1 {
        text-align: center;
        font-family: 'Poppins', sans-serif;
        font-size: clamp(22px, 3.2rem, 50px);
        font-weight: 500;
        width: 100%;
        line-height: 140%;
    };


    > :last-child{
        display: flex;
        align-items: center;
        justify-content: center;
    };

    @media(max-width: 550px){
        width: 100%;
        padding: 16px;
    }
`;