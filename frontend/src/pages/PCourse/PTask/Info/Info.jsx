import styled from "styled-components";
import BLayout from "../../../../components/basics/BLayout";
import BSpace from "../../../../components/basics/BSpace";
import BWrapper from "../../../../components/basics/BWrapper";
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

const Space = styled(BSpace)`
`;
const Layout = styled(BLayout)`
`;
const Wrapper = styled(BWrapper)`
grid-area: info;
background-color: var(--color-3);
`;