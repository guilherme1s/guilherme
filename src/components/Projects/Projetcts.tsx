import { CollapseCard } from "../CollapseCard/CollpaseCard";
import * as S from "./Projects.styles";

export function Projects() {
    return (
        <S.ProjectsWrapper>
            <S.ProjectsTitle>Projetos</S.ProjectsTitle>

            <CollapseCard title="Acadêmicos">
                <ul>
                    <li>
                        <span>Website institucional</span>: Projeção e desenvolvimento de um site institucional para uma empresa do setor de vestuário a fim de expandir sua visibilidade no mercado, utilizando Figma, HTML, CSS, JavaScript, PHP e MySQL, criando uma solução com foco na usabilidade do cliente e destaque da marca.
                    </li>
                    <li>
                        <span>Microcontroladores</span>: Utilização do microcontrolador ESP32 com finalidade de monitorar através de sensores 3 variáveis: luminosidade, temperatura e ruído. Programação do ESP32 foi realizada utilizando da Linguagem C. Os dados coletados foram exibidos em um dashboard móvel, combinando hardware e software.
                    </li>
                    <li>
                        <span>Estrutura de redes</span>: Planejamento e execução de uma rede cabeada para um estabelecimento comercial com três pavimentos e mais de 100 "work areas", garantindo conectividade eficiente e organizada.
                    </li>
                </ul>
            </CollapseCard>

            <CollapseCard title="Extracurriculares">
                <ul>
                    <li>
                        <span>Website portfólio</span>: Criação de um portfólio pessoal, utilizando Figma, HTML, CSS e JavaScript, com foco em responsividade e usabilidade.
                    </li>
                    <li>
                        <span>Planejamento de website</span>: Desenvolvimento de um plano detalhado para um site de apresentação de projetos, abrangendo esboços de layout, cronogramas e definição de tecnologias e metodologias agéis, do conceito à implementação. 
                        O projeto foi desenvolvido com intuito de planejar uma futura aplicação web para a equipe AcademyOne, da EDVAC Educação e Informática LTDA, um grupo de atividades extracurriculares focadas em desenvolver soluções e projetos da área de tecnologia, pertencente ao Centro Universitário Eniac, em Guarulhos, São Paulo. 
                    </li>
                </ul>
            </CollapseCard>
        </S.ProjectsWrapper>
    );
}
