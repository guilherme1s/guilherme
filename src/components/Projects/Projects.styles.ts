import styled from "styled-components";

export const ProjectsWrapper = styled.div `
    display: flex;
    flex-direction: column;
    margin: 3.125rem auto;
    text-align: justify;
    gap: 1.25rem;
    padding: 0 1.25rem;
    line-height: 1.5;

    @media (min-width: 1024px) {
        margin: 6.25rem auto;
    }
`;

export const ProjectsTitle = styled.h1 `
    font-size: 1.25rem;

    @media (min-width: 668px) {
    font-size: 1.5rem;
        
    }

    @media (min-width: 1024px) {
        font-size: 1.875rem;
    }
`;
