import styled from "styled-components";
import BLayout from "../../../../components/basics/BLayout";
import BWrapper from "../../../../components/basics/BWrapper";

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

const Layout = styled(BLayout)`
background-color: var(--color-2);
border-radius: var(--border-radius-1);

&:hover {
    background-color: var(--color-6);
}
`;
const Wrapper = styled(BWrapper)`
height: 5vh;
padding: 1% 10%;
`;