import styled from "styled-components"
import myphoto from "../../../assets/images/photo.png"
import { H3DescriptionStyled } from "../../../components/H3DescriptionStyled"
import { FlexWrapperStyled } from "../../../components/FlexWrapperStyled"

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
                <button>
                    HIRE ME
                </button>
            </FlexWrapperStyled>
            <Photo src={myphoto} alt="myphoto"/>
        </StyledMain>
    )
}

const StyledMain = styled.section`
    display: flex;
    background-color:rgb(255, 255, 255);
    padding: 0 60px;
    

    button {
        border-radius: 5px;
        width: 100px;
        height: 40px;
        background-color: #FFB400;
    }
` 

const Photo = styled.img`
    max-width: 50%;
    object-fit: cover;
`

const H1TitleStyled = styled.h1`
    font-size: 48px;

    span {
        color: #FFB400;
    }
`
