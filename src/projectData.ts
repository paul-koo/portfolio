import Project1Img from "./assets/images/Project1.png"
import Project2Img from "./assets/images/Project2.png"
import Project3Img from "./assets/images/Project3.png"

export const projectsData: Array<ProjectDataPropsType> = [
    {
        title: "Project1",
        scrImg: Project1Img,
        description: "I created this personal project in order to show how to create an interface in Figma using a portfolio as an example.",
        alt: "Project1",
        url: "#"
    },
    {
        title: "Project2",
        scrImg: Project2Img,
        description: "I created this personal project in order to show how to create an interface in Figma using a portfolio as an example.",
        alt: "Project2",
        url: "#"
    },
    {
        title: "Project3",
        scrImg: Project3Img,
        description: "I created this personal project in order to show how to create an interface in Figma using a portfolio as an example.",
        alt: "Project3",
        url: "#"
    },
]

export type ProjectDataPropsType = {
    title: string,
    scrImg: string
    description: string,
    alt: string 
    url: string   
}