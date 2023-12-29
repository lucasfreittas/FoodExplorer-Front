import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;

    > label {
        font-size: 22px;
        font-weight: normal;
        color: ${({theme}) => theme.COLORS.LIGHT_400};
        
    };

    @media(max-width: 1000px) {
        label{
            font-size: 16px;
        }
    }
`;

export const Wraper = styled.div`
    margin-top: 12px;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 8px;
    background-color: ${({theme}) => theme.COLORS.DARK_800};
    border: none;
    height: 65px;
    padding-left: 16px;
    font-family: 'Poppins';
    font-size: 20px;
    font-weight: normal;
    color: ${({theme}) => theme.COLORS.LIGHT_100};
    border-radius: 10px;

    &:hover{
        cursor: pointer;
    };
    

    > input {
        display: none;
        
    }

    &:focus{
        outline: none;
    }


    @media(max-width: 1000px) {
         font-size: 16px;
         height: 48px;
         justify-content: flex-start;
         padding: 0 16px;

    } 
`;


