import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
 *{
        margin: 0px;
        padding: 0px;
        box-sizing: border-box;
        font-size: 62.5%;
    }

    body{
        background-color: ${({ theme }) => theme.COLORS.DARK_400};
        color: ${({ theme }) => theme.COLORS.LIGHT_100};
        font-family: 'Roboto', sans-serif;
    }

    a{
        text-decoration: none;
    }

    button, a{
        cursor: pointer;
        transition: filter 0.2s;
    }

`; 
