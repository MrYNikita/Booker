import styled from "styled-components";

const BasicP = styled.p.attrs(props => ({ as: props.as ?? 'p' }))`
color: #fff;
`;

export default BasicP;