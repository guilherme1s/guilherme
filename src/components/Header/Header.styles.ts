import styled from "styled-components";

export const ContactsContainer = styled.div `
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 0.75rem;
    padding: 20px 0;
    border-bottom: 1px solid var(--gray-300);
    
    a {
        text-decoration: none;
        display: flex;
        gap: 5px;
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
        font-size: 1rem;
    }

    @media (min-width: 668px){
        padding: 25px 0;

        a, svg {
            font-size: 18px;
        }
    }

    @media (min-width: 1024px){
        flex-direction: row;
        justify-content: space-around;
        
        a, svg {
            font-size: 20px;
        }
    }
`

export const SocialMedia = styled.div `
   display: flex;
   gap: 8px;

   span {
    color: var(--white);
   }

   @media (min-width: 668px){
       gap: 12px;
    }

    @media (min-width: 1024){
       gap: 14px;
    }
`