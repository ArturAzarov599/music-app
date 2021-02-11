import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    * {
        margin:0;
        padding:0;
        box-sizing: border-box;
        list-style: none;
        text-decoration: none;
    }

    html,
    body {
        background: black;
        color: white;
        height: 100%;
    }

    #root {
        height: 100%;
    }
`

export default GlobalStyles;