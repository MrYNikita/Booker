import styled from "styled-components";
import BLayout from "../basics/BLayout";
import BasicTitle from "../basics/BTitle";
import BWrapper from "../basics/BWrapper";
import CourseMaterial from "./CourseMaterial";

const CourseMaterials = () => {

    return (
        <Wrapper>
            <Layout>
                <Title>Материал</Title>
                <CourseMaterial />
            </Layout>
        </Wrapper>
    );

};

export default CourseMaterials;

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