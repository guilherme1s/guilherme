import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle `
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    :focus {
        outline: transparent;
        box-shadow: 0 0 0 2px ${({ theme }) => theme.color["blue-500"]};
    }

    body {
        background: ${({ theme }) => theme.color["gray-800"]};
        color: ${({ theme }) => theme.color["gray-300"]};
        -webkit-font-smoothing: antialiased;
    }

    body, input, textarea, button {
        font-family: "DM Sans", serif;
        font-weight: 400;
        font-size: 1rem;
    }
`;

