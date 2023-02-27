import styled from "styled-components";

export const Cover = styled.div`
width: 100%;
height: 100%;
display: flex;
flex-direction: column;
align-items: center;

& > * {
    width: 95%;
    margin-top: 3%;
}

`;
export const Table = styled.div`
height: 100%;
display: flexbox;
overflow: hidden;
margin-bottom: 3%;
border-radius: 3px;
flex-direction: column;
background-color: #ff9a51;
`;
export const Condition = styled.label`
color: #fff;
border-radius: 3px;
height: max-content;
background-color: #ffc869;
text-indent: 10%;
`;