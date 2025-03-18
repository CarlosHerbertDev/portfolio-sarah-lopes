 import { createGlobalStyle } from "styled-components"


const Globalstyle = createGlobalStyle `
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    scroll-behavior: smooth;
}
    
body {
    font-size: 62.5%;
    padding: 20px;
    margin: 0 auto;
    max-width: 1440pxnn
}

li {
    list-style: none;
}

a {
    text-decoration: none;
    color: #000;
}
`

export default Globalstyle