import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

    * {
        box-sizing: border-box;
        /* font-family: 'Lexend Zetta', sans-serif; */
        /* font-family: 'Lexend Deca', sans-serif; */
    }

    :root {
        --white: rgb(255,255,255);
        --white-app: rgb(255,255,255);
        --black: rgb(0,0,0);
        --purple: #A101C5;
        --green: #22ff00;
        --grey: #D4D4D4;
        --greyDark: #818181;
        --red: #C70000;

        --shadow:  0px 5px 10px 0px rgba(0, 0, 0, 0.3);
        --green-linear: linear-gradient(
            13deg,
            #27b30b 0%,
            #22ff00 100%
            );
        --background: var(--white-app);
    }

    .root {
        height: 100vh;
        width: 100%;
    }

    body {
        height: 100vh;
        width: 100%;
    }
`;

export default GlobalStyle;
