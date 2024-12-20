import * as S from "./About.styles";

export function About() {
    return (
        <S.AboutWrapper>
            <S.AboutTitle>Sobre mim</S.AboutTitle>

            <S.AboutParagraph>
                Formado em <span>Engenharia da Computação</span>, sou <span>Desenvolvedor Front-End</span> com experiência em tecnologias 
                como: <span>HTML, CSS, JavaScript, TypeScript, React e Next.js</span>. Minha paixão é criar interfaces 
                eficientes e funcionais, focando em uma experiência de usuário excepcional.
            </S.AboutParagraph>

            <S.AboutParagraph>
                Ao longo da minha jornada, participei de <span>projetos acadêmicos e extracurriculares</span> que 
                envolvem desde o planejamento até a execução, utilizando metodologias ágeis e boas 
                práticas de desenvolvimento. Transformo desafios complexos em soluções simples, 
                priorizando qualidade, usabilidade e desempenho.
            </S.AboutParagraph>

            <S.AboutParagraph>
                Meu objetivo é contribuir para o sucesso de projetos e organizações, aplicando minha 
                criatividade, ética e trabalho em equipe para entregar resultados de alta qualidade. 
            </S.AboutParagraph>
        </S.AboutWrapper>
    );
}