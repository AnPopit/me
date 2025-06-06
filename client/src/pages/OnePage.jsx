import React from "react";
import {Link} from "react-router-dom";

export const OnePage = () => (
    <>
    <header>
        <div className='header'>
            <Link to="/">На главную страницу</Link>
        </div>
    </header>
        <main>
            <h1>Анна Политова</h1>
            <h2>Образование</h2>
            <p>C 2016-2020 обучалась в Уральском Федеральном Университете, факультет: ИРИТ-РТФ, специальность:
                Инфокоммуникационные технологии и системы связи</p>
            <p>С 2023 - 2025 обучалась на Хекслете по специальности Frontend-разработчик</p>
            <h2>Опыт работы</h2>
            <p>С 2020 года работаю в Мотиве. Это оператор сотовой связи уральского региона. Занимаю должность инженера радиопланирования</p>
            <h2>Хобби</h2>
            <p>Люблю природу, походы</p>
        </main>
    </>
);