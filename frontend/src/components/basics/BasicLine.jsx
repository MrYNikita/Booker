import styled from "styled-components";
import BasicLayout from "./BasicLayout";

const BasicLine = styled(BasicLayout).attrs(() => ({ as: 'div' }))`

${props => props.flexWrap && `flex-wrap: ${props.flexWrap};`}
${props => props.columnGap && `column-gap: ${props.columnGap}%;`}

&>*{
    width: 100%;
}
`;

export default BasicLine;