import styled from "styled-components";
import BasicSpace from "../components/basics/BasicSpace";
import BasicLayout from "../components/basics/BasicLayout";
import BasicWrapper from "../components/basics/BasicWrapper";
import Profile from "./Profile";

const Header = () => {

    return (
        <Wrapper>
            <Layout>
                <Links>
                    <Brand onClick={() => window.location = '/'}>Курсор</Brand>
                    <Link href="/contacts">Контакты</Link>
                    <Link href="/news">Новости</Link>
                    <Link href="/about">Сводка</Link>
                    <Link href="/courses">Курсы</Link>
                    <Link href="/test">Тестирование</Link>
                </Links>
                <BasicSpace />
                <Profile />
            </Layout>
        </Wrapper>
    );

};

export default Header;

const Layout = styled(BasicLayout)`
justify-content: space-between;
`;
const Wrapper = styled(BasicWrapper)`
grid-area: header;
padding-inline: 1%;
background-color: var(--color-2);
`;
const Brand = styled.h3`
padding: 3%;
border-radius: 12px;

&:hover {
    background-color: var(--color-1) !important;
}

`;
const Links = styled(BasicLayout)`
gap: 1%;
width: 80%;
`;
const Link = styled.a`
color: #fff;
padding: 1%;
border-radius: 12px;
text-decoration: underline;

&:hover {
    background-color: var(--color-1);
    text-decoration: none;
}

`;