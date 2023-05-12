import styled from "styled-components";
import BLayout from "../../../../../components/basics/BLayout";
import BWrapper from "../../../../../components/basics/BWrapper";

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

const Layout = styled(BLayout)`
width: min-content;
height: min-content;
padding: 0.3% 1%;
border-radius: var(--border-radius-1);
background-color: var(--color-4);
`;
const Wrapper = styled(BWrapper)`
`;