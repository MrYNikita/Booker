//#region YI

import { Button, ButtonL, ButtonR, Cover, Header, Layout, Panel, Title } from "./style";
import { ReactComponent as SvgBack } from '../../svg/back.svg';
import { ReactComponent as SvgDone } from '../../svg/done.svg';
import { ReactComponent as SvgQuestion } from '../../svg/question.svg';
import { YCTableBalance } from "./TableBalance/component";

//#endregion
//#region YT

/** ### YCDevideTableBalanceT
 * - Тип `T`
 * - Версия `0.0.0`
 * - Модуль `src\ui\TableBalance`
 *
 * Основной параметр компонента `YCDevideTableBalance`.
 *
 * @typedef {YCDevideTableBalanceTU} YCDevideTableBalanceT
 *
*/
/** ### YCDevideTableBalanceTU
 * - Тип `TU`
 * - Версия `0.0.0`
 * - Модуль `src\ui\TableBalance`
 *
 * Уникальные параметры компонента `YCDevideTableBalance`.
 *
 * @typedef YCDevideTableBalanceTU
 * @prop {string} title
 *
*/

//#endregion

/**
 * ### YCDevideTableBalance
 * - Тип `E-R-C`
 * ***
 *
 *
 *
 * ***
 * @arg {YCDevideTableBalanceT} transmits `Передача`
 *
*/
export const YCDevideTableBalance = (transmits) => {

    const {

        title,

    } = transmits;

    return (

        <Cover>
            <Header>
                <Title>{title}</Title>
            </Header>
            <Layout>
                <YCTableBalance>

                </YCTableBalance>
            </Layout>
            <Panel>
                <ButtonL>
                    <SvgBack width='100%' height='100%'/>
                </ButtonL>
                <Button>
                    <SvgDone width='100%' height='100%'/>
                </Button>
                <ButtonR>
                    <SvgQuestion width='100%' height='100%'/>
                </ButtonR>
            </Panel>
        </Cover>

    );

};