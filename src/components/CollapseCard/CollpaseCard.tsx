import { useState } from "react";

import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

import * as S from "./Collapse.styles";

interface CollapseCardProps {
    title: string;
    children: React.ReactNode;
}

export function CollapseCard({ title, children }: CollapseCardProps) {
    const [isCollapseOpen, setIsCollapseOpen] = useState(false);
    
    function toggleCollapse() {
        setIsCollapseOpen((prev) => !prev);
    }

    return (
        <S.CollapseWrapper>
            <S.CollapseTitle onClick={toggleCollapse}>
            {title}
            {isCollapseOpen ? <KeyboardArrowUpIcon/> : <KeyboardArrowDownIcon />}
            </S.CollapseTitle>
            
            {isCollapseOpen &&
                <S.Content>{children}</S.Content>
            }
        </S.CollapseWrapper>
    );
}
