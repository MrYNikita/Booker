import styled from "styled-components";
import BLayout from "./components/basics/BLayout";
import BWrapper from "./components/basics/BWrapper";

function App() {

    return (

        <Wrapper>
            <Layout>

            </Layout>
        </Wrapper>

    );
}

export default App;

const Wrapper = styled(BWrapper)`



`;
const Layout = styled(BLayout)`

display: grid;
grid-template-areas:
    "header header"
    "panel main"
    "footer footer";

${(props: any) => props.visPanel ? 'grid-template-columns: 5% 95%;' : 'grid-template-columns: 0% 100%;'}
${(props: any) => props.visFooter ? 'grid-template-rows: 10% auto 10%;' : 'grid-template-rows: 10% auto 0%;'}

@media screen && (width <= 800px) {
    ${(props: any) => props.visPanel ? 'grid-template-columns: 10% 90%;' : 'grid-template-columns: 0% 100%;'}
}
    
`;