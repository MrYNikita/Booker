import styled from "styled-components";
import BLayout from "../../../components/basics/BLayout";
import BasicTitle from "../../../components/basics/BTitle";
import BWrapper from "../../../components/basics/BWrapper";
import Task from "./Task/Task";

const TaskSets = () => {

    return (
        <Wrapper>
            <Layout>
                <Title>Материал</Title>
                <Task/>
            </Layout>
        </Wrapper>
    );

};

export default TaskSets;

const Title = styled(BasicTitle)`
padding: 2vh 0vw 0 0;
width: 100%;
font-size: 1rem;
`;
const Layout = styled(BLayout)`
align-items: start;
justify-content: left;
flex-direction: column;
border-radius: var(--border-radius-2);
background-color: var(--color-3);
`;
const Wrapper = styled(BWrapper)`
padding: 1vh 0.5vw;
grid-area: tasks;
`;