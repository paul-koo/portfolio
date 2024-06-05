import styled from "styled-components"
import myphoto from "../../../assets/images/YourImage1.png"
import { H3DescriptionStyled } from "../../../components/H3DescriptionStyled"
import { FlexWrapperStyled } from "../../../components/FlexWrapperStyled"
import Group from "../../../assets/images/Group 244.png"
import { myTheme } from "../../../styles/Theme.styled"
import { ButtonStyled } from "../../../components/ButtonStyled"
export function Main() {
    return (
        <StyledMain>
            <FlexWrapperStyled direction="column" justify="center" gap="20px">
                <H1TitleStyled>I’m Rayan Adlrdard <span>Front-end</span> Developer</H1TitleStyled>
                <H3DescriptionStyled>Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
                    Dolor omnis vero quisquam, placeat asperiores quibusdam sunt 
                    fugit cumque ratione quos. Expedita dolorum amet esse, natus 
                    delectus eius ullam. Similique, ea.
                </H3DescriptionStyled>
                <FlexWrapperStyled gap={"20px"} padding="0 0 30px 0">
                    <ButtonStyled status="active" text="Projects" href="#Project"/>
                    <ButtonStyled status="inactive" text="LinkedIn" href="#"/>
                </FlexWrapperStyled>
            </FlexWrapperStyled>
            <Photo src={myphoto} alt="myphoto"/>
        </StyledMain>
    )
}

const StyledMain = styled.section`
    flex-grow: 1;
    background-image: url(${Group});
    background-color: #FFFFFF;
    background-size: cover;
    display: flex;
    padding: 40px ${myTheme.contentPadding} 0;
    /* margin-top: 40px; */
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
        color: ${myTheme.color.yellow.main};
    }
`

