import styled from "styled-components";
import BasicWrapper from "./BasicWrapper";

const BasicLayout = styled(BasicWrapper).attrs(props => ({ as: props.as ?? 'section' }))`
text-align: center;
`;

export default BasicLayout;