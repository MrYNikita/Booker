import styled from "styled-components";

export const Cover = styled.section`
display: flex;
margin-left: 10%;

& > * {
color: #fff;
}

`;
export const Label = styled.label`
width: 70%;
border-right: 3px solid #6d6d6d;
`;
export const Count = styled.label`
margin-left: 2%;
max-width: 25%;
overflow: hidden;
white-space: nowrap;
text-overflow: ellipsis;
`;