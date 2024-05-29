import styled from "styled-components";
import { FlexWrapperStyled } from "../../../../components/FlexWrapperStyled";
import { H3TitleStyled } from "../../../../components/H3TitleStyled";
import { H3DescriptionStyled } from "../../../../components/H3DescriptionStyled";
import { ProjectDataPropsType } from "../../../../projectData";



export function Project(props: {data: ProjectDataPropsType}) {
    return (
        <ProjectWrapperStyled>
            <DescriptionWrapperStyled direction="column" width="50%" justify="center" padding="20px">
                <H3TitleStyled>{props.data.title}</H3TitleStyled>
                <H3DescriptionStyled>{props.data.description}</H3DescriptionStyled>
                <a href={props.data.url}><button>View Project</button></a>
            </DescriptionWrapperStyled>
            <ProjectImgStyled src={props.data.scrImg} alt={props.data.alt}/>
        </ProjectWrapperStyled>
    )
}

const ProjectImgStyled = styled.img`
    width: 50%;
    aspect-ratio: 1 / 1;
    object-fit: cover;
`

const ProjectWrapperStyled = styled(FlexWrapperStyled)`
    justify-content: center;

    &:nth-child(2n) {
        flex-direction: row-reverse;
    }
`

const DescriptionWrapperStyled = styled(FlexWrapperStyled)`
    background-color: #FFFFFF;
`