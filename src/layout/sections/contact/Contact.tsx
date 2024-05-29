import styled from "styled-components"
import { SectionTitleStyled } from "../../../components/SectionTitleStyled"

export function Contact() {
    return (
        <StyledContact>
            <SectionTitleStyled>Contact</SectionTitleStyled>
            <FormStyled>
                <LabelStyled>Your name<InputStyled type={"text"} name={"name"} pattern={"[a-zA-Z]{2,}"} required/></LabelStyled>
                <LabelStyled>Your Email<InputStyled type={"email"} name={"email"} required/></LabelStyled>
                <LabelStyled>Your Message<InputStyled as={"textarea"} name={"message"} required/></LabelStyled>
                <button type="submit">Send</button>
            </FormStyled>
        </StyledContact>
    )
}

const StyledContact = styled.section`
    flex-direction: column;
    align-items: center;
    min-height: 50vh;

    button {
        width: 100px;
    }

`

const FormStyled = styled.form`
    display: flex;
    flex-direction: column;
    gap: 20px;
    background-color: #FFFFFF;
    align-items: center;
    padding: 50px
`
const LabelStyled = styled.label`
    max-width: 550px;
    width: 100%;
    display: flex;
    flex-direction: column;
`

const InputStyled = styled.input`
    background-color: #F0F0F6;
    border: none;
`


