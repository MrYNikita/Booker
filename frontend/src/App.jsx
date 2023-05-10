import styled from "styled-components";
import BasicLayout from "./components/basics/BasicLayout";
import BasicWrapper from "./components/basics/BasicWrapper";
import Footer from "./UI/Footer";
import Header from "./UI/Header";
import Main from "./UI/Main";
import Panel from "./UI/Panel";
import { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import PageSignUp from "./pages/PageSignUp";
import PageCourses from "./pages/CourseSetsPage/CourseSetsPage";
import PageTest from "./pages/PageTest";
import PageCourse from "./pages/PageCourse/PageCourse";
import PTask from "./pages/PageCourse/PTask/PTask";

function App() {

    const [visPanel, setVisPanel] = useState(false);
    // const [visFooter, setVisFooter] = useState(false);

    window.addEventListener('beforeunload', e => {



    });

    document.body.addEventListener('keydown', e => {



    });

    return (
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
                            <Route path='test' Component={PageTest} />
                            <Route path='sign' Component={PageSignUp} />
                            <Route path='courses' Component={PageCourses} />
                            <Route path='course/:id' Component={PageCourse}/>
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
    );
}

export default App;

const Layout = styled(BasicLayout)`
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
const Wrapper = styled(BasicWrapper)`
`;