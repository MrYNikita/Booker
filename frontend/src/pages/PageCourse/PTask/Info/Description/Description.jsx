import { useState } from "react";
import styled from "styled-components";
import BasicLayout from "../../../../../components/basics/BasicLayout";
import BasicWrapper from "../../../../../components/basics/BasicWrapper";
import Text from "./Text/Text";

const Description = () => {

    const [isToogle, setToogle] = useState(true);

    return (
        <Wrapper>
            <Layout
                onClick={() => {
                    setToogle(!isToogle);
                }}
            >
                Описание
                {isToogle && <Text/>}
            </Layout>
        </Wrapper>
    );

};

export default Description;

const Layout = styled(BasicLayout)`
width: min-content;
height: min-content;
padding: 0.3% 1%;
border-radius: var(--border-radius-1);
background-color: var(--color-4);

&:hover {
    background-color: var(--color-1);
}
`;
const Wrapper = styled(BasicWrapper)`
`;