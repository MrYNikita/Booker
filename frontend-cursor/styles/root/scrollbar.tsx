import { createGlobalStyle } from "styled-components";

const StyleScrollbar = createGlobalStyle`:root {

::-webkit-scrollbar {
    width: 10px;
}

::-webkit-scrollbar-thumb {
    background-color: var(--color-4);
}

}`;

export default StyleScrollbar;