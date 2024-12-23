import styled from "styled-components";

export const CollapseWrapper = styled.div `
`;

export const CollapseTitle = styled.h2 `
    display: flex;
    align-items: center;
    cursor: pointer;
    transition: color 0.3s;
    font-size: 1.125rem;
    margin-bottom: 0.5rem;
    gap: 0.5rem;

    svg {
        font-size: 1.125rem;
    }

    @media (min-width: 668px){
        font-size: 1.125rem;

        svg {
            font-size: 1.25rem;
        }
    }

    @media (min-width: 1024px){
        font-size: 1.25rem; 

        svg {
            font-size: 1.25rem;
        }
    }
`;

export const Content = styled.div `
    display: flex;
    flex-direction: column;
    gap: 1.25rem;

    li {
        font-size: 16px;
        margin: 0 0 1.25rem 1.25rem;
    }

    span {
        color: ${({ theme }) => theme.color["blue-500"]};
    }

    @media (min-width: 668px){
        li {
            font-size: 1.125rem; 
        }
    }

    @media (min-width: 1024px){
        li {
            font-size: 1.25rem; 
        }
    }

`;
