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
        label {
            font-size: 16px;
        }   
    }
`;

export const Wraper = styled.div`
    display: flex;
    gap: 14px;
    align-items: center;
    background-color: ${({theme}) => theme.COLORS.DARK_800};
    color: ${({theme}) => theme.COLORS.LIGHT_400};
    border: none;
    height: 65px;
    padding-left: 16px;
    border-radius: 8px;

    @media (max-width: 1000px) {
        height: 48px;
        padding: 6px 16px;
        overflow: auto;
    }
`;

export const InnerTag = styled.span`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 6px;
    background-color: ${({theme, isNew}) => isNew ? 'transparent' : theme.COLORS.LIGHT_600 };
    color: ${({theme, isNew}) => isNew ? theme.COLORS.LIGHT_500 : theme.COLORS.LIGHT_100};
    border: ${({theme, isNew}) => isNew ? `1px dashed ${theme.COLORS.LIGHT_500}` : 'none'};
    padding:  8px 12px;
    border-radius: 8px;
    font-size: 18px;
    font-weight: normal;
    font-family: 'Poppins', sans-serif;

    > input {
        max-width: 100px;
        background: transparent;
        border: none;
        font-size: 18px;
        font-family: 'Poppins', sans-serif;
        font-weight: normal;
        color: ${({theme}) => theme.COLORS.LIGHT_100};

    &::placeholder{
        font-size: 20px;
        font-weight: normal;
        color: ${({theme}) => theme.COLORS.LIGHT_500};
    };

    &:focus{
        outline: none;
    }

    }

    > button {
        display: flex;
        align-items: center;
        background: none;
        border: none;
        font-size: 24px;
        color: ${({theme, isNew}) => isNew ? theme.COLORS.LIGHT_500 : theme.COLORS.LIGHT_100};
    }

    @media (max-width: 1000px) {
        font-size: 16px;
        height: 100%;
        padding:  0 16px;

        input {
            font-size: 16px;
            

            &::placeholder{
            font-size: 16px;
            width: 100%;
            }
        }
    }
`;


    
