import styled from "styled-components";
import { course0 } from "../../classes/Course";
import BasicLayout from "../../components/basics/BasicLayout";
import BasicWrapper from "../../components/basics/BasicWrapper";
import Preview from "./Preview/Preview";
import TaskSets from "./TaskSets/TaskSets";

const PageCourse = () => {

    return (
        <Wrapper>
            <Layout>
                <Preview {...course0} />
                <TaskSets>

                </TaskSets>
            </Layout>
        </Wrapper>
    );

};

export default PageCourse;

const Wrapper = styled(BasicWrapper)`
`;
const Layout = styled(BasicLayout)`
overflow-y: visible;
display: grid;
grid-template-areas:
    "preview preview"
    "tasks .";
grid-template-columns: 1fr 3fr;
grid-template-rows: 60vh 70vh;
`;