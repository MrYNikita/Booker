import styled from "styled-components";
import BasicLayout from "../components/basics/BasicLayout";
import BasicWrapper from "../components/basics/BasicWrapper";

const Main = (props) => {

    return (
        <Wrapper {...props}>
            <Layout>
                {props.children}
            </Layout>
        </Wrapper>
    );

};

export default Main;

const Layout = styled(BasicLayout)`
`;
const Wrapper = styled(BasicWrapper)`
z-index: 0;
position: relative;
grid-area: main;
animation: 0.5s hide reverse forwards;
`;