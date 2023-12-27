import styled from "styled-components";

export const Container = styled.div`
    grid-area: header;
    width: 100vw;
    height: 11.4rem;
    background-color: ${({theme}) => theme.COLORS.DARK_600};
    gap: 32px;

    display: flex;
    align-items: center;

    padding: 0 80px;
    

    > img {
        max-width: 198px;
        cursor: pointer;
    };

    .novoPrato{
        min-width: 185px;
    }

`;