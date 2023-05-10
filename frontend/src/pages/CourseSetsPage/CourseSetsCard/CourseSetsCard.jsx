import styled from "styled-components";
import BasicLayout from "../../../components/basics/BasicLayout";
import BasicWrapper from "../../../components/basics/BasicWrapper";

const CourseSetsCard = (props) => {

    const {

        children,

    } = props;

    return (
        <Wrapper>
            <Layout>
                {children}
            </Layout>
        </Wrapper>
    );

};

export default CourseSetsCard;

const Layout = styled(BasicLayout)`
gap: 2% 1%;
padding: 1%;
flex-wrap: wrap;
overflow-y: auto;
align-items: start;
align-content: flex-start;
border-radius: var(--border-radius);
justify-content: start;
background-color: var(--color-3);
`;
const Wrapper = styled(BasicWrapper)`
padding: 0 0.45% 0 0.35%;
grid-area: sets;
`;