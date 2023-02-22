import styled from "styled-components";

export const Container = styled.div`
    grid-area: header;
    width: 100%;
    background-color: ${({theme}) => theme.COLORS.DARK_600};

    display: flex;
    align-items: center;

    padding: 0 170px;

    > img {
        width: 280px;
    }

    > Button {
        width: 600px;
        margin-right: 48px;
    }
`;