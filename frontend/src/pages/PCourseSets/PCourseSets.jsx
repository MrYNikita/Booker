import { useState } from "react";
import styled from "styled-components";
import BLayout from "../../components/basics/BLayout";
import BWrapper from "../../components/basics/BWrapper";
import SearchPanel from "./SearchPanel/SearchPanel";
import CourseSetCard from "./CourseSetsCard/CourseSetCard/CourseSetCard";
import CourseSetsCard from "./CourseSetsCard/CourseSetsCard";

// Курсы
import courseManagmentAccounting from "../../courses/course";

const PCourseSets = () => {

    const cardsAll = [
        courseManagmentAccounting,
    ];

    // const cardsAll = [

    //     createCardJect(
    //         'Принципы невыгорания',
    //         'https://mse.msu.ru/wp-content/uploads/2019/05/camera-coffee-composition-1509428.jpg',
    //         0,
    //     ),
    //     createCardJect(
    //         'Бухгалтерия',
    //         'https://proforientator.ru/upload/img/publications/stati/buhgalter1.jpg',
    //         1,
    //         'Бухгалтерия',
    //         'Баланс',
    //     ),
    //     createCardJect(
    //         'Базовый Менеджмент',
    //         'https://studybridge.com.ua/wp-content/uploads/2021/07/top-management2.jpg',
    //         2
    //     ),
    //     createCardJect(
    //         'Софт-Скилл',
    //         'https://proforientator.ru/publications/articles/20_soft_skills1.jpg',
    //         3,
    //         'y',
    //         'x',
    //     ),
    //     createCardJect(
    //         'Профессиональная этика',
    //         'https://etiketclub.ru/wp-content/uploads/2020/04/delovoj-ehtiket1.jpg',
    //         4,
    //         'y',
    //     ),
    //     createCardJect(
    //         'История купца Антуана',
    //         'https://finkalendar.ru/media/images/07_Kupec1.width-640.jpg',
    //         5,
    //         'История',
    //         'Бухгалтерия',
    //         'Финансы',
    //         'Потоки',
    //         'Вложения',
    //         'Капитал',
    //     ),

    // ];

    const [cards, setCards] = useState([...cardsAll]);

    const getCardsByTags = (tags) => {

        return tags.length ? cardsAll.filter(card => card.tags.length && tags.every(tag => card.tags.includes(tag))) : cardsAll;

    };
    const handleChangeSearch = (name, tags) => {

        const cardsActual = getCardsByTags(tags);

        if (name) {

            setCards(cardsActual.filter(card => card.name.startsWith(name)));

        } else {

            setCards(cardsActual);

        };

    };

    return (
        <Wrapper>
            <Layout>
                <SearchPanel
                    handleChangeSearch={handleChangeSearch}
                />
                <CourseSetsCard>
                    {cards.map((card, key) => <CourseSetCard {...card} key={key} />)}
                </CourseSetsCard>
            </Layout>
        </Wrapper>
    );

};

export default PCourseSets;

const Layout = styled(BLayout)`
display: grid;
grid-template-areas: "sets panel";
grid-template-columns: 80% 20%;
`;
const Wrapper = styled(BWrapper)`
padding: 0.25% 0.25% 0.25% 0.25%;
`;