import styled from "styled-components";

export const AboutWrapper = styled.div`
    display: flex;
    flex-direction: column;
    margin: 100px 0;
    padding: 20px;
    gap: 20px;
    max-width: 900px;
    margin: 100px auto;
    line-height: 1.5;
    text-align: justify;
`;

export const AboutTitle = styled.h2`
    font-size: 20px;

    @media (min-width: 668px) {
        font-size: 24px;
    }

    @media (min-width: 1024px) {
        font-size: 30px;
    }
`;

export const AboutParagraph = styled.p`
    font-size: 1rem; 

    span {
        color: var(--blue-500);
    }

    @media (min-width: 668px) {
        font-size: 18px;
    }

    @media (min-width: 1024px) {
        font-size: 20px;
    }
`;
