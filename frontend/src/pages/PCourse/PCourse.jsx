import styled from "styled-components";
import BLayout from "../../components/basics/BLayout";
import BWrapper from "../../components/basics/BWrapper";
import courseManagmentAccounting from "../../courses/course";
import Preview from "./Preview/Preview";
import TaskSets from "./TaskSets/TaskSets";

const PCourse = () => {

    return (
        <Wrapper>
            <Layout>
                <Preview {...courseManagmentAccounting} />
                <TaskSets>

                </TaskSets>
            </Layout>
        </Wrapper>
    );

};

export default PCourse;

const Wrapper = styled(BWrapper)`
`;
const Layout = styled(BLayout)`
overflow-y: visible;
display: grid;
grid-template-areas:
    "preview preview"
    "tasks .";
grid-template-columns: 1fr 3fr;
grid-template-rows: 60vh 70vh;
`;