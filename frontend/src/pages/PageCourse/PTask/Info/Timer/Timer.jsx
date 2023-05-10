import styled from "styled-components";
import BasicLayout from "../../../../../components/basics/BasicLayout";
import BasicWrapper from "../../../../../components/basics/BasicWrapper";

const Timer = () => {

    return (
        <Wrapper>
            <Layout>
                00:00
            </Layout>
        </Wrapper>
    );

};

export default Timer;

const Layout = styled(BasicLayout)`
width: min-content;
height: min-content;
padding: 0.3% 1%;
border-radius: var(--border-radius-1);
background-color: var(--color-4);
`;
const Wrapper = styled(BasicWrapper)`
`;