import styled from "styled-components"
import { SectionTitleStyled } from "../../../components/SectionTitleStyled"
import { SectionHeaderWrapperStyled } from "../../../components/SectionHeaderWrapperStyled"
import { FlexWrapperStyled } from "../../../components/FlexWrapperStyled"
import { myTheme } from "../../../styles/Theme.styled"
import { ButtonStyled } from "../../../components/ButtonStyled"

export function Contact() {
    return (
        <StyledContact>
            <SectionHeaderWrapperStyled id="Contacts">
                <SectionTitleStyled>Contact</SectionTitleStyled>
            </SectionHeaderWrapperStyled>
            <FlexWrapperStyled width="100%">
                <FormStyled>
                    <LabelStyled>Your name<InputStyled type={"text"} name={"name"} pattern={"[a-zA-Z]{2,}"} required/></LabelStyled>
                    <LabelStyled>Your Email<InputStyled type={"email"} name={"email"} required/></LabelStyled>
                    <LabelStyled>Your Message<InputStyled as={"textarea"} name={"message"} required/></LabelStyled>
                    <ButtonStyled status="inactive" text="Send" type={"submit"}></ButtonStyled>
                </FormStyled>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d293.6705997614078!2d27.595793171015284!3d53.92526260652712!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46dbcf0948046727%3A0xf6f3c39e3ef5f84e!2z0YPQuy4g0KHRg9GA0LPQsNC90L7QstCwIDI5LCDQnNC40L3RgdC6LCDQnNC40L3RgdC60LDRjyDQvtCx0LvQsNGB0YLRjA!5e0!3m2!1sru!2sby!4v1717579818874!5m2!1sru!2sby" width="50%" height="500px" style={{ border: '0' }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" title="Карта Google"></iframe>
            </FlexWrapperStyled>
        </StyledContact>
    )
}

const StyledContact = styled.section`
    display: flex;
    flex-grow: 1;
    flex-direction: column;
    align-items: center;
    font-size: ${myTheme.fontSize.sectionDescription};


`

const FormStyled = styled.form`
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    background-color: ${myTheme.color.bgColor.secondary};
    padding: 30px;
    width: 50%;
`
const LabelStyled = styled.label`
    max-width: 550px;
    width: 100%;
    display: flex;
    flex-direction: column;
    cursor: pointer;

    textarea {
        /* resize: none; */
        min-height: 150px;
    }
`

const InputStyled = styled.input`
    font-size: ${myTheme.fontSize.sectionDescription};  
    background-color: ${myTheme.color.bgColor.main};
    border: none;
    min-height: 2em;
    color: ${myTheme.color.font.main};
`


