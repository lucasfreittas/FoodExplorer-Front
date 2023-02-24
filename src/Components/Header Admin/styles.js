import styled from "styled-components";

export const Container = styled.div`
    grid-area: header;
    width: 100vw;
    background-color: ${({theme}) => theme.COLORS.DARK_600};
    gap: 32px;

    display: flex;
    align-items: center;

    padding: 0 170px;
    

    > img {
        width: 850px;
    }

    .novoPrato{
        min-width: 185px;
    }

`;