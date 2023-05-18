import styled from "styled-components";
import BLayout from "../basics/BLayout";
import BWrapper from "../basics/BWrapper";
import courseManagmentAccounting from "../../courses/course";
import CoursePreview from "../UI/CoursePreview";
import CourseMaterials from "../UI/CourseMaretials";

const PCourse = () => {

    return (
        <Wrapper>
            <Layout>
                <CoursePreview {...courseManagmentAccounting} />
                <CourseMaterials>

                </CourseMaterials>
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