import styled from "styled-components";

export const Container = styled.div`
    grid-area: header;
    width: 100vw;
    background-color: ${({theme}) => theme.COLORS.DARK_600};
    gap: 32px;

    display: flex;
    justify-content: space-between;
    align-items: center;

    padding: 0 80px;
    

    > img {
        width: 750px;
        cursor: pointer;
    };

    .novoPrato{
        min-width: 185px;
    }

`;