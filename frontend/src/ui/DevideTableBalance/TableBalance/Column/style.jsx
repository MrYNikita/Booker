import styled from "styled-components";

export const Cover = styled.section`
width: 100%;
height: 100%;
display: flex;
flex-direction: column;

& > * {

    margin-bottom: 1%;

}
`;
export const Title = styled.h4`
color: #fff;
`;
export const Header = styled.header`
color: #fff;
width: 100%;
height: min-content;
margin-top: 1%;
margin-left: 10%;
display: flex;

& > * {
margin-right: 3%;
}

`;
export const ButtonAdd = styled.button`
width: 7%;
color: #fff;
font-weight: 600;
border-width: 0px;
border-radius: 3px;
background-color: #ffc869;

&:hover {
background-color: #ffdca0;
}

`;
export const Rows = styled.section`
width: 100%;
height: 100%;
overflow-y: auto;
`;
export const Sum = styled.label`
width: 100%;
color: #fff;
height: min-content;
margin-left: 10%;
`;