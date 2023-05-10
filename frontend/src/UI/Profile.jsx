import { useState } from "react";
import styled from "styled-components";
import BasicLayout from "../components/basics/BasicLayout";
import BasicWrapper from "../components/basics/BasicWrapper";
import { ReactComponent as SVGTriangle } from '../svg/symbols/triangle.svg';
import Menu from "./Menu";

const Profile = () => {

    const [toogle, setToogle] = useState(false);

    return (
        <Wrapper>
            <Layout>
                <Toogle
                    onClick={e => {
                        setToogle(!toogle);
                    }}
                >
                    <Name>Рядовой Пользователь</Name>
                    <Avatar src={'https://avatars.githubusercontent.com/u/86610604?v=4'} />
                    <Trinagle toogle={toogle.toString()} />
                </Toogle>
                {toogle && <Menu />}

            </Layout>
        </Wrapper>
    );

};

export default Profile;

const Name = styled.p`
`;
const Avatar = styled.img`
width: 3vw;
border: 2px solid var(--color-1);
border-radius: 50%;
`;
const Toogle = styled(BasicLayout)`
column-gap: 4%;
&:hover {
    background-color: var(--color-1);
}
`;
const Trinagle = styled(SVGTriangle)`
width: 6%;
right: 2%;
position: relative;

${props => props.toogle === 'true' ? `rotate: 180deg;` : ''}

`;

const Layout = styled(BasicLayout)`
gap: 5%;
background-color: var(--color-4);
`;
const Wrapper = styled(BasicWrapper)`
width: 40%;
height: 70%;
z-index: 1;
border-radius: var(--border-radius);
`;