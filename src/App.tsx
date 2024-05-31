import './App.css';
import styled from 'styled-components';
import { Header } from './layout/header/Header';
import { Main } from './layout/sections/main/Main';
import { Skills } from './layout/sections/skills/Skills';
import { Projects } from './layout/sections/projects/Projects';
import { projectsData } from './projectData';
import { Contact } from './layout/sections/contact/Contact';
import { Footer } from './layout/footer/Footer';


function App() {
    return (
        <Wrapper>
            <Header/>
            <Main/>
            <Skills/>
            <Projects data={projectsData}/>
            <Contact/>
            <Footer/>
        </Wrapper>
    );
}

export default App;

const Wrapper = styled.div`
    max-width: 1440px;
    min-height: 100vh;
    margin: auto;
    padding: 0 150px;

    & section:nth-child(n + 3) {
        margin-top: 70px;
    }
`

