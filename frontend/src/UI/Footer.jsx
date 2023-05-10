import styled from "styled-components";
import BasicLayout from "../components/basics/BasicLayout";
import BasicWrapper from "../components/basics/BasicWrapper";

const Footer = () => {

    return (
        <Wrapper>
            <Layout>

            </Layout>
        </Wrapper>
    );

};

export default Footer;

const Layout = styled(BasicLayout)`
`;
const Wrapper = styled(BasicWrapper)`
grid-area: footer;
background-color: var(--color-3);
`;