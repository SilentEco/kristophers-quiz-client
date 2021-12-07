import { createGlobalStyle } from "styled-components";
import { fadeIn } from "./animations/fadeIn";

export const GlobalStyles = createGlobalStyle`
    html, body {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        position: relative;
        animation: ${fadeIn} 500ms ease-in ;
    }

    p {
        animation: ${fadeIn} 50ms ease-in ;
    }

`;
