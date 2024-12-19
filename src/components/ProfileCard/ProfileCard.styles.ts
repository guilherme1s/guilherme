import styled from "styled-components";

export const ProfileCardWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0 12px;
    margin: 50px 0;
    gap: 6px;
    color: var(--gray-300);
`;

export const ProfileImage = styled.img`
    border-radius: 100%;
    width: 100px;
    height: 100px;
    margin-bottom: 10px;

    @media (min-width: 668px) {
     width: 120px;
     height: 120px;
    }

    @media (min-width: 1024px) {
        width: 130px;
        height: 130px;
    }
`;

export const Paragraph = styled.p`
    color: var(--gray-300);

    span {
        color: var(--blue-500);
        font-weight: 400;
    }

    @media (min-width: 668px) {
     font-size: 18px;
    }

    @media (min-width: 1024px) {
     font-size: 20px;
    }
`;

export const HorizontalLine = styled.hr`
    width: 60%;
    border: none;
    height: 2px;
    background-color: var(--blue-500);
    margin-top: 40px;

    @media (min-width: 668px) {
     width: 30%;
    }

    @media (min-width: 1024px) {
     width: 15%;
    }
`;
