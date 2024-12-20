import EmailIcon from '@mui/icons-material/Email';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';

import * as S from "./Header.styles";

export function Header() {
    return(
        <S.ContactsContainer>
            <a href="mailto:2000guilherme.silva@gmail.com">
                <EmailIcon /> 2000guilherme.silva@gmail.com
            </a>

            <S.SocialMedia>
                <a href="https://linkedin.com/in/guilherme-silva-evangelista022">
                    <LinkedInIcon /> LinkedIn
                </a>

                <span> | </span>

                <a href="https://github.com/guilherme1s">
                    <GitHubIcon /> GitHub
                </a>
            </S.SocialMedia>
        </S.ContactsContainer>
    );
}
