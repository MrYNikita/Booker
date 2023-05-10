import styled from "styled-components";
import BasicLayout from "../../../../components/basics/BasicLayout";
import BasicWrapper from "../../../../components/basics/BasicWrapper";

const Index = () => {

    return (
        <Wrapper>
            <Layout>
                <Point active />
                <Point />
                <Point />
                <Point />
            </Layout>
        </Wrapper>
    );

};

export default Index;

const Point = styled.div`
width: 1vw;
height: 2vh;
border-radius: 50%;
background-color: var(--color-7);

${props => props.active ? `background-color: var(--color-1);` : `background-color: var(--color-7);`}
`;
const Layout = styled(BasicLayout)`
gap: 0 1vw;
border-radius: var(--border-radius-1);
background-color: var(--color-3);
`;
const Wrapper = styled(BasicWrapper)`
padding: 1vh 30vw;
grid-area: index;
`;