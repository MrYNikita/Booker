import styled from "styled-components";
import BLayout from "./components/basics/BLayout";
import BWrapper from "./components/basics/BWrapper";
import Footer from "./UI/Footer";
import Header from "./UI/Header";
import Main from "./UI/Main";
import Panel from "./UI/Panel";
import { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import PSignUp from "./pages/PSignUp";
import PCourseSets from "./pages/PCourseSets/PCourseSets";
import PTest from "./pages/PTest";
import PCourse from "./pages/PCourse/PCourse";
import PTask from "./pages/PCourse/PTask/PTask";
import { Provider } from "react-redux";

function App() {

    const [visPanel, setVisPanel] = useState(false);
    // const [visFooter, setVisFooter] = useState(false);

    window.addEventListener('beforeunload', e => {



    });

    document.body.addEventListener('keydown', e => {



    });

    return (
        <Provider>
            <Wrapper>
                <Layout
                    visPanel={visPanel}
                // visFooter={visFooter}
                >
                    <Header />
                    <Main
                        // Прокрутка с футером
                        // onWheel={e => {
                        //     if (e.deltaY > 0) {
                        //         if (!visFooter) {
                        //             setVisFooter(true);
                        //         }
                        //     } else {
                        //         if (visFooter) {
                        //             setVisFooter(false);
                        //         }
                        //     }

                        // }}
                        onMouseMove={e => {
                            if (!e.clientX) {
                                setVisPanel(true);
                            }
                        }}
                    >
                        <Router>
                            <Routes>
                                <Route exact path='/' />
                                <Route path='test' Component={PTest} />
                                <Route path='sign' Component={PSignUp} />
                                <Route path='courses' Component={PCourseSets} />
                                <Route path='course/:id' Component={PCourse} />
                                <Route path='course/:courseId/task/:taskId' Component={PTask} />
                            </Routes>
                        </Router>
                    </Main>
                    <Panel
                        onMouseLeave={e => {
                            if (visPanel) {
                                setVisPanel(false);
                            }
                        }}
                    />
                    <Footer />
                </Layout>
            </Wrapper>
        </Provider>
    );
}

export default App;

const Layout = styled(BLayout)`
display: grid;
grid-template-areas:
    "header header"
    "panel main"
    "footer footer";

${props => props.visPanel ? 'grid-template-columns: 5% 95%;' : 'grid-template-columns: 0% 100%;'}
${props => props.visFooter ? 'grid-template-rows: 10% auto 10%;' : 'grid-template-rows: 10% auto 0%;'}

@media screen && (width <= 800px) {
    ${props => props.visPanel ? 'grid-template-columns: 10% 90%;' : 'grid-template-columns: 0% 100%;'}
}
`;
const Wrapper = styled(BWrapper)`
`;