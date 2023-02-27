//#region YI

import { useState } from 'react';
import { Cover, Done, Input, Option, Select } from './style';

//#endregion
//#region YT

/** ### YCRowAdderT
 * - Тип `T`
 * - Версия `0.0.0`
 * - Модуль `src\ui\DevideTableBalance\TableBalance\Column\RowAdder`
 *
 * Основной параметр компонента `YCRowAdder`.
 *
 * @typedef {YCRowAdderTU} YCRowAdderT
 *
*/
/** ### YCRowAdderTU
 * - Тип `TU`
 * - Версия `0.0.0`
 * - Модуль `src\ui\DevideTableBalance\TableBalance\Column\RowAdder`
 *
 * Уникальные параметры компонента `YCRowAdder`.
 *
 * @typedef YCRowAdderTU
 * @prop {function(any):void} setRows
 *
*/

//#endregion

/**
 * ### YCRowAdder
 * - Тип `E-R-C`
 * ***
 *
 *
 *
 * ***
 * @arg {YCRowAdderT} transmits `Передача`
 *
*/
export const YCRowAdder = (transmits) => {

    const {

        setRows,

    } = transmits;

    const [count, setCount] = useState(0);
    const [select, setSelect] = useState('');

    const points = [

        'Вариант1',
        'Вариант2',
        'Вариант3',

    ];

    return (

        <Cover>
            <Select list='list' onChange={e => {

                setSelect(e.target.value);

            }}/>
            <Input type='number' onChange={e => {

                setCount(+e.target.value);

            }}/>
            <Done onClick={_ => setRows({ point: select, count: count })}>✓</Done>
            <datalist id='list'>
                {points.length && points.map((point, i) => <Option key={i}>{point}</Option>)}
            </datalist>
        </Cover>

    );

};