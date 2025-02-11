import { CollapseCard } from "../CollapseCard/CollpaseCard";
import { ProjectItemList } from "../ProjectItemList/ProjectItemList";
import { projects } from "../../data/projects";

import * as S from "./Projects.styles";

export function Projects() {
  return (
    <S.ProjectsWrapper>
      <S.ProjectsTitle>Projetos</S.ProjectsTitle>

      <CollapseCard title="Acadêmicos">
        <S.ProjectList>
          {projects.academic.map((project) => {
            return (
              <ProjectItemList
                key={project.id}
                title={project.title}
                text={project.description}
                projectLink={project.projectLink}
                projectLinkText={project.projectLinkText}
                projectRepo={project.projectRepo}
                projectRepoText={project.projectRepoText}
              />
            );
          })}
        </S.ProjectList>
      </CollapseCard>

      <CollapseCard title="Extracurriculares">
        <S.ProjectList>
          {projects.extracurricular.map((project) => {
            return (
              <ProjectItemList
                key={project.id}  
                title={project.title}
                text={project.description}
              />
            );
          })}
        </S.ProjectList>
      </CollapseCard>

      <CollapseCard title="Pessoais">
        <S.ProjectList>
          {projects.personal.map((project) => {
            return (
              <ProjectItemList
                key={project.id}
                title={project.title}
                text={project.description}
                projectLink={project.projectLink}
                projectLinkText={project.projectLinkText}
                projectRepo={project.projectRepo}
                projectRepoText={project.projectRepoText}
              />
            );
          })}
        </S.ProjectList>
      </CollapseCard>
    </S.ProjectsWrapper>
  );
}
