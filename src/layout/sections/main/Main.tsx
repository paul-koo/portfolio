import styled from "styled-components"
import myphoto from "../../../assets/images/photo.png"

export function Main() {
    return (
        <StyledMain>
            <div>
                <h1>I’m Rayan Adlrdard Front-end Developer</h1>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
                    Dolor omnis vero quisquam, placeat asperiores quibusdam sunt 
                    fugit cumque ratione quos. Expedita dolorum amet esse, natus 
                    delectus eius ullam. Similique, ea.
                </p>
                <button>
                    HIRE ME
                </button>
            </div>
            <Photo src={myphoto} alt="myphoto"/>
        </StyledMain>
    )
}

const StyledMain = styled.section`
    display: flex;
    padding: 0px 75px;
    background-color:rgba(255, 255, 255, 0.696);
    

    button {
        border-radius: 5px;
        width: 100px;
        height: 40px;
        background-color: rgba(232, 233, 227, 0.4);
    }
` 

const Photo = styled.img`
    width: 1000px;
    height: 550px;
    object-fit: cover;
`
