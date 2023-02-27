//#region YI

import { useRef, useState } from 'react';
import { YCRow } from './Row/component';
import { YCRowAdder } from './RowAdder/conponent';
import { ButtonAdd, Cover, Header, Rows, Sum } from './style';

//#endregion
//#region YT

/** ### YCColumnT
 * - Тип `T`
 * - Версия `0.0.0`
 * - Модуль `src\ui\DevideTableBalance\TableBalance\Column`
 *
 * Основной параметр компонента `YCColumn`.
 *
 * @typedef {YCColumnTU} YCColumnT
 *
*/
/** ### YCColumnTU
 * - Тип `TU`
 * - Версия `0.0.0`
 * - Модуль `src\ui\DevideTableBalance\TableBalance\Column`
 *
 * Уникальные параметры компонента `YCColumn`.
 *
 * @typedef YCColumnTU
 * @prop {string} title
 *
*/

//#endregion

/**
 * ### YCColumn
 * - Тип `E-R-C`
 * ***
 *
 *
 *
 * ***
 * @arg {YCColumnT} transmits `Передача`
 *
*/
export const YCColumn = (transmits) => {

    const {

        title

    } = transmits;

    const [isCreate, setIsCreate] = useState(false);
    const [rows, setRows] = useState([

        { point: 'Займы', count: 780, },
        { point: 'Налоги', count: 100, },
        { point: 'Инвестиции', count: 350, },
        { point: 'Инвестиции', count: 350, },
        { point: 'Инвестиции', count: 350, },
        { point: 'Инвестиции', count: 350, },
        { point: 'Инвестиции', count: 350, },
        { point: 'Инвестиции', count: 350, },
        { point: 'Инвестиции', count: 350, },
        { point: 'Инвестиции', count: 350, },
        { point: 'Инвестиции', count: 350, },
        { point: 'Инвестиции', count: 350, },
        { point: 'Инвестиции', count: 350, },
        { point: 'Инвестиции', count: 350, },
        { point: 'Инвестиции', count: 350, },
        { point: 'Инвестиции', count: 350, },
        { point: 'Инвестиции', count: 350, },
        { point: 'Инвестиции', count: 350, },
        { point: 'Инвестиции', count: 350, },

    ]);

    const buttonSymbol = useRef('+');
    const changeStatusCreate = _ => {

        if (isCreate) {

            setIsCreate(false);
            buttonSymbol.current = '+';

        } else {

            setIsCreate(true);
            buttonSymbol.current = '<';

        };

    };

    return (

        <Cover>
            <Header>
                <strong>{title ?? 'Заголовок'}</strong>
                <ButtonAdd onClick={changeStatusCreate}>{buttonSymbol.current}</ButtonAdd>
            </Header>
            {isCreate ? <YCRowAdder setRows={r => {

                changeStatusCreate();
                setRows([...rows, r]);

            }}/> :
                <Rows>
                    {rows.length && rows.map((row, i) => <YCRow {...row} key={i} />)}
                </Rows>
            }
            <Sum>
                <strong>Итог: {rows.reduce((p, c) => p + c.count, 0)}</strong>
            </Sum>
        </Cover>

    );

};