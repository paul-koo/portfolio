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
            <DescriptionWrapperStyled>
                <H1TitleStyled>I’m Rayan Adlrdard <span>Front-end</span> Developer</H1TitleStyled>
                <DescriptionStyled>Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
                    Dolor omnis vero quisquam, placeat asperiores quibusdam sunt 
                    fugit cumque ratione quos. Expedita dolorum amet esse, natus 
                    delectus eius ullam. Similique, ea.
                </DescriptionStyled>
                <FlexWrapperStyled gap={"20px"}>
                    <ButtonStyled tag="a" status="active" text="Projects" href="Projects" minWidth="140px"/>
                    <ButtonStyled tag="a" status="inactive" text="LinkedIn"/>
                </FlexWrapperStyled>
            </DescriptionWrapperStyled>
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
    padding: 0 30px;
    gap: calc(100%/20);
    flex-wrap: wrap;
    border-radius: 0 0 2em 2em;

    @media ${myTheme.media.mobile} {
        padding: 0 10px;
    }
` 
const DescriptionWrapperStyled = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 20px;
    width: 500px;
    padding: 30px 0;
    flex-grow: 1;
`

const Photo = styled.img`
    width: 320px;
    height: 450px;
    object-fit: cover;
    margin: 0 auto;
    align-self: flex-end;

    @media ${myTheme.media.mobile} {
        width: 300px;
        height: 400px;
    }
`

const H1TitleStyled = styled.h1`
    font-size: ${myTheme.fontSize.h1};

    span {
        color: ${myTheme.color.accent};
    }
`

