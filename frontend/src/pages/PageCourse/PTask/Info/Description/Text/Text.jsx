import styled from "styled-components";
import BasicLayout from "../../../../../../components/basics/BasicLayout";
import BasicWrapper from "../../../../../../components/basics/BasicWrapper";

const Text = () => {

    return (
        <Wrapper>
            <Layout>
                Объявлен уставный капитал на сумму – 3000 тыс. руб.
            </Layout>
        </Wrapper>
    );

};

export default Text;

const Layout = styled(BasicLayout)`
justify-content: left;
align-items: start;
`;
const Wrapper = styled(BasicWrapper)`
top: 7vh;
width: 10vw;
height: min-content;
padding: 1vh 1vw;
position: absolute;
border-radius: var(--border-radius-1);
background-color: var(--color-3);
animation: 0.5s hide reverse forwards, 0.5s move;
`;