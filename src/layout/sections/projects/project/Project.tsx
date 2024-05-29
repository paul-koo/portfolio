import styled from "styled-components";
import { FlexWrapperStyled } from "../../../../components/FlexWrapperStyled";
import { H3TitleStyled } from "../../../../components/H3TitleStyled";
import { H3DescriptionStyled } from "../../../../components/H3DescriptionStyled";
import { ProjectDataPropsType } from "../../../../projectData";



export function Project(props: {data: ProjectDataPropsType}) {
    return (
        <ProjectWrapperStyled>
            <FlexWrapperStyled direction="column" width="40%" justify="center" padding="20px">
                <H3TitleStyled>{props.data.title}</H3TitleStyled>
                <H3DescriptionStyled>{props.data.description}</H3DescriptionStyled>
                <a href={props.data.url}><button>View Project</button></a>
            </FlexWrapperStyled>
            <ProjectImgStyled src={props.data.scrImg} alt={props.data.alt}/>
        </ProjectWrapperStyled>
    )
}

const ProjectImgStyled = styled.img`
    max-width: 40%;
    aspect-ratio: 1 / 1;
    object-fit: cover;
`

const ProjectWrapperStyled = styled(FlexWrapperStyled)`
    &:nth-child(2n) {
        flex-direction: row-reverse;
    }
    justify-content: center;
`