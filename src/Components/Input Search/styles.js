import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    gap: 14px;
    align-items: center;
    background-color: ${({theme}) => theme.COLORS.DARK_900};
    color: ${({theme}) => theme.COLORS.LIGHT_400};
    border: none;
    height: 65px;
    padding-left: 16px;
    border-radius: 10px;
    width: 100%;
`;

export const Input = styled.input`
    background: transparent;
    width: 100%;
    border: none;
    height: 65px;
    font-size: 1.6rem;
    font-weight: normal;
    color: ${({theme}) => theme.COLORS.LIGHT_100};

    &::placeholder{
        font-size: 1.6rem;
        font-weight: normal;
        color: ${({theme}) => theme.COLORS.LIGHT_500};
    };

    &:focus{
        outline: none;
    }
`;
