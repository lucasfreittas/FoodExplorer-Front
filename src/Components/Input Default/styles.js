import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;

    > label {
        font-size: 1.8rem;
        font-weight: normal;
        color: ${({theme}) => theme.COLORS.LIGHT_400};
        margin-bottom: 12px;
    };
`;

export const InputText = styled.input`
    background-color: ${({theme}) => theme.COLORS.DARK_800};
    border: none;
    height: 56px;
    padding-left: 14px;
    padding-right: 14px;
    font-size: clamp(10px, 1.8rem, 18px);
    font-weight: normal;
    color: ${({theme}) => theme.COLORS.LIGHT_100};
    border-radius: 8px;

    &::placeholder{
        font-size: clamp(10px, 1.8rem, 18px);
        font-weight: normal;
        color: ${({theme}) => theme.COLORS.LIGHT_500};
    };

    &:focus{
        outline: none;
    }
`;


