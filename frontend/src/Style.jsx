import { createGlobalStyle } from "styled-components";

export const StyleGlobal = createGlobalStyle`

:root {
    --color-1: #5bc0de;
    --color-2: #2a6496;
    --color-3: #0b507a;
    --color-4: #3c8dad;
    --color-5: #80dfff;
    --color-6: #60c1fd;
    --color-7: #112f42;
    --color-8: #112f42;

    --color-text: #fff;
    --color-text-input: #003352;
    
    --color-focus: #00c3ff;

    --color-hover: #c86868;
    --color-hover-delete: #c86868;

    --color-text-selection: #fff;
    --color-text-selection-background: #005a8b;

    --border-radius: 3px;
    --border-radius-1: 5px;
    --border-radius-2: 9px;
    --border-radius-3: 13px;
    --border-radius-icon: 50%;
    --border-radius-interact: 5px;

    --box-shadow-1: 0 0 10px 1px var(--color-8);
    --box-shadow-2: 1px 1px 3px 1px #000;
}
::-webkit-scrollbar {
    width: 10px;
}

::-webkit-scrollbar-thumb {
    background-color: var(--color-4);
}

* {
    color: var(--color-text);
    border: none;
    margin: 0;
    padding: 0;
    outline: none;
    overflow: hidden;
    box-sizing: border-box;
    user-select: none;
    font-family: Arial, Helvetica, sans-serif;
}
*::selection {
    color: var(--color-text-selection);
    caret-color: var(--color-text-input);
    background-color: var(--color-text-selection-background);
}

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

@keyframes move {
    from {
        transform: translateY(-100%);
    }
    to {
        transform: translateY(0%);
    }
}
@keyframes hide {
    from {
        opacity: 1;
    }
    to {
        opacity: 0;
    }
}

`;