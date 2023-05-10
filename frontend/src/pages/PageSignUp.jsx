import styled from "styled-components";
import AuthVK from "../auth/AuthVK";
import BasicLayout from "../components/basics/BasicLayout";
import BasicWrapper from "../components/basics/BasicWrapper";
import BasicTitle from "../components/basics/BasicTitle";
import BasicInput from "../components/basics/BasicInput";
import BasicLine from "../components/basics/BasicLine";
import BasicHr from "../components/basics/BasicHr";

const PageSignUp = () => {

    return (
        <Wrapper>
            <Layout as='form'>
                <FieldSet as='fieldset'>
                    <Legend as='legend'>Регистрация</Legend>
                    <Field>
                        <Label>Логин</Label>
                        <Input />
                    </Field>
                    <Field>
                        <Label>Пароль</Label>
                        <Input type='password' />
                    </Field>
                    <Field>
                        <Label>Почта</Label>
                        <Input type='email' />
                    </Field>
                    <Field>
                        <Line>
                            <Label>Дата рождения</Label>
                            <Line columnGap={3}>
                                <Input width={40} maxLength={2} />
                                <Input width={40} maxLength={2} />
                                <Input width={60} maxLength={4} />
                            </Line>
                        </Line>
                    </Field>
                    <Hr />
                    <Field height={30}>
                        <AuthTitle>Варианты входа</AuthTitle>
                        <AuthLine columnGap={3} flexWrap={'wrap'}>
                            <AuthVK />
                        </AuthLine>
                    </Field>
                </FieldSet>
            </Layout>
        </Wrapper>
    );

};

export default PageSignUp;

const Hr = styled(BasicHr)`
color: var(--color-3);
width: 95%;
height: 1px;
border-width: 1px;
border-style: solid;
border-radius: 12px;
`;
const Layout = styled(BasicLayout)`
width: 20vw;
height: 80vh;
box-shadow: var(--box-shadow-1);
border-radius: var(--border-radius);
background-color: var(--color-2);

@media screen and (width <= 1100px) {
    width: 250px;
}

`;
const Wrapper = styled(BasicWrapper)`
`;

const Line = styled(BasicLine)`
height: auto;
`;
const Label = styled(BasicTitle).attrs(() => ({ as: 'h5' }))`
width: 100%;
text-align: left;
padding-left: 5%;
`;
const Input = styled(BasicInput)`
width: 100%;

${props => props.width && `width: ${props.width}%;`}
`;
const Field = styled(BasicLayout).attrs(() => ({ as: 'div' }))`
gap: 1%;
padding-inline: 5%;
flex-direction: column;
justify-content: start;

${props => `height: ${props.height ? props.height : `10`}%;`}
`;
const Legend = styled(BasicTitle)`
padding: 5% 0 5% 0;
`;
const FieldSet = styled(BasicLayout)`
flex-direction: column;
justify-content: start;
`;

const AuthTitle = styled(BasicTitle).attrs(() => ({ as: 'h5' }))`
padding-top: 5%;
`;
const AuthLine = styled(Line)`
padding: 2%;
border-radius: var(--border-radius);
`;