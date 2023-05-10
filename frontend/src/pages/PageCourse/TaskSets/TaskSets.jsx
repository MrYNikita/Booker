import styled from "styled-components";
import BasicLayout from "../../../components/basics/BasicLayout";
import BasicTitle from "../../../components/basics/BasicTitle";
import BasicWrapper from "../../../components/basics/BasicWrapper";
import Task from "./Task/Task";

const TaskSets = () => {

    return (
        <Wrapper>
            <Layout>
                <Title>Задачник</Title>
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
const Layout = styled(BasicLayout)`
align-items: start;
justify-content: left;
flex-direction: column;
border-radius: var(--border-radius-2);
background-color: var(--color-4);
`;
const Wrapper = styled(BasicWrapper)`
padding: 1vh 0.5vw;
grid-area: tasks;
`;