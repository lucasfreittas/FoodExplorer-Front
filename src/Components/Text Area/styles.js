import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;

    > label {
        font-size: 22px;
        font-weight: normal;
        color: ${({theme}) => theme.COLORS.LIGHT_400};
        margin-bottom: 12px;
    };

    @media (max-width: 1000px) {
        label{
            font-size: 16px;
        }   
    }
`;

export const InputText = styled.textarea`
    background-color: ${({theme}) => theme.COLORS.DARK_800};
    border: none;
    height: 200px;
    padding: 16px;
    font-size: 20px;
    font-weight: normal;
    color: ${({theme}) => theme.COLORS.LIGHT_100};
    border-radius: 10px;
    resize: none;
    font-family: 'Roboto';

    &::placeholder{
        font-size: 20px;
        font-weight: normal;
        font-family: 'Roboto';
        color: ${({theme}) => theme.COLORS.LIGHT_500};
    };

    &:focus{
        outline: none;
    }

    @media (max-width: 1000px) {
         font-size: 16px;
         line-height: 24px;

         &::placeholder{
            font-size: 16px;
            line-height: 24px;
         }
          
    }
`;


