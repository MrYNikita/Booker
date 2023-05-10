import styled from "styled-components";
import BasicLayout from "../../../../components/basics/BasicLayout";
import BasicWrapper from "../../../../components/basics/BasicWrapper";

const Task = () => {

    return (
        <Wrapper>
            <Layout
                onClick={() => {
                    window.location += '/task/0';
                }}
            >
                Упражнение 1
            </Layout>
        </Wrapper>
    );

};

export default Task;

const Layout = styled(BasicLayout)`
background-color: var(--color-2);
border-radius: var(--border-radius-1);

&:hover {
    background-color: var(--color-6);
}
`;
const Wrapper = styled(BasicWrapper)`
height: 5vh;
padding: 1% 10%;
`;