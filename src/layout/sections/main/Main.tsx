import styled from "styled-components"
import myphoto from "../../../assets/images/YourImage1.png"
import { DescriptionStyled } from "../../../components/DescriptionStyled"
import { FlexWrapperStyled } from "../../../components/FlexWrapperStyled"
import Group from "../../../assets/images/Group 244.png"
import { myTheme } from "../../../styles/Theme.styled"
import { ButtonStyled } from "../../../components/ButtonStyled"
export function Main() {
    return (
        <StyledMain id="About">
            <FlexWrapperStyled direction="column" justify="center" gap="20px">
                <H1TitleStyled>I’m Rayan Adlrdard <span>Front-end</span> Developer</H1TitleStyled>
                <DescriptionStyled>Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
                    Dolor omnis vero quisquam, placeat asperiores quibusdam sunt 
                    fugit cumque ratione quos. Expedita dolorum amet esse, natus 
                    delectus eius ullam. Similique, ea.
                </DescriptionStyled>
                <FlexWrapperStyled gap={"20px"} padding="0 0 30px 0">
                    <ButtonStyled tag="a" status="active" text="Projects" href="Projects"/>
                    <ButtonStyled tag="a" status="inactive" text="LinkedIn"/>
                </FlexWrapperStyled>
            </FlexWrapperStyled>
            <Photo src={myphoto} alt="myphoto"/>
        </StyledMain>
    )
}

const StyledMain = styled.section`
    flex-grow: 1;
    background-image: url(${Group});
    background-color: ${myTheme.color.bgColor.secondary};
    background-size: cover;
    display: flex;
    padding: 0 ${myTheme.contentPadding};
    gap: calc(100%/20);
` 

const Photo = styled.img`
    max-width: 50%;
    object-fit: contain;
    margin: 0 auto;
    align-self: flex-end;
`

const H1TitleStyled = styled.h1`
    font-size: 48px;

    span {
        color: ${myTheme.color.accent};
    }
`

