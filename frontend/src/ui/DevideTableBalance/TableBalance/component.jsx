//#region YI

import { YCColumn } from './Column/component';
import { Condition, Cover, Table } from './style';

//#endregion
//#region YT

/** ### YCTableBalanceT
 * - Тип `T`
 * - Версия `0.0.0`
 * - Модуль `src\ui\DevideTableBalance\TableBalance`
 *
 * Основной параметр компонента `YCTableBalance`.
 *
 * @typedef {YCTableBalanceTU} YCTableBalanceT
 *
*/
/** ### YCTableBalanceTU
 * - Тип `TU`
 * - Версия `0.0.0`
 * - Модуль `src\ui\DevideTableBalance\TableBalance`
 *
 * Уникальные параметры компонента `YCTableBalance`.
 *
 * @typedef YCTableBalanceTU
 * @prop {any} _
 *
*/

//#endregion

/**
 * ### YCTableBalance
 * - Тип `E-R-C`
 * ***
 *
 *
 *
 * ***
 * @arg {YCTableBalanceT} transmits `Передача`
 *
*/
export const YCTableBalance = (transmits) => {

    const {



    } = transmits;



    return (

        <Cover>
            <Condition>
                <strong>Условие</strong>
                <p>инвесторы вручили 500 т.р.</p>
            </Condition>
            <Table>
                <YCColumn title='Актив'/>
                <YCColumn/>
            </Table>
        </Cover>

    );

};