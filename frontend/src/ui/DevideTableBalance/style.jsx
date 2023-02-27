import styled from "styled-components";

export const Cover = styled.div`
height: 500px;
width: 300px;
top: 100px;
left: 100px;
padding: 1%;
position: absolute;
overflow: hidden;
border-radius: 30px;
box-shadow: 3px 3px 0 1px #6d6d6d, 0 0 4px 1px #ffdca0, 5px 5px 2px 2px #000;
background-image: linear-gradient(135deg,#e0e0e0, #757575);
`;
export const Layout = styled.section`
top: 2.5%;
width: 100%;
height: 85%;
z-index: 1;
box-shadow: 0px 0px 3px 1px #000000 inset;
position: relative;
border-radius: 3px;
background-color: #e8e8e8;
`;
export const Header = styled.section`
width: 100%;
height: 5%;
z-index: 1;
border-radius: 5px;
position: relative;
`;
export const Title = styled.h3`
color: #fff;
width: max-content;
height: 100%;
text-shadow: 1px 1px 2px #000, -1px -1px 2px #ffa200;
padding-left: 5%;
`;

export const Panel = styled.section`
top: 4%;
height: 5%;
z-index: 1;
display: flex;
position: relative;
overflow: hidden;
align-items: center;
border-radius: 5px;
justify-content: center;
`;
export const Button = styled.button`
width: 100%;
height: 100%;
padding: 1%;
overflow: hidden;
border-width: 0;
border-right-width: 1px;
background-color: #ffc869;

&:hover {
    background-color: #ffdca0;
}

`;
export const ButtonL = styled(Button)`

`;
export const ButtonR = styled(Button)`
border-width: 0;
`;