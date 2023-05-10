import styled from "styled-components";
import BasicLayout from "../../../../components/basics/BasicLayout";
import BasicSpace from "../../../../components/basics/BasicSpace";
import BasicWrapper from "../../../../components/basics/BasicWrapper";
import Description from "./Description/Description";
import Timer from "./Timer/Timer";

const Info = () => {

    return (
        <Wrapper>
            <Layout>
                <Description />
                <Timer />
                <Space />
            </Layout>
        </Wrapper>
    );

};

export default Info;

const Space = styled(BasicSpace)`
`;
const Layout = styled(BasicLayout)`
`;
const Wrapper = styled(BasicWrapper)`
grid-area: info;
background-color: var(--color-3);
`;