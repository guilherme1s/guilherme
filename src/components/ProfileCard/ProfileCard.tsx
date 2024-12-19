import imgProfile from "../../assets/img/imgProfile.png";

import * as S from "./ProfileCard.styles";

export function ProfileCard() {
    return (
        <S.ProfileCardWrapper>
            <S.ProfileImage src={imgProfile} alt="Self Image" />

            <S.Paragraph>Olá, sou</S.Paragraph>
            <S.Paragraph><span>Guilherme Evangelista</span></S.Paragraph>
            <S.Paragraph>Desenvolvedor Front-End</S.Paragraph>
            <S.Paragraph>Engenheiro da Computação</S.Paragraph>

            <S.HorizontalLine />
        </S.ProfileCardWrapper>
    );
}
