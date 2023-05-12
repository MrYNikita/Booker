import styled from "styled-components";
import BLayout from "../../../components/basics/BLayout";
import BWrapper from "../../../components/basics/BWrapper";
import Index from "./Index/Index";
import Info from "./Info/Info";
import {ReactComponent as DirectionSVG} from '../../../svg/symbols/arrow.svg';

const PTask = () => {

    return (
        <Wrapper>
            <Layout>
                <Info />
                <Index />
                <Direction />
                <DirectionRight />
            </Layout>
        </Wrapper>
    );

};

export default PTask;

const Direction = styled(DirectionSVG)`
fill: var(--color-4);
width: 100%;
grid-area: left;

&:hover {
    fill: var(--color-1);
    transition-duration: 0.1ms;
}
`;
const DirectionRight = styled(Direction)`
rotate: 180deg;
grid-area: right;
`;
const Layout = styled(BLayout)`
display: grid;
grid-template-areas:
    "info info info"
    "left . right"
    ". index .";
grid-template-rows: 5vh 1fr 5vh;
grid-template-columns: 5vw 1fr 5vw;
`;
const Wrapper = styled(BWrapper)`
`;