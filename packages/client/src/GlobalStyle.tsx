import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

export const GlobalStyle = createGlobalStyle`

${reset}

:root {
    --main100: #ECF2FF;
    --main200: #D5E3FF;
    --main300: #B3CDFF;
    --main400: #81ACFF;
    --main500: #5383E8;
    --main600: #4171D6;
    --main700: #2F5EC0;
    --main800: #2F436E;
    --main900: #28344E;
    --gray0: #FFF;
    --gray100: #F7F7F9;
    --gray200: #ebeef1;
    --gray250: #DBE0E4;
    --gray300: #C3CBD1;
    --gray400: #9AA4AF;
    --gray500: #758592;
    --gray600: #57646F;
    --gray700: #44515C;
    --gray800: #34414D;
    --gray900: #202D37;
    --red100: #FFF1F3;
    --red200: #FFD8D9;
    --red300: #FFBAC3;
    --red400: #FF6C81;
    --red500: #E84057;
    --red600: #D31A45;
    --red700: #B61337;
    --red800: #703C47;
    --red900: #59343B;
    --orange100: #FFF1E6;
    --orange200: #FFD1A9;
    --orange300: #FCB77A;
    --orange400: #FF9F4A;
    --orange500: #FF8200;
    --orange600: #F06F00;
    --orange700: #C55900;
    --orange800: #8E3E00;
    --orange900: #703100;
    --yellow100: #FFF9DB;
    --yellow200: #FEEC9C;
    --yellow300: #FFD424;
    --yellow400: #FFB900;
    --yellow500: #EB9C00;
    --yellow600: #E28400;
    --yellow700: #AC6306;
    --yellow800: #76480F;
    --yellow900: #4A340E;
    --green100: #E6F7DB;
    --green200: #D0F1BB;
    --green300: #A8E082;
}

* {
  box-sizing: border-box;
  -webkit-font-smoothing: antialiased;
  border: 0 solid #e5e7eb;
}

html {
  font-size: 62.5%;
  font-family: 'Noto Sans KR', sans-serif;
}

body {
  font-size: 16px;
  margin: 0;
  letter-spacing: -0.05px;
  line-height: 1.25;
}

input, textarea { 
  -moz-user-select: auto;
  -webkit-user-select: auto;
  -ms-user-select: auto;
  user-select: auto;
}

input:focus {
  outline: none;
}

button {
  border: none;
  background: none;
  padding: 0;
  cursor: pointer;
}

a{
  text-decoration: none;
  color: inherit;
}
`;
