import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;

    > label {
        font-size: 22px;
        font-weight: normal;
        color: ${({theme}) => theme.COLORS.LIGHT_400};
        margin-bottom: 12px;
    };
`;

export const InputText = styled.input`
    background-color: ${({theme}) => theme.COLORS.DARK_900};
    border: none;
    height: 65px;
    padding-left: 16px;
    font-size: 20px;
    font-weight: normal;
    color: ${({theme}) => theme.COLORS.LIGHT_100};
    border-radius: 10px;

    &::placeholder{
        font-size: 20px;
        font-weight: normal;
        color: ${({theme}) => theme.COLORS.LIGHT_500};
    };

    &:focus{
        outline: none;
    }
`;


