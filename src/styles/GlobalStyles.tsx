import { createGlobalStyle } from "styled-components";
import { myTheme } from "./Theme.styled";

export const GlobalStyles = createGlobalStyle`
    html {
        scroll-behavior: smooth;
    }
    
    *,
    *::after,
    *::before {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
        font-family: "Inter", -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
        'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
        sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        line-height: 1.2;
        color: ${myTheme.color.font.main};
        background-color: ${myTheme.color.bgColor.main};
    }

    li {
        list-style-type: none;
    }

    a {
        text-decoration: none;
        color: inherit;
    }

    button {
        border: none;
    }

    section + section {
        margin-top: 100px;

        @media ${myTheme.media.mobile} {
            margin-top: 50px;
        }
    }

`
