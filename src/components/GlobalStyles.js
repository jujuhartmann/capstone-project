import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
:root{
  --primary: #011B1F;
  --secondary: #344C54;
  --background: #493228;

  scroll-behavior: smooth;
}

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  font-family: 'Montserrat', sans-serif;
}

body {
  color: var(--background);
  font-size: 18px;
  font-weight: 300;
  display: grid;
  grid-template-rows: 48px auto 48px;
  background: var(--background);
}

main {
  overflow: scroll;
  line-height: 1.5;
  display: grid;
  padding: 72px 24px;
  height: 100%;
}

a:link, a:visited {
  color: var(--primary-light);    
}

`
