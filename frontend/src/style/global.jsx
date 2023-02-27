import { createGlobalStyle } from "styled-components";

export const StyleGlobal = createGlobalStyle`

    * {
        margin: 0;
        padding: 0;
        font-family: Arial, Helvetica, sans-serif;
    }

    #root, body, html {

        width: 100%;
        height: 100%;
        box-sizing: border-box;
        background-image: linear-gradient(135deg,#454545,#212121);

    }

`;