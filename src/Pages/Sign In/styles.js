import styled from "styled-components";

export const Container = styled.div`
    height: 100vh;
    width: 100%;
    display: flex;
    padding: 0 150px;
    justify-content: center;
    align-items: center;
`;

export const Logo = styled.div`
    width: 60%;
    height: 100%;
    display: flex;

    img {
        width: 450px;
        margin-left: 60px;
        margin-bottom: 20px;
    }
`;

export const Form = styled.form`

    > h1 {
        text-align: center;
        font-family: 'Poppins', sans-serif;
        font-size: 44px;
        font-weight: 500;
    }

    display: flex;
    width: 700px;
    border-radius: 24px;
    flex-direction: column;
    background-color: ${({theme}) => theme.COLORS.DARK_700};
    padding: 100px;
    gap: 40px;
`;