//#region YI

import { Count, Cover, Label } from './style';

//#endregion
//#region YT

/** ### YCRowT
 * - Тип `T`
 * - Версия `0.0.0`
 * - Модуль `src\ui\DevideTableBalance\TableBalance\Column\Row`
 *
 * Основной параметр компонента `YCRow`.
 *
 * @typedef {YCRowTU} YCRowT
 *
*/
/** ### YCRowTU
 * - Тип `TU`
 * - Версия `0.0.0`
 * - Модуль `src\ui\DevideTableBalance\TableBalance\Column\Row`
 *
 * Уникальные параметры компонента `YCRow`.
 *
 * @typedef YCRowTU
 * @prop {string} point
 * @prop {number} count
 *
*/

//#endregion

/**
 * ### YCRow
 * - Тип `E-R-C`
 * ***
 *
 *
 *
 * ***
 * @arg {YCRowT} transmits `Передача`
 *
*/
export const YCRow = (transmits) => {

    const {

        point,
        count,

    } = transmits;



    return (

        <Cover>
            <Label>{point}</Label>
            <Count>{count} т.р.</Count>
        </Cover>

    );

};