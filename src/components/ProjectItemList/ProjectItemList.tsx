import * as S from "./ProjectItemList.styles";

import OpenInNewIcon from "@mui/icons-material/OpenInNew";

interface ProjectItemListProps {
  title: string;
  text: string;
  projectLink?: string;
  projectLinkText?: string;
  projectRepo?: string;
  projectRepoText?: string;
}

export function ProjectItemList({
  title,
  text,
  projectLink,
  projectLinkText,
  projectRepo,
  projectRepoText,
}: ProjectItemListProps) {
  return (
    <S.List>
      <span>{title}</span>: {text}

      <div>
        {projectLink && projectLinkText && (
          <a href={projectLink} target="_blank">
            <OpenInNewIcon /> {projectLinkText}
          </a>
        )}
        {projectRepo && projectRepoText && (
          <a href={projectRepo} target="_blank">
            <OpenInNewIcon /> {projectRepoText}
          </a>
        )}
      </div>
    </S.List>
  );
}
