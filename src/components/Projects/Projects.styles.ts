import styled from "styled-components";

export const ProjectsWrapper = styled.div`
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

export const ProjectList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
  margin: 0;

  & li {
    font-size: 1rem;
    margin: 0 0 0 1.25rem;
 
    & a {
      display: flex;
      text-decoration: none;
      align-items: center;
      width: fit-content;
      gap: 0.5rem;
      font-size: 1rem;
      margin-top: 1rem;
      color: ${({ theme }) => theme.color["gray-300"]};
    }

    & svg {
      font-size: 1rem;
    }
  }

  & span {
    color: ${({ theme }) => theme.color["blue-500"]};
  }

  @media (min-width: 668px) {
    li {
      font-size: 1.125rem;

      & a {
        font-size: 1.125rem;
      }

      & svg {
        font-size: 1.125rem;
      }
    }
  }

  @media (min-width: 1024px) {
    li {
      font-size: 1.25rem;

      & a {
        font-size: 1.25rem;
      }

      & svg {
        font-size: 1.25rem;
      }
    }
  }
`;

export const ProjectsTitle = styled.h1`
  font-size: 1.25rem;

  @media (min-width: 668px) {
    font-size: 1.5rem;
  }

  @media (min-width: 1024px) {
    font-size: 1.875rem;
  }
`;
