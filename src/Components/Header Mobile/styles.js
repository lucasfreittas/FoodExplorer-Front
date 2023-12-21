 import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    z-index: 10;

`

export const MenuClosed = styled.div`
    grid-area: header;
    width: 100vw;
    height: 11.4rem;
    background-color: ${({theme}) => theme.COLORS.DARK_600};

    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 2.8rem;

    > button {
        background-color: transparent;
        padding: 0;

        :hover{
            background-color: transparent;
        }
    }
    

    > img {
        height: 4rem;
        width: 100%;
        cursor: pointer;
    };

`;

export const MenuOpen = styled.div`
    grid-area: header;
    width: 100vw;
    height: 100vh;
    background-color: ${({theme}) => theme.COLORS.DARK_400};

    display: flex;
    flex-direction: column;
    align-items: flex-start;
    overflow: hidden;

    > .top-menu{
        background-color: ${({theme}) => theme.COLORS.DARK_600};
        width: 100%;
        height: 11.4rem;
        display: flex;
        align-items: center;
        font-size: 2.5rem;
        font-weight: lighter;
        gap: 1.6rem;
        padding: 2.8rem;

        > button {
        background-color: transparent;
        padding: 0;

        :hover{
            background-color: transparent;
        }
        }
    }

    > .menu-list{
        padding: 3.5rem 2.8rem;
        width: 100%;
        height: 100%;
        font-size: 2.8rem;
        font-weight: lighter;

        > :nth-child(1){
            margin-bottom: 3.6rem;
        }


        > button {
            width: 100%;
            height: 5.4rem;
            background-color: transparent;
            color: ${({theme}) => theme.COLORS.LIGHT_300};
            padding: 0 8px;
            outline: none;
            border: none;
            border-bottom: 1px solid ${({theme}) => theme.COLORS.DARK_1000};
            text-align: left;
        }
    }

    > footer{
        display: flex;
        align-items: center;
        height: 7.7rem;
        width: 100%;
        font-size: 1.6rem;
        padding: 0 2.8rem;
        color: ${({theme}) => theme.COLORS.LIGHT_500};
        
        > img{
            height: 20px;
            width: 100px;
        }

        > p {
            width: 90px;
        }

    }

    
`