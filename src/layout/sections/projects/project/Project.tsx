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
                <ButtonStyled tag="a" status={"active"} text={"View Project"}/>
            </DescriptionWrapperStyled>
            <ProjectImgStyled src={props.data.scrImg} alt={props.data.alt}/>
        </ProjectWrapperStyled>
    )
}


const ProjectWrapperStyled = styled(FlexWrapperStyled)`
    justify-content: center;
    overflow: hidden;
    border-radius: 2em 2em 2em 2em;

    &:nth-child(2n) {
        flex-direction: row-reverse;
    }

    @media ${myTheme.media.mobile} {
        flex-direction: column-reverse;
        &:nth-child(2n) {
            flex-direction: column-reverse;
        }
    }
`

const DescriptionWrapperStyled = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    gap: 25px;
    width: 50%;
    background-color: ${myTheme.color.bgColor.secondary};
    padding: 25px 25px;
    z-index: 1;

    @media ${myTheme.media.mobile} {
        width: auto;
        aspect-ratio: 1/1;
        gap: 25px;
        justify-content: center;
    }

`

const ProjectImgStyled = styled.img`
    width: 50%;
    aspect-ratio: 1 / 1;
    object-fit: cover;
    transition: all 0.5s;

    &:hover {
        transform: scale(1.2);
        transition: all 0.5s;
    }

    @media ${myTheme.media.mobile} {
        width: 100%;
        min-height: max-content;
    }
`