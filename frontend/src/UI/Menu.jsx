import styled from "styled-components";
import BasicLayout from "../components/basics/BasicLayout";
import BasicWrapper from "../components/basics/BasicWrapper";

const Menu = () => {

    return (
        <Wrapper>
            <Layout>
                <Point>Профиль</Point>
                <Point>Настройки</Point>
                <PointLast onClick={() => window.location = 'sign'}>Выход</PointLast>
            </Layout>
        </Wrapper>
    );

};

export default Menu;

const Point = styled.button`
width: 100%;
height: 4vh;
background-color: transparent;
border-bottom: 2px solid var(--color-3);

&:hover{
    background-color: var(--color-1);
}
`;
const PointLast = styled(Point)`
border-bottom: none;
`;
const Layout = styled(BasicLayout)`
display: flex;
text-align: center;
justify-content: start;
flex-direction: column;
`;
const Wrapper = styled(BasicWrapper)`
top: 12vh;
height: min-content;
width: 7vw;
position: absolute;
animation: 0.5s hide reverse forwards, 0.5s move;
box-shadow: var(--box-shadow-1);
border-radius: var(--border-radius);
background-color: var(--color-4);
border: 3px solid var(--color-3);
`;