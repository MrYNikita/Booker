import { useRef } from "react";
import styled from "styled-components";
import BasicLayout from "../components/basics/BasicLayout";
import BasicWrapper from "../components/basics/BasicWrapper";

const PageTest = () => {

    const text = useRef('');

    return (
        <Wrapper>
            <Layout>
                <Field contentEditable
                    onInput={(e) => {

                        let string = text.current = e.target.innerText;
                        
                        const rows = string.split('\n').map(row => {

                            return row.split(' ').map(word => {

                                if (word === 'name') {

                                    word = `<span style="color: red;">${word}</span>`;

                                };

                                return word;

                            }).join(' ');

                        }).join('\n');

                        e.target.innerHTML = rows;

                    }}
                    onKeyDown={(e) => {

                        

                    }}
                >
                </Field>
            </Layout>
        </Wrapper>
    );

};

export default PageTest;

const Layout = styled(BasicLayout)`
`;
const Wrapper = styled(BasicWrapper)`
`;
const Field = styled.div`
color: black;
width: 20vw;
height: 20vh;
border: 5px solid black;
resize: both;
transition: none !important;

&>span {
    color: black;
}
`;