import styled from "styled-components";
import { FlexWrapperStyled } from "../../../../components/FlexWrapperStyled";
import { H3TitleStyled } from "../../../../components/H3TitleStyled";
import { DescriptionStyled } from "../../../../components/DescriptionStyled";
import { ProjectDataPropsType } from "../../../../projectData";
import { myTheme } from "../../../../styles/Theme.styled";
import { ButtonStyled } from "../../../../components/ButtonStyled";




export function Project(props: {data: ProjectDataPropsType}) {
    return (
        <ProjectWrapperStyled>
            <DescriptionWrapperStyled>
                <H3TitleStyled>{props.data.title}</H3TitleStyled>
                <DescriptionStyled>{props.data.description}</DescriptionStyled>
                <ButtonStyled tag="a" status={"active"} text={"View Project"} width={"150px"}/>
            </DescriptionWrapperStyled>
            <ProjectImgStyled src={props.data.scrImg} alt={props.data.alt}/>
        </ProjectWrapperStyled>
    )
}


const ProjectWrapperStyled = styled(FlexWrapperStyled)`
    justify-content: center;

    &:nth-child(2n) {
        flex-direction: row-reverse;
    }
`

const DescriptionWrapperStyled = styled.div`
    display: flex;
    flex-direction: column;
    width: 50%;
    justify-content: center;
    background-color: ${myTheme.color.bgColor.secondary};
    padding: 0 30px;
    gap: 25px;

`

const ProjectImgStyled = styled.img`
    width: 50%;
    aspect-ratio: 1 / 1;
    object-fit: cover;
`