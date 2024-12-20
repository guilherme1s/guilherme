import styled from "styled-components";

export const ProfileCardWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0 0.75rem;
    margin: 6.25rem 0 0; 
    gap: 0.375rem;
    color: var(--gray-300);
`;

export const ProfileImage = styled.img`
    border-radius: 100%;
    width: 6.25rem;
    height: 6.25rem;
    margin-bottom: 0.625rem;

    @media (min-width: 668px) {
     width: 7.5rem;
     height: 7.5rem;
    }

    @media (min-width: 1024px) {
        width: 7.5rem;
        height: 7.5rem;
    }
`;

export const Paragraph = styled.p`
    color: var(--gray-300);

    span {
        color: var(--blue-500);
        font-weight: 400;
    }

    @media (min-width: 668px) {
     font-size: 1.125rem;
    }

    @media (min-width: 1024px) {
     font-size: 1.25rem;
    }
`;

export const HorizontalLine = styled.hr`
    border: none;
    width: 50%;
    height: 0.125rem;
    background: linear-gradient(
        to right,
        transparent,
        var(--blue-500),
        transparent
    );
    margin-top: 2.5rem;

    @media (min-width: 668px) {
        max-width: calc(100% - 10px);
    }
    

    @media (min-width: 1024px) {
        max-width: calc(100% - 10px);
    }
`;
