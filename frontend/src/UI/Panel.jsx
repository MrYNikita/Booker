import styled from "styled-components";
import BasicLayout from "../components/basics/BasicLayout";
import BasicWrapper from "../components/basics/BasicWrapper";
import { ReactComponent as CalculateSVG } from '../svg/symbols/calculate.svg';
import { ReactComponent as DirectorySVG } from '../svg/symbols/directory.svg';

const Panel = (props) => {

    return (
        <Wrapper {...props}>
            <Layout>
                <Icon>
                    <Calculate />
                </Icon>
                <Icon>
                    <Directory />
                </Icon>
            </Layout>
        </Wrapper>
    );

};

export default Panel

const Calculate = styled(CalculateSVG)`
`;
const Directory = styled(DirectorySVG)`
width: 50%;
`;
const Icon = styled.button`
display: flex;
justify-content: center;
align-items: center;
width: 100%;
height: 10%;
padding: 10%;
background-color: transparent;
&:hover{
    background-color: var(--color-1);
}
&>svg{
    width: 30px;
    height: 30px;
}
`;
const Layout = styled(BasicLayout)`
flex-direction: column;
justify-content: start;
`;
const Wrapper = styled(BasicWrapper)`
grid-area: panel;
background-color: var(--color-4);
`;