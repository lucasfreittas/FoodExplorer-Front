import styled from "styled-components";

export const Container = styled.div`
    grid-area: header;
    width: 100vw;
    background-color: ${({theme}) => theme.COLORS.DARK_600};
    gap: 32px;

    display: flex;
    align-items: center;

    padding: 0 80px;
    

    > img {
        width: 280px;
        cursor: pointer;
    };

    > button:nth-child(5) {
        min-width: max-content;
    }

`;