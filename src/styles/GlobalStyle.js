import {createGlobalStyle} from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        list-style: none;
    }

    :root {
        --primary-color: #1F2544;
        --primary-color2: rgba(31, 37, 68, 1);
        --primary-color3: rgba(31, 37, 68, .4); 
        --primary-color4: rgba(31, 37, 68, .6); 
        --background-color: #F3D7CA;
        --background-image: #F5EEE6;
        --color-white: #FFFFFF;
        --color-green: #42AD00;
        --color-grey: #AAA;
        --color-accent: #F56692;
        --color-delete: #FF0000;
    }

    body {
        font-family: 'Nunito', sans-serif;
        font-size: clamp(1rem, 1.5vw, 1.2rem);
        overflow: hidden;
        color: var(--primary-color4);
        background: #E6A4B4;
    }

    h1, h2, h3, h4, h5, h6{
        color: var(--primary-color);
    }

    .error{
        color: red;
        animation: shake 0.5s ease-in-out;
        @keyframes shake {
            0%{
                transform: translateX(0);
            }
            25%{
                transform: translateX(10px);
            }
            50%{
                transform: translateX(-10px);
            }
            75%{
                transform: translateX(10px);
            }
            100%{
                transform: translateX(0);
            }
        }
    }
`;