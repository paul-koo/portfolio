import { fontSize } from "./Common";

// font-size: calc( (100vw - Vmin)/(Vmax - Vmin) * (Fmax - Fmin) + Fmin);
export const myTheme = {
    fontSize: {
        h1: `${fontSize({
            Fmax: 64,
            Fmin: 42
        })}`,
        
        sectionTitle: `${fontSize({
            Fmax: 48,
            Fmin: 42
        })}`,
        
        h3Title: `${fontSize({
            Fmax: 36,
            Fmin: 26
        })}`,
        
        sectionDescription: `${fontSize({
            Fmax: 18,
            Fmin: 16
        })}`,

    },

    fontWeight: {
        bold: 700,
        medium: 500,
        light: 400
    },

    color: {
        bgColor: {
            main: "#f0f0f6",
            secondary: "#FFFFFF",
        },

        accent: "#ffb400",

        font: {
            main: "#2b2b2b",    
            secondary: "#767676"
        }
        
    },


    media: {
        tablet: "screen and (max-width: 768px)",
        mobile: "screen and (max-width: 576px)"
    }
}