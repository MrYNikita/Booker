import styled from "styled-components";

const BSpace = styled.div`

${(props: any) => props.vis ? `background-color: red;` : ``}
${(props: any) => props.width ? `width: ${props.width};` : `width: 100%;`}
${(props: any) => props.height ? `height: ${props.height};` : `height: 100%;`}

`;

export default BSpace;