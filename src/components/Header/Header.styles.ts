import styled from "styled-components";

export const ContactsContainer = styled.div `
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 0.75rem;
    padding: 1.25rem;
    
    a {
        text-decoration: none;
        display: flex;
        align-items: center;
        gap: 0.5rem;
        color: var(--gray-300);
    
        &:hover {
            color: var(--blue-500);

            svg {
                color: var(--blue-500);
            }
        }
    }

    svg {
        color: var(--gray-300);
        font-size: 0.875rem;
    }

    @media (min-width: 668px){
        padding: 1.5rem 1.25rem;
    }

    @media (min-width: 1024px){
        flex-direction: row;
        justify-content: space-between;
    }
`;

export const SocialMedia = styled.div `
   display: flex;
   gap: 0.5rem;

   span {
    color: var(--white);
   }

   @media (min-width: 668px){
       gap: 0.75rem;
    }

    @media (min-width: 1024){
       gap: 0.875rem;
    }
`;
