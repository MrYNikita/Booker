import { createGlobalStyle } from "styled-components";

const StyleGlobal = createGlobalStyle`
    
html, body, #root {
    width: 100%;
    height: 100%;
}
:not(#root, body, html) {
    transition: all 0.5s;
}

svg {
    fill: #fff;
}
img {
    object-fit: cover;
}
body {
    /* background-color: #76cfff; */
}

`;

export default StyleGlobal;