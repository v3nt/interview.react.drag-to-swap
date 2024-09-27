import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    :root {
        --color-primary: #FF015C;
        --color-blue : #2778a5;
        --border-radius : 5px;
    }

    html,
    body {
        padding: 0;
        margin: 0;
        font-family: Droid Sans, Helvetica Neue, sans-serif;
            background-color: white;
            color: black;
    }

    a {
        color: inherit;
        text-decoration: none;
    }

    * {
        box-sizing: border-box;
    }

 
`;
